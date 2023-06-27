import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import Order from "../Order/Order";
import styles from "./orders.module.css";
import { getCookie } from "../../utils/helper";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { WS_CONNECT, WS_DISCONNECT } from "../../services/actions/wsActions";
import { HISTORY_FEED_API_WS } from "../../constants/constants";
import { OrderHistoryType } from "../../utils/types";
import { wsFeeds } from "../../services/selectors/orderHistory";

export default function Orders() {
  const dispatch = useDispatch();
  const orderDetails: OrderHistoryType = useSelector(wsFeeds);
  const { orders } = orderDetails;

  useEffect(() => {
    let token = getCookie('token');
    
    if (token) {
      dispatch({ type: WS_CONNECT, payload: `${HISTORY_FEED_API_WS}?token=${token}` });
    }
    return () => {
      dispatch({ type: WS_DISCONNECT });
    }
  }, [dispatch]);

  return(
    <section className={styles.orders}>
      <div className={styles.ordersContainer}>
        <ProfileNavigation />
        <ul className={ styles.ordersList }>
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
        <p className={`${styles.description} text text_type_main-small pt-4`}>В этом разделе вы можете просмотреть свою историю заказов</p>
      </div>
      <Outlet />
    </section>
  )
}