import Order from "../Order/Order";
import styles from "../components/Feed/feed.module.css";

export default function Feed({ feedItems }) {

  return(
    <section className={styles.feed}>
      <h2 className={styles.header}>Лента заказов</h2>
      <ul className={styles.feedList}>
        {feedItems.map(feed => 
          <Order
            name={feed.name}
            key={feed._id}
            number={feed.number}
            ingredients={feed.ingredients}
            updatedAt={feed.updatedAt} />)}
      </ul>
    </section>
  )
}