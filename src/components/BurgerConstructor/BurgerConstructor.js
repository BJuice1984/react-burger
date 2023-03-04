import { useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerConstructor.module.css';
import BurgerConstructorCard from "../BurgerConstructorCard/BurgerConstructorCard";
import ModalOrder from "../ModalOrder/ModalOrder";
import { func } from 'prop-types';
import { burgerIngredientArrayType } from "../../utils/prop-types";
import { useDrop } from "react-dnd/dist/hooks";
import { addIngridientId } from "../../services/actions/userIngridients";

export default function BurgerConstructor({ handleOpenModal }) {
  const dispatch = useDispatch();
  
  const userIngridients = useSelector(state => state.userIngridients);

  const [{isHover}, dropTarget] = useDrop({
    accept: "ingridient",
    collect: monitor => ({
      dropItem: monitor.getItem(),
      isHover: monitor.isOver()
    }),
    drop: (ingridient) => dispatch(addIngridientId(ingridient)),
  });

  const hover = isHover ? styles.onHover : '';

  // const [isOrderPrice, setIsOrderPrice] = useState('610');

  const openModal = () => {
    handleOpenModal(<ModalOrder price={orderPrice} />)
    // setIsOrderPrice(isOrderPrice)
  }

  const orderPrice = useMemo(() => {
    return (
      userIngridients.userItems.reduce(
        (acc, current) => acc + current.price, 0
      ) + (userIngridients.bun ? userIngridients.bun.price * 2 : 0)
    )
  }, [userIngridients]);

  // console.log(price)
  // console.log(userIngridients)

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
          htmlType="button"
          type="primary"
          size="medium"
          onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  bunIngridients: burgerIngredientArrayType.isRequired,
  sauceIngridients: burgerIngredientArrayType.isRequired,
  mainIngridients: burgerIngredientArrayType.isRequired,
  handleOpenModal: func.isRequired
}

