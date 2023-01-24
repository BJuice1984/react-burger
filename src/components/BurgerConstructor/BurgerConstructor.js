import { useState, Fragment } from "react";
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerConstructor.module.css';
import ModalOrder from "../ModalOrder/ModalOrder";
import { func } from 'prop-types';
import { burgerIngredientArrayType } from "../../utils/prop-types";

export default function BurgerConstructor({ bunIngridients, sauceIngridients, mainIngridients, handleOpenModal }) {
  const [isOrderPrice, SetIsOrderPrice] = useState('610');

  const openModal = () => {
    handleOpenModal(<ModalOrder price={isOrderPrice} />)
    SetIsOrderPrice(isOrderPrice)
  }

  return(
    <section className={`${ styles.burgerConstructor } pt-25`}>
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
          <div>
            <DragIcon type="primary"/>
              <ConstructorElement
              text={`${sauceIngridients[0].name}`}
              price={50}
              thumbnail={sauceIngridients[0].image} />
          </div>
          <div>
            <DragIcon type="primary"/>
              <ConstructorElement
              text={`${sauceIngridients[0].name}`}
              price={50}
              thumbnail={sauceIngridients[0].image} />
          </div>
          <div>
            <DragIcon type="primary"/>
              <ConstructorElement
              text={`${sauceIngridients[0].name}`}
              price={50}
              thumbnail={sauceIngridients[0].image} />
          </div>
          <div>
            <DragIcon type="primary"/>
              <ConstructorElement
              text={`${sauceIngridients[0].name}`}
              price={50}
              thumbnail={sauceIngridients[0].image} />
          </div>
          <div>
            <DragIcon type="primary"/>
              <ConstructorElement
              text={`${sauceIngridients[0].name}`}
              price={50}
              thumbnail={sauceIngridients[0].image} />
          </div>
          <div>
            <DragIcon type="primary"/>
              <ConstructorElement
              text={`${sauceIngridients[0].name}`}
              price={50}
              thumbnail={sauceIngridients[0].image} />
          </div>
          <div>
            <DragIcon type="primary"/>
              <ConstructorElement
              text={`${sauceIngridients[0].name}`}
              price={50}
              thumbnail={sauceIngridients[0].image} />
          </div>
          <div>
            <DragIcon type="primary"/>
              <ConstructorElement
              text={`${sauceIngridients[0].name}`}
              price={50}
              thumbnail={sauceIngridients[0].image} />
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