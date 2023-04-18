import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import Order from "../Order/Order";
import styles from "./orders.module.css";

export default function Orders() {

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
    </section>
  )
}