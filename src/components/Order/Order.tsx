import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";

export default function Order({ name, number, ingredients, updatedAt }) {

  return(
    <section className={styles.order}>
      <div className={styles.order_details}>
        <h2 className={`${styles.number} text text_type_main-small`}>{`#${number}`}</h2>
          <FormattedDate date={new Date(updatedAt)}/>
      </div>
      <p className={`${styles.name} text text_type_main-medium`}>{name}</p>
      <span className={`${styles.status} text text_type_main-small`}>Создан</span>
      <div className={styles.container}>
        <ul>
          <li>{ingredients}</li>
        </ul>
        <span className={`${ styles.burgerElementPrice } text text_type_digits-medium pr-10`}>
          400<CurrencyIcon type="primary"/>
        </span>
      </div>
    </section>
  )
}