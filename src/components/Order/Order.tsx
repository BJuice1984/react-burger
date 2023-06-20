import { memo, useMemo } from 'react';
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";
import { IngredientType, OrderType } from "../../utils/types";
import { useSelector } from '../../hooks/hooks';
import { getInitialIngridientsItems } from '../../services/selectors/initialIngridients';
import { useLocation, useMatch } from 'react-router';
import { FEED } from '../../constants/constants';
import { Link, useSearchParams } from 'react-router-dom';

function Order({ status, name, number, ingredients, updatedAt, _id }: OrderType) {
  const isFeed = !!useMatch({ path: FEED });
  const location = useLocation();

  const orderIngredients: Array<IngredientType> = createOrderIngredients(ingredients, useSelector(getInitialIngridientsItems));

  const orderIngredientsLength = 
    orderIngredients.length > 6 ? orderIngredients.length - 6 : null;

  function createOrderIngredients(orderIngr: Array<string>, initIngr: Array<IngredientType>) {
   return orderIngr.reduce((acc: Array<IngredientType>, item) => {
     const orderIngredient = initIngr.find(ingredient => ingredient._id === item);
     orderIngredient && acc.push(orderIngredient)
  
     return acc;
   }, [])
  };

  const orderPrice = useMemo(() => {
    return orderIngredients.reduce((price, ingr) => {
      return price + ingr.price
    }, 0)
  }, [orderIngredients]);

  const ingr = JSON.stringify({ ingredients: ingredients })

  return(
    <Link to={`${FEED}/${_id}?status=${status}&name=${name}&number=${number}&ingr=${ingr}&updatedAt=${updatedAt}&_id=${_id}&orderPrice=${orderPrice}`} state={{ background: location }} className={ styles.orderLink }>
      <article className={ styles.order }>
        <div className={ styles.orderContainer }>
          <div className={`${ styles.orderDetails } pb-6`}>
            <h2 className={`${ styles.number } text text_type_digits-default`}>{`#${number}`}</h2>
              <FormattedDate className={ styles.date } date={new Date(updatedAt)}/>
          </div>
          <p className={`${ styles.name } ${isFeed ? 'pb-2' :' pb-6'} text text_type_main-small`}>{name}</p>
          {isFeed && 
            <span className={`${ styles.status } ${status === 'done' ? styles.statusDone : ''} text text_type_main-small`}>
              {status === 'done' ? 'Выполнен' : 'Готовится'}
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
              {orderPrice}<CurrencyIcon type="primary"/>
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
};

export default memo(Order);