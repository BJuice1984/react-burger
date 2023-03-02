import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';
import styles from './BurgerConstructorCard.module.css';

import { useDispatch } from 'react-redux';
import { MOVE_USER_ITEM } from '../../services/actions/userIngridients';

export default function BurgerConstructorCard({ ingridient, index }) {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{isDrag}, drag] = useDrag({
    type: "sort_ingridient",
    item: () => {
      return { ingridient, index }
    },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  const [{isHover}, drop] = useDrop({
    accept: "sort_ingridient",
    collect: monitor => ({
      dropItem: monitor.getItem(),
      isHover: monitor.isOver()
    }),
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return
      };

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
		  const clientOffset = monitor.getClientOffset();
		  const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      };

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      };

      dispatch({
        type: MOVE_USER_ITEM,
        from: dragIndex,
        to: hoverIndex,
      });

      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  const hover = isHover ? styles.onHover : '';
  const opacity = isDrag ? styles.onOpacity : '';

  return (
    <article ref={ref} className={`${ styles.element } ${hover}`}>
      <DragIcon type="primary"/>
      <ConstructorElement
        extraClass="ml-2"
        text={`${ingridient.name}`}
        price={ingridient.price}
        thumbnail={ingridient.image} />
    </article>
  )
}