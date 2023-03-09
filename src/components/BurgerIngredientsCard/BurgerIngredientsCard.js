import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
// import ModalCard from '../ModalCard/ModalCard';
import styles from './burgerIngredientsCard.module.css';
import { burgerIngredientType } from '../../utils/prop-types';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { SHOW_ITEM_DETAILS } from '../../services/actions/modalDetails';

export default function BurgerIngredientsCard({ ingridient, count }) {

  const dispatch = useDispatch();

  const [{isDrag}, dragRef] = useDrag({
    type: "ingridient",
    item: ingridient,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  })

  const openModal = () => {
    dispatch({
    type: SHOW_ITEM_DETAILS,
    item: ingridient
    })
  }

  return(
    !isDrag && <article ref={dragRef} className={ styles.element }>
      {count && <Counter count={count} size="default" extraClass="m-1" />}
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
}