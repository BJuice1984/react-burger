import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerConstructor.module.css';

export default function BurgerConstructor({ bunIngridients, sauceIngridients, mainIngridients }) {

  return(
    <section className={`${ styles.burgerConstructor } pt-25`}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className={ styles.burgerConstructorContainer }>
        {bunIngridients.length !== 0 && <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bunIngridients[0].name}(верх)`}
          price={200}
          thumbnail={bunIngridients[0].image}
        />}
        {mainIngridients.length && <ConstructorElement
          text={`${mainIngridients[0].name}`}
          price={50}
          thumbnail={mainIngridients[0].image}
        />}
        {sauceIngridients.length && <ConstructorElement
          text={`${sauceIngridients[0].name}`}
          price={50}
          thumbnail={sauceIngridients[0].image}
        />}
        {sauceIngridients.length && <ConstructorElement
          text={`${sauceIngridients[0].name}`}
          price={50}
          thumbnail={sauceIngridients[0].image}
        />}
        {sauceIngridients.length && <ConstructorElement
          text={`${sauceIngridients[0].name}`}
          price={50}
          thumbnail={sauceIngridients[0].image}
        />}
        {sauceIngridients.length && <ConstructorElement
          text={`${sauceIngridients[0].name}`}
          price={50}
          thumbnail={sauceIngridients[0].image}
        />}
        {sauceIngridients.length && <ConstructorElement
          text={`${sauceIngridients[0].name}`}
          price={50}
          thumbnail={sauceIngridients[0].image}
        />}
        {sauceIngridients.length && <ConstructorElement
          text={`${sauceIngridients[0].name}`}
          price={50}
          thumbnail={sauceIngridients[0].image}
        />}
        {sauceIngridients.length && <ConstructorElement
          text={`${sauceIngridients[0].name}`}
          price={50}
          thumbnail={sauceIngridients[0].image}
        />}
        {sauceIngridients.length && <ConstructorElement
          text={`${sauceIngridients[0].name}`}
          price={50}
          thumbnail={sauceIngridients[0].image}
        />}
        {sauceIngridients.length && <ConstructorElement
          text={`${sauceIngridients[0].name}`}
          price={50}
          thumbnail={sauceIngridients[0].image}
        />}
        {sauceIngridients.length && <ConstructorElement
          text={`${sauceIngridients[0].name}`}
          price={50}
          thumbnail={sauceIngridients[0].image}
        />}
        {bunIngridients.length && <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bunIngridients[0].name}(низ)`}
          price={200}
          thumbnail={bunIngridients[0].image}
        />}
      </div>
      <div className={`${ styles.burgerContainer } pt-10`}>
        <span className={`${ styles.burgerElementPrice } text text_type_digits-medium pr-10`}>
          610<CurrencyIcon  type="primary"/>
        </span>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}