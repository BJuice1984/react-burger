import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";

export default function Order() {

  const today = new Date()

  return(
    <section className={styles.order}>
      <div className={styles.order_details}>
        <h2 className={`${styles.number} text text_type_main-small`}>#111111</h2>
        <FormattedDate date={
        new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
          today.getHours(),
          today.getMinutes() - 1,
          0,
        )
        }/>
      </div>
      <p className={`${styles.name} text text_type_main-medium`}>Death Star Starship Main бургер</p>
      <span className={`${styles.status} text text_type_main-small`}>Создан</span>
      <div className={styles.container}>
        <ul>
          <li></li>
        </ul>
        <span className={`${ styles.burgerElementPrice } text text_type_digits-medium pr-10`}>
          400<CurrencyIcon type="primary"/>
        </span>
      </div>
    </section>
  )
}