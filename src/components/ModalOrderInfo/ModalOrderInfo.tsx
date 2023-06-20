import { memo } from 'react';
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modalOrderInfo.module.css";
import { IngredientType } from "../../utils/types";
import { useSelector } from '../../hooks/hooks';
import { getInitialIngridientsItems } from '../../services/selectors/initialIngridients';
import { useLocation, useMatch } from 'react-router';
import { FEED } from '../../constants/constants';

function ModalOrderInfo() {
  const isFeed = !!useMatch({ path: FEED });
  const location = useLocation();

  let queryDict = {};
  location.search.substring(1).split('&').forEach((item) => {
    let param = item.split('=')
    queryDict[param[0]] = param[1]
  })

  const ingr = JSON.parse(decodeURI(queryDict.ingr))
  const paramName = decodeURI(queryDict.name)

  // const { background } = location.state;

  const orderIngredients: Array<IngredientType> = createOrderIngredients(ingr.ingredients, useSelector(getInitialIngridientsItems));

  const orderIngredientsLength = 
    orderIngredients.length > 6 ? orderIngredients.length - 6 : null;

  function createOrderIngredients(orderIngr: Array<string>, initIngr: Array<IngredientType>) {
   return orderIngr.reduce((acc: Array<IngredientType>, item) => {
     const orderIngredient = initIngr.find(ingredient => ingredient._id === item);
     orderIngredient && acc.push(orderIngredient)
  
     return acc;
   }, [])
  };

  return(
    <article className={ styles.order }>
      <div className={ styles.orderContainer }>
        <div className={`${ styles.orderDetails } pb-6`}>
          <h2 className={`${ styles.number } text text_type_digits-default`}>{`#${queryDict.number}`}</h2>
            <FormattedDate className={ styles.date } date={new Date(queryDict.updatedAt)}/>
        </div>
        <p className={`${ styles.name } ${isFeed ? 'pb-2' :' pb-6'} text text_type_main-small`}>{paramName}</p>
        {isFeed && 
          <span className={`${ styles.status } ${queryDict.status === 'done' ? styles.statusDone : ''} text text_type_main-small`}>
            {queryDict.status === 'done' ? 'Выполнен' : 'Готовится'}
          </span>}
        <div className={ styles.container }>
          <ul className={ styles.picContainer }>
            {orderIngredients && orderIngredients.splice(0, 6).map((item, index: number) =>
              <li key={index} className={ styles.picBorder }>
                <img className={`${ styles.pic } ${orderIngredientsLength && index === 0 ? styles.picLast : ''}`}
                  src={item.image}
                  alt="Картинка. Вид ингридиента">
                </img>
              </li>)}
            {(orderIngredientsLength) && <span className={ styles.picLength }>{`+${orderIngredientsLength}`}</span>}
          </ul>
          <span className={`${ styles.burgerElementPrice } text text_type_digits-default`}>
            {queryDict.orderPrice}<CurrencyIcon type="primary"/>
          </span>
        </div>
      </div>
    </article>
  )
};

export default memo(ModalOrderInfo);