import { useState, Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerConstructor.module.css';
import BurgerConstructorCard from "../BurgerConstructorCard/BurgerConstructorCard";
import ModalOrder from "../ModalOrder/ModalOrder";
import { func } from 'prop-types';
import { burgerIngredientArrayType } from "../../utils/prop-types";
import { useDrop } from "react-dnd/dist/hooks";
import { ADD_USER_ITEM } from "../../services/actions/initialIngridients";

export default function BurgerConstructor({ bunIngridients, sauceIngridients, mainIngridients, handleOpenModal }) {
  const dispatch = useDispatch();
  
  const userIngridients = useSelector(state => state.initialIngridients.userItems)

  console.log(userIngridients)

  const [{isHover}, dropTarget] = useDrop({
    accept: "ingridient",
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(itemId) {
      dispatch({
        type: ADD_USER_ITEM,
        ...itemId
      })
    }
  })
  const [isOrderPrice, setIsOrderPrice] = useState('610');

  const openModal = () => {
    handleOpenModal(<ModalOrder price={isOrderPrice} />)
    setIsOrderPrice(isOrderPrice)
  }

  const hover = isHover ? 'onHover' : '';

  return(
    <section className={`${ styles.burgerConstructor } ${hover} pt-25`} ref={dropTarget}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className={ styles.burgerConstructorContainer }>
        {bunIngridients.length && sauceIngridients.length && mainIngridients.length && 
        <Fragment>
          <ConstructorElement
          extraClass="ml-8"
          type="top"
          isLocked={true}
          text={`${bunIngridients[0].name}(верх)`}
          price={200}
          thumbnail={bunIngridients[0].image} />
          
          {userIngridients.length && <ul className={`${ styles.ingridientsListsssssssssssssssss } pt-6 pb-10`}>
            {userIngridients.map(ingridient => 
              <BurgerConstructorCard
                ingridient={ingridient}
                key={ingridient._id} />)}
          </ul>}


          <div>
            <DragIcon type="primary"/>
              <ConstructorElement
              text={`${mainIngridients[0].name}`}
              price={50}
              thumbnail={mainIngridients[0].image} />
          </div>
          <div>
            <DragIcon type="primary"/>
              <ConstructorElement
              text={`${sauceIngridients[0].name}`}
              price={50}
              thumbnail={sauceIngridients[0].image} />
          </div>
          
          
          <ConstructorElement
          extraClass="ml-8"
          type="bottom"
          isLocked={true}
          text={`${bunIngridients[0].name}(низ)`}
          price={200}
          thumbnail={bunIngridients[0].image}/>
        </Fragment>}
        
      </div>
      <div className={`${ styles.burgerContainer } pt-10`}>
        <span className={`${ styles.burgerElementPrice } text text_type_digits-medium pr-10`}>
          {isOrderPrice}<CurrencyIcon type="primary"/>
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

