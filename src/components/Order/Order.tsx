import { memo, useMemo } from 'react';
import uuid from 'react-uuid';
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";
import { IngredientType, OrderType } from "../../utils/types";
import { useSelector } from '../../hooks/hooks';
import { getInitialIngridientsItems } from '../../services/selectors/initialIngridients';
import { useMatch } from 'react-router';
import { FEED } from '../../constants/constants';
// import { burgerPrice } from '../../utils/helper';

function Order({ status, name, number, ingredients, updatedAt }: OrderType) {
  const isFeed = !!useMatch({ path: FEED });

  const orderIngredients: Array<IngredientType> = createOrderIngredients(ingredients, useSelector(getInitialIngridientsItems))

  function createOrderIngredients(orderIngr: Array<string>, initIngr: Array<IngredientType>) {
   return orderIngr.reduce((acc: Array<IngredientType>, item) => {
     const orderIngredient = initIngr.find(ingredient => ingredient._id === item);
     orderIngredient && acc.push(orderIngredient)
  
     return acc;
   }, [])
  };

//  orderIngredients.pop();

  const orderPrice = useMemo(() => {
    return orderIngredients.reduce((price, ingr) => {
      return price + ingr.price
    }, 0)
  }, [orderIngredients]);

// console.log(orderIngredients)

  return(
    <article className={ styles.order }>
      <div className={ styles.orderContainer }>
        <div className={`${ styles.orderDetails } pb-6`}>
          <h2 className={`${ styles.number } text text_type_digits-default`}>{`#${number}`}</h2>
            <FormattedDate className={ styles.date } date={new Date(updatedAt)}/>
        </div>
        <p className={`${ styles.name } text text_type_main-small pb-6`}>{name}</p>
        {!isFeed && <span className={`${ styles.status } text text_type_main-small`}>{status}</span>}
        <div className={ styles.container }>
          <ul className={ styles.picContainer }>
            {orderIngredients && orderIngredients.map(item =>
              <li key={uuid()} className={ styles.picBorder } >
                <img className={ styles.pic }
                  src={item.image}
                  alt="Картинка. Вид ингридиента">
                </img>
              </li>)}
          </ul>
          <span className={`${ styles.burgerElementPrice } text text_type_digits-default`}>
            {orderPrice}<CurrencyIcon type="primary"/>
          </span>
        </div>
        </div>
    </article>
  )
};

export default memo(Order);