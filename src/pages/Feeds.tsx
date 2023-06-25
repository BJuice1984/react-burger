import styles from '../components/Feeds/feeds.module.css';
import Feed from '../components/Feed/Feed';
import { useDispatch, useSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { WS_CONNECT, WS_DISCONNECT } from "../services/actions/wsActions";
import { FEED_API_WS } from "../constants/constants";
import { OrderHistoryType } from '../utils/types';
import { wsFeeds } from '../services/selectors/orderHistory';
import OrderStatistics from '../components/OrderStatistics/OrderStatistics';

export default function Feeds() {
  const dispatch = useDispatch();

  const orderDetails: OrderHistoryType = useSelector(wsFeeds);
  const { orders, total, totalToday } = orderDetails;

  useEffect(() => {
      dispatch({ type: WS_CONNECT, payload: FEED_API_WS });

    return () => {
      dispatch({ type: WS_DISCONNECT });
    }
  }, [dispatch]);

  return (
    <section className={ styles.feeds }>
        <div className={ styles.container }>
          <Feed orders={orders}/>
          <OrderStatistics orders={orders} total={total} totalToday={totalToday} />
        </div>
    </section>
  )
}