import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import Order from "../Order/Order";
import styles from "./orders.module.css";
import useCockies from "../../hooks/useCookies";
import { Outlet, useMatch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { WS_CONNECT, WS_DISCONNECT } from "../../services/actions/wsActions";
import { HISTORY_FEED_API_WS, ORDERS, PROFILE } from "../../constants/constants";
import { OrderHistoryType } from "../../utils/types";
import { wsFeeds } from "../../services/selectors/orderHistory";

export default function Orders() {
  const isOrders: boolean = !!useMatch({ path: `${PROFILE}/${ORDERS}`})
  const { getCookie} = useCockies();
  const dispatch = useDispatch();

  const orderDetails: OrderHistoryType = useSelector(wsFeeds);
  const { orders } = orderDetails;

  let token = getCookie('token');

  useEffect(() => {
    if (token && isOrders) {
      dispatch({ type: WS_CONNECT, payload: `${HISTORY_FEED_API_WS}?token=${token}` });
    } else {
      dispatch({ type: WS_DISCONNECT });
    }
    return () => {
      dispatch({ type: WS_DISCONNECT });
    }
  }, [dispatch, isOrders, token]);

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
              updatedAt={feed.updatedAt} />)}
        </ul>
        <p className={`${styles.description} text text_type_main-small pt-4`}>В этом разделе вы можете просмотреть свою историю заказов</p>
      </div>
      <Outlet />
    </section>
  )
}