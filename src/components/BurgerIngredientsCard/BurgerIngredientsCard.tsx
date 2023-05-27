import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerIngredientsCard.module.css';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { INGREDIENTS } from '../../constants/constants';
import { IngredientType } from '../../utils/types';

type BurgerIngredientsCardType = {
  ingridient: IngredientType,
  count: number
};

export default function BurgerIngredientsCard({ ingridient, count }: BurgerIngredientsCardType) {
  const location = useLocation();

  const [{isDrag}, dragRef] = useDrag({
    type: "ingridient",
    item: ingridient,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  const hover = isDrag ? styles.onHover : '';

  return(
    <Link to={`${INGREDIENTS}/${ingridient._id}`} state={{ background: location }}
      ref={dragRef} className={ `${ styles.element } ${hover}` }>
      {count && <Counter count={count} size="default" extraClass="m-1" />}
      <img className={ styles.pic }
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
