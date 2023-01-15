import styles from './burgerIngredientsCard.module.css';
// import PropTypes from 'prop-types';

export default function BurgerIngredientsCard({ ingridient }) {
  return(
    <article className={ styles.element }>
      <img className={ styles.pic }
        src={ingridient.image}
        alt="Картинка. Вид ингридиента">
      </img>

    </article>
  )
}