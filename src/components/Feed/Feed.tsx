import { FC, Fragment } from 'react';
import { OrderType } from "../../utils/types";
import Order from "../Order/Order";
import styles from "../../components/Feed/feed.module.css";

type FeedType = {
  orders: Array<OrderType>
};

const Feed: FC<FeedType> = ({ orders }: FeedType) => {

  return(
    <Fragment>
      {orders && <div className={styles.feed}>
        <h2 className={styles.header}>Лента заказов</h2>
        <ul className={styles.feedList}>
          {orders.map(feed => 
            <Order
              status={feed.status}
              name={feed.name}
              key={feed._id}
              number={feed.number}
              ingredients={feed.ingredients}
              updatedAt={feed.updatedAt}
              _id={feed._id} />)}
        </ul>
      </div>}
    </Fragment>
  )
};

export default Feed;