import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { useRef, memo } from 'react';
import styles from './BurgerConstructorCard.module.css';

import { useDispatch } from 'react-redux';
import { MOVE_USER_ITEM } from '../../services/actions/userIngridients';

function BurgerConstructorCard({ ingridient, index }) {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{isDrag}, drag] = useDrag({
    type: "sort_ingridient",
    item: () => {
      return { index }
    },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  const [{handlerId}, drop] = useDrop({
    accept: "sort_ingridient",
    collect: monitor => ({
      handlerId: monitor.getHandlerId()
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

  const hover = isDrag ? styles.onHover : '';

  return (
    <article ref={drag(drop(ref))} data-handler-id={handlerId} className={`${ styles.element } ${hover}`}>
      <DragIcon type="primary"/>
      <ConstructorElement
        extraClass="ml-2"
        text={`${ingridient.name}`}
        price={ingridient.price}
        thumbnail={ingridient.image} />
    </article>
  )
}

export default memo(BurgerConstructorCard);