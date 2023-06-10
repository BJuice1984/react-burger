import { useMemo } from "react";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { SIGN_IN } from "../../constants/constants";
import styles from './burgerConstructor.module.css';
import BurgerConstructorCard from "../BurgerConstructorCard/BurgerConstructorCard";
import { useDrop } from "react-dnd/dist/hooks";
import { addIngridientId } from "../../services/actions/userIngredients";
import { CLEAR_ORDER_NUMBER, postItems } from "../../services/actions/orderDetails";
import { getUserIngridients } from "../../services/selectors/userIngridients";
import { getOrderNumber } from "../../services/selectors/orderDetails";
import { postProfileEmail, postProfileName } from "../../services/selectors/profile";
import Modal from "../Modal/Modal";
import ModalOrder from "../ModalOrder/ModalOrder";
import { UserIngredientsType } from "../../utils/types";
import { IngredientType } from "../../utils/types";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const userIngredients: UserIngredientsType = useSelector(getUserIngridients);
  const orderNumber = useSelector(getOrderNumber);
  const profileEmail = useSelector(postProfileEmail);
  const profileName = useSelector(postProfileName);

  const checkTrue = userIngredients.bun && userIngredients.userItems.length !== 0;

  const [{isHover}, dropTarget] = useDrop({
    accept: "ingredient",
    collect: monitor => ({
      dropItem: monitor.getItem(),
      isHover: monitor.isOver(),
    }),
    drop: (ingredient: IngredientType) => dispatch(addIngridientId(ingredient)),
  });

  const hover = isHover ? styles.onHover : '';

  const getOrderNumberId = () => {
    if (!profileEmail && !profileName) {
      return navigate(SIGN_IN);
    }

    const ingredientsId = userIngredients.userItems.map(item => item._id);
    if (userIngredients.bun) {
      ingredientsId.push(userIngredients.bun._id);

      dispatch(postItems({"ingredients": ingredientsId}));
    }
  }

  const closeModalOrder = () => {
    dispatch({type: CLEAR_ORDER_NUMBER})
  }

  const orderPrice = useMemo(() => {
    return (
      userIngredients.userItems.reduce(
        (acc, current) => acc + current.price, 0
      ) + (userIngredients.bun ? userIngredients.bun.price * 2 : 0)
    )
  }, [userIngredients]);

  return(
    <section className={`${ styles.burgerConstructor } pt-25`} ref={dropTarget}>
      <div className={`${ styles.burgerConstructorContainer } ${hover}`}>
        {userIngredients.bun ? (<ConstructorElement
          extraClass="ml-8"
          type="top"
          isLocked={true}
          text={`${userIngredients.bun.name}(верх)`}
          price={userIngredients.bun.price}
          thumbnail={userIngredients.bun.image} />
          ) : (<div className={`${styles.emptyElement} ${styles.emptyElementTop} text text_type_main-medium`}>Добавьте булки</div>)}
          
        {userIngredients.userItems.length !== 0 ? (userIngredients.userItems.map((ingredient, index) => 
          <BurgerConstructorCard
            ingredient={ingredient}
            index={index}
            key={ingredient.id} />)
          ) : (<div className={`${styles.emptyElement} text text_type_main-medium`}>Добавьте соусы и начинки</div>)}
          
        {userIngredients.bun ? (<ConstructorElement
          extraClass="ml-8"
          type="bottom"
          isLocked={true}
          text={`${userIngredients.bun.name}(низ)`}
          price={userIngredients.bun.price}
          thumbnail={userIngredients.bun.image}/>
          ) : (<div className={`${styles.emptyElement} ${styles.emptyElementBottom} text text_type_main-medium`}>Добавьте булки</div>)}
 
      </div>
      <div className={`${ styles.burgerContainer } pt-10`}>
        <span className={`${ styles.burgerElementPrice } text text_type_digits-medium pr-10`}>
          {orderPrice}<CurrencyIcon type="primary"/>
        </span>
        <Button
          disabled={checkTrue ? false : true}
          htmlType="button"
          type={checkTrue ? "primary" : "secondary"}
          size="medium"
          extraClass={checkTrue ? '' : styles.buttonInactive}
          onClick={getOrderNumberId}>
          {checkTrue ? 'Оформить заказ' : 'Добавьте ингридиенты'}
        </Button>
      </div>
      {orderNumber && (
        <Modal component={<ModalOrder />} handleClose={closeModalOrder} />
      )}
    </section>
  )
}