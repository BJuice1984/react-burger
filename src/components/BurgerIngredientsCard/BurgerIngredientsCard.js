import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalCard from '../ModalCard/ModalCard';
import styles from './burgerIngredientsCard.module.css';
import { func } from 'prop-types';
import { burgerIngredientType } from '../../utils/prop-types';

export default function BurgerIngredientsCard({ ingridient, handleOpenModal }) {

  const openModal = () => {
    handleOpenModal(<ModalCard ingridient={ingridient}/>)
  }

  return(
    <article className={ styles.element }>
      <Counter count={1} size="default" extraClass="m-1" />
      <img className={ styles.pic }
        onClick={openModal}
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
  ingridient: burgerIngredientType.isRequired,
  handleOpenModal: func.isRequired
}