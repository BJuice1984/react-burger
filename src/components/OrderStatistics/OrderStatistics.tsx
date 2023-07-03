import { FC, Fragment } from 'react';
import styles from './orderStatistics.module.css'
import { OrderType, OrdersGroupedType } from '../../utils/types';

type OrderStatisticsType = {
  total: number | null,
  totalToday: number | null,
  orders: Array<OrderType>
};

const OrderStatistics: FC<OrderStatisticsType> = ({ orders, total, totalToday }) => {

  const groupedOrders: OrdersGroupedType = groupBy(orders, "status")

  function groupBy(objectArray: Array<OrderType>, property: "status") {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      const curGroup = acc[key as keyof typeof acc] ?? [];
  
      return { ...acc, [key]: [...curGroup, obj] };
    }, {});
  };

  return (
    <Fragment>
      <div className={styles.orderStatistics}>
        <div className={styles.doneFeeds}>
          <p className={`${styles.header} text text_type_main-medium pb-6 pl-2`}>Готовы:</p>
          <ul className={styles.feedsContainer}>
            {groupedOrders.done && groupedOrders.done.map(feed =>
              <li key={feed._id} className={`${styles.orderNumber} ${styles.orderNumberTypeDone} text text_type_digits-default pb-2`}>
                {feed.number}
              </li>)}
          </ul>
        </div>
        <div className={styles.pendingFeeds}>
          <p className={`${styles.header} text text_type_main-medium pb-6`}>В&nbsp;работе:</p>
          <ul className={styles.feedsContainer}>
            {groupedOrders.pending && groupedOrders.pending.map(feed =>
              <li key={feed._id} className={`${styles.orderNumber} text text_type_digits-default pb-2`}>
                {feed.number}
              </li>)}
          </ul>
        </div>
        <p className={`${styles.ordersTotal} text text_type_main-medium`}>Выполнено за все время:
          {total && <span className={`${styles.ordersSum} text text_type_digits-large`}>{total}</span>}
        </p>
        <p className={`${styles.ordersTotal} ${styles.ordersToday} text text_type_main-medium`}>Выполнено за сегодня:
          {totalToday && <span className={`${styles.ordersSum} text text_type_digits-large`}>{totalToday}</span>}
        </p>
      </div>
    </Fragment>

  )
};

export default OrderStatistics;