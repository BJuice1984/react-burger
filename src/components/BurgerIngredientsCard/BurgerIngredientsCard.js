import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerIngredientsCard.module.css';
import PropTypes from 'prop-types';

export default function BurgerIngredientsCard({ ingridient }) {
  return(
    <article className={ styles.element }>
      <Counter count={1} size="default" extraClass="m-1" />
      <img className={ styles.pic }
        src={ingridient.image}
        alt="Картинка. Вид ингридиента">
      </img>
      <p className={`${ styles.price } pt-1 pb-1 text text_type_digits-default`}>
        {ingridient.price}<CurrencyIcon type="primary"/>
      </p>
      <span className={`${ styles.name } text text_type_main-default`}>
        {ingridient.name}
      </span>
    </article>
  )
}

BurgerIngredientsCard.propTypes = {
  ingridient: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number
  }),
}