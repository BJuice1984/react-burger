import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
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
  });

  const hover = isDrag ? styles.onHover : '';

  const openModal = () => {
    dispatch({
    type: SHOW_ITEM_DETAILS,
    item: ingridient
    })
  }

  return(
    <article ref={dragRef} className={ `${ styles.element } ${hover}` }>
      {count && <Counter count={count} size="default" extraClass="m-1" />}
      <img className={ styles.pic }
        onClick={openModal}
        src={ingridient.image}
        alt="Картинка. Вид ингридиента">
      </img>
      <p className={`${ styles.price } pt-1 pb-1 text text_type_digits-default`}>
        {ingridient.price}<CurrencyIcon type="primary"/>
      </p>
      <span className={`${ styles.name } text`}>
        {ingridient.name}
      </span>
      <button className={`${ styles.addBtn } text`}>Добавить</button>
    </article>
  )
}

BurgerIngredientsCard.propTypes = {
  ingridient: burgerIngredientType.isRequired,
}