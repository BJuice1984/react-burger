import styles from '../components/Feeds/feeds.module.css';
import Feed from '../components/Feed/Feed';
import { useDispatch, useSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { WS_CONNECT, WS_DISCONNECT } from "../services/actions/wsActions";
import { FEED, FEED_API_WS } from "../constants/constants";
import { useMatch } from 'react-router';
import { OrderHistoryType } from '../utils/types';
import { wsFeeds } from '../services/selectors/orderHistory';
import OrderStatistics from '../components/OrderStatistics/OrderStatistics';

export default function Feeds() {
  const isFeed = !!useMatch({ path: FEED });
  const dispatch = useDispatch();

  const orderDetails: OrderHistoryType = useSelector(wsFeeds);
  const { orders, total, totalToday } = orderDetails;

  useEffect(() => {
    if (isFeed) {
      dispatch({ type: WS_CONNECT, payload: FEED_API_WS });
    } else {
      dispatch({ type: WS_DISCONNECT });
    }
    return () => {
      dispatch({ type: WS_DISCONNECT });
    }
  }, [dispatch, isFeed]);

  return (
    <section className={ styles.feed }>
        <div className={ styles.container }>
          <Feed orders={orders}/>
          <OrderStatistics total={total} totalToday={totalToday} />
        </div>
    </section>
  )
}