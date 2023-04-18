import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerConstructor.module.css';
import BurgerConstructorCard from "../BurgerConstructorCard/BurgerConstructorCard";
import { burgerIngredientArrayType } from '../../utils/prop-types';
import { useDrop } from "react-dnd/dist/hooks";
import { addIngridientId } from "../../services/actions/userIngridients";
import { SHOW_ITEM_DETAILS } from '../../services/actions/modalDetails';
import { postItems } from "../../services/actions/orderDetails";
import { getUserIngridients } from "../../services/selectors/userIngridients";
import { getOrderFailed, getOrderNumber, getOrderSuccess } from "../../services/selectors/orderDetails";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  
  const userIngridients = useSelector(getUserIngridients);
  const orderNumber = useSelector(getOrderNumber);
  const orderSuccess = useSelector(getOrderSuccess);
  const orderFailed = useSelector(getOrderFailed);

  const checkTrue = userIngridients.bun && userIngridients.userItems.length !== 0

  const [{isHover}, dropTarget] = useDrop({
    accept: "ingridient",
    collect: monitor => ({
      dropItem: monitor.getItem(),
      isHover: monitor.isOver(),
    }),
    drop: (ingridient) => dispatch(addIngridientId(ingridient)),
  });

  const hover = isHover ? styles.onHover : '';

  const getOrderNumberId = () => {
    const ingridientsId = userIngridients.userItems.map(item => item._id);
    ingridientsId.push(userIngridients.bun._id);
    dispatch(postItems({"ingredients": ingridientsId}));
  }

  useEffect(() => {
    if (orderSuccess && typeof(orderSuccess) !== "string") {
      dispatch({
        type: SHOW_ITEM_DETAILS,
        item: orderNumber
        })
    } else if (orderFailed) {
      dispatch({
        type: SHOW_ITEM_DETAILS,
        item: !orderFailed
        })
    }
  }, [dispatch, orderFailed, orderNumber, orderSuccess])

  const orderPrice = useMemo(() => {
    return (
      userIngridients.userItems.reduce(
        (acc, current) => acc + current.price, 0
      ) + (userIngridients.bun ? userIngridients.bun.price * 2 : 0)
    )
  }, [userIngridients]);

  return(
    <section className={`${ styles.burgerConstructor } pt-25`} ref={dropTarget}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className={`${ styles.burgerConstructorContainer } ${hover}`}>
        {userIngridients.bun ? (<ConstructorElement
          extraClass="ml-8"
          type="top"
          isLocked={true}
          text={`${userIngridients.bun.name}(верх)`}
          price={userIngridients.bun.price}
          thumbnail={userIngridients.bun.image} />
          ) : (<div className={`${styles.emptyElement} ${styles.emptyElementTop} text text_type_main-medium`}>Добавьте булки</div>)}
          
        {userIngridients.userItems.length !== 0 ? (userIngridients.userItems.map((ingridient, index) => 
          <BurgerConstructorCard
            ingridient={ingridient}
            index={index}
            key={ingridient.id} />)
          ) : (<div className={`${styles.emptyElement} text text_type_main-medium`}>Добавьте соусы и начинки</div>)}
          
        {userIngridients.bun ? (<ConstructorElement
          extraClass="ml-8"
          type="bottom"
          isLocked={true}
          text={`${userIngridients.bun.name}(низ)`}
          price={userIngridients.bun.price}
          thumbnail={userIngridients.bun.image}/>
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
    </section>
  )
}

BurgerConstructor.propTypes = {
  userIngridients: burgerIngredientArrayType,
}

