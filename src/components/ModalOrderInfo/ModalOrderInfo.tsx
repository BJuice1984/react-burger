import { memo, useEffect, useState, useMemo } from 'react';
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modalOrderInfo.module.css";
import { IngredientType, OrderType } from "../../utils/types";
import { useSelector } from '../../hooks/hooks';
import { getInitialIngridientsItems } from '../../services/selectors/initialIngridients';
import { useParams } from 'react-router';
import { getOrder } from '../../utils/mainApi';

function ModalOrderInfo() {
  const { number } = useParams();
  const [order, setOrder] = useState<OrderType | null>(null);
  const [orderIngredients, setOrderIngredients] = useState<Array<IngredientType> | null>(null);
  const initialIngridients = useSelector(getInitialIngridientsItems)

  useEffect(() => {
    if (number) {
      const fetchData = async () => {
        const data = await getOrder(number);
        setOrderIngredients(createOrderIngredients(data.orders[0].ingredients, initialIngridients));
        setOrder(data.orders[0])
     }
   
     fetchData().catch(console.error);
    }
  }, [initialIngridients, number]);

  function createOrderIngredients(orderIngr: Array<string>, initIngr: Array<IngredientType>) {
   return orderIngr.reduce((acc: Array<IngredientType>, item) => {
     const orderIngredient = initIngr.find(ingredient => ingredient._id === item);
     orderIngredient && acc.push(orderIngredient)
  
     return acc;
   }, [])
  };

  const orderPrice = useMemo(() => {
    if (!orderIngredients) {
      return
    } else {
      return orderIngredients.reduce((price, ingr) => {
        return price + ingr.price
      }, 0)
    }
  }, [orderIngredients]);

  return(
    <article className={ styles.modalOrder }>
      {order && <div className={ styles.modalOrderContainer }>
        <h2 className={`${ styles.number } text text_type_digits-default`}>{`#${order.number}`}</h2>
        <p className={`${ styles.name } text_type_main-medium pb-3 pt-10`}>{order.name}</p>
        <span className={`${ styles.status } ${order.status === 'done' ? styles.statusDone : ''} text text_type_main-small mb-15`}>
          {order.status === 'done' ? 'Выполнен' : 'Готовится'}
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
          <FormattedDate className={`${ styles.date } text text_type_main-small`} date={new Date(order.updatedAt)}/>
          {orderPrice && <span className={`${ styles.burgerElementPrice } text text_type_digits-default`}>
            {orderPrice}<CurrencyIcon type="primary"/>
          </span>}
        </div>
      </div>}
    </article>
  )
};

export default memo(ModalOrderInfo);