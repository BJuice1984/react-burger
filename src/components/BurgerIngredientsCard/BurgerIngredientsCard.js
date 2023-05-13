import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerIngredientsCard.module.css';
import { burgerIngredientType, countType } from '../../utils/prop-types';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { SHOW_ITEM_DETAILS } from '../../services/actions/modalDetails';
import { Link, useLocation } from 'react-router-dom';
import { INGREDIENTS } from '../../constants/constants';

export default function BurgerIngredientsCard({ ingridient, count }) {

  const dispatch = useDispatch();
  const location = useLocation();

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
    <Link to={`${INGREDIENTS}/${ingridient._id}`} state={{ background: location }}
      ref={dragRef} className={ `${ styles.element } ${hover}` }>
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
    </Link>
  )
}

BurgerIngredientsCard.propTypes = {
  ingridient: burgerIngredientType.isRequired,
  count: countType,
}