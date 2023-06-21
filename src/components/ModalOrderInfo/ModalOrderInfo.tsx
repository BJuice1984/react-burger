import { memo } from 'react';
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modalOrderInfo.module.css";
import { IngredientType } from "../../utils/types";
import { useSelector } from '../../hooks/hooks';
import { getInitialIngridientsItems } from '../../services/selectors/initialIngridients';
import { useLocation } from 'react-router';

type QueryDictType = {
  [key: string]: string
};

function ModalOrderInfo() {
  const location = useLocation();

  let queryDict: QueryDictType = {};
  location.search.substring(1).split('&').forEach((item) => {
    let param = item.split('=')
    queryDict[param[0]] = param[1]
  });

  const ingr = JSON.parse(decodeURI(queryDict.ingr));
  const paramName = decodeURI(queryDict.name);

  // const { background } = location.state;

  const orderIngredients: Array<IngredientType> = createOrderIngredients(ingr.ingredients, useSelector(getInitialIngridientsItems));

  function createOrderIngredients(orderIngr: Array<string>, initIngr: Array<IngredientType>) {
   return orderIngr.reduce((acc: Array<IngredientType>, item) => {
     const orderIngredient = initIngr.find(ingredient => ingredient._id === item);
     orderIngredient && acc.push(orderIngredient)
  
     return acc;
   }, [])
  };

  return(
    <article className={ styles.modalOrder }>
      <div className={ styles.modalOrderContainer }>
        <h2 className={`${ styles.number } text text_type_digits-default`}>{`#${queryDict.number}`}</h2>
        <p className={`${ styles.name } text_type_main-medium pb-3 pt-10`}>{paramName}</p>
        <span className={`${ styles.status } ${queryDict.status === 'done' ? styles.statusDone : ''} text text_type_main-small mb-15`}>
          {queryDict.status === 'done' ? 'Выполнен' : 'Готовится'}
        </span>
        <p className={`${ styles.name } text_type_main-medium pb-6`}>Состав:</p>
        <ul className={ styles.ingredientsContainer }>
          {orderIngredients && orderIngredients.map((item, index: number) =>
            <li key={index} className={ styles.orderDetails }>
              <div className={ styles.picBorder }>
                <img className={`${ styles.pic }`}
                  src={item.image}
                  alt="Картинка. Вид ингридиента">
                </img>
              </div>
              <p className={`${ styles.ingrName } text text_type_main-small`}>{item.name}</p>
              <span className={`${ styles.burgerElementPrice } text text_type_digits-default`}>
                {item.price}<CurrencyIcon type="primary"/>
              </span>
            </li>)}
        </ul>
        <div className={`${ styles.modalFuterContainer }`}>
          <FormattedDate className={`${ styles.date } text text_type_main-small`} date={new Date(queryDict.updatedAt)}/>
          <span className={`${ styles.burgerElementPrice } text text_type_digits-default`}>
            {queryDict.orderPrice}<CurrencyIcon type="primary"/>
          </span>
          
        </div>

        <div className={ styles.container }>
        </div>
      </div>
    </article>
  )
};

export default memo(ModalOrderInfo);