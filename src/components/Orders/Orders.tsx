import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import Order from "../Order/Order";
import styles from "./orders.module.css";
import useCockies from "../../hooks/useCookies";
import { Outlet } from "react-router-dom";
import { useEffect } from "react"
import { useDispatch } from "../../hooks/hooks";
import { WS_CONNECT, WS_DISCONNECT } from "../../services/actions/wsActions";
import { HISTORY_FEED_API_WS } from "../../constants/constants";

export default function Orders() {
  const { getCookie} = useCockies();
  const dispatch = useDispatch();

  useEffect(() => {
    let token = getCookie('token');

    if (token) {
      dispatch({ type: WS_CONNECT, payload: `${HISTORY_FEED_API_WS}?token=${token}` });
    }

    return () => {
      dispatch({ type: WS_DISCONNECT });
    }
  });

  return(
    <section className={styles.orders}>
      <div className={styles.orders_container}>
        <ProfileNavigation />
        <div className={ styles.container }>
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />

        </div>
        <p className={`${styles.description} text text_type_main-small pt-4`}>В этом разделе вы можете просмотреть свою историю заказов</p>
      </div>
      <Outlet />
    </section>
  )
}