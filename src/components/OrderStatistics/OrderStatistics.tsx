import { FC, Fragment } from 'react';
import styles from './orderStatistics.module.css'

type OrderStatisticsType = {
  total: number,
  totalToday: number,
};

const OrderStatistics: FC<OrderStatisticsType> = ({ total, totalToday }) => {

  return (
    <Fragment>
      <div className={styles.orderStatistics}>
        <div className={styles.doneFeeds}>
          <p className={styles.header}>Готовы:</p>
          <ul className={styles.feedsContainer}>

          </ul>
        </div>
        <div className={styles.pendingFeeds}>
          <p className={styles.header}>В работе:</p>
          <ul className={styles.feedsContainer}>

          </ul>
        </div>
        <p className={styles.ordersTotal}>Выполнено за все время:
          <span className={styles.ordersSum}>{total}</span>
        </p>
        <p className={styles.ordersTotal}>Выполнено за сегодня:
          <span className={styles.ordersSum}>{totalToday}</span>
        </p>

      </div>

    </Fragment>

  )
};

export default OrderStatistics;