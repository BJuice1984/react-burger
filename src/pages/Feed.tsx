import styles from "../components/Feed/feed.module.css";

export default function Feed() {

  return(
    <section className={styles.feed}>
      <h2 className={styles.header}>Лента заказов</h2>
      <ul className={styles.feedListContainer}>
        
      </ul>

    </section>
  )
}