import styles from "../components/Feed/feed.module.css";
import { useDispatch } from "../hooks/hooks";
import { useEffect } from "react";
import { WS_CONNECT, WS_DISCONNECT } from "../services/actions/wsActions";
import { FEED_API_WS } from "../constants/constants";

export default function Feed() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: WS_CONNECT, payload: FEED_API_WS });

    return () => {
      dispatch({ type: WS_DISCONNECT });
    }
  }, [dispatch])

  return(
    <section className={styles.feed}>
      <h2 className={styles.header}>Лента заказов</h2>
      <ul className={styles.feedListContainer}>
        
      </ul>

    </section>
  )
}