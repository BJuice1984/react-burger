import styles from '../components/Main/main.module.css';
import Feed from '../components/Feed/Feed';
import { useDispatch, useSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { WS_CONNECT, WS_DISCONNECT } from "../services/actions/wsActions";
import { FEED_API_WS } from "../constants/constants";
import { wsFeeds } from '../services/selectors/orderHistory';

export default function Feeds() {
  const dispatch = useDispatch();
  const orderDetails = useSelector(wsFeeds);

  useEffect(() => {
    dispatch({ type: WS_CONNECT, payload: FEED_API_WS });
    return () => {
      dispatch({ type: WS_DISCONNECT });
    }
  }, [dispatch]);

  return (
    <main className={ styles.main }>
        <div className={ styles.container }>
          <Feed feedItems={orderDetails.orders} />
        </div>
    </main>
  )
}