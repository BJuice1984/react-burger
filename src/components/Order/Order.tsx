import { memo } from 'react';
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";
import { IngredientType, OrderType } from "../../utils/types";
import { useSelector } from '../../hooks/hooks';
import { getInitialIngridientsItems } from '../../services/selectors/initialIngridients';
// import { burgerPrice } from '../../utils/helper';

function Order({ status, name, number, ingredients, updatedAt }: OrderType) {
 const orderIngredients: Array<IngredientType> = createOrderInfredients(ingredients, useSelector(getInitialIngridientsItems))

 function createOrderInfredients(orderIngr: Array<string>, initIngr: Array<IngredientType>) {
  return orderIngr.reduce((acc: Array<IngredientType>, item) => {
    const orderIngredient = initIngr.find(ingredient => ingredient._id === item);
    orderIngredient && acc.push(orderIngredient)
  
    return acc
  }, [])
 };

 console.log(orderIngredients)

  return(
    <article className={styles.order}>
      <div className={styles.order_details}>
        <h2 className={`${styles.number} text text_type_main-small`}>{`#${number}`}</h2>
          <FormattedDate date={new Date(updatedAt)}/>
      </div>
      <p className={`${styles.name} text text_type_main-medium`}>{name}</p>
      <span className={`${styles.status} text text_type_main-small`}>{status}</span>
      <div className={styles.container}>
        <ul>
          <li>{ingredients}</li>
        </ul>
        <span className={`${ styles.burgerElementPrice } text text_type_digits-medium pr-10`}>
          400<CurrencyIcon type="primary"/>
        </span>
      </div>
    </article>
  )
};

export default memo(Order);