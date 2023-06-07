import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { useRef, memo } from 'react';
import styles from './BurgerConstructorCard.module.css';

import { useDispatch } from 'react-redux';
import { MOVE_USER_ITEM, DELETE_USER_ITEM } from '../../services/actions/userIngredients';
import { IngredientType } from '../../utils/types';

type BurgerConstructorCardType = {
  ingridient: IngredientType,
  index: number
};

function BurgerConstructorCard({ ingridient, index }: BurgerConstructorCardType) {
  const dispatch = useDispatch();
  const ref = useRef<HTMLLIElement>(null);

  const [{isDrag}, drag] = useDrag({
    type: "sort_ingridient",
    item: () => {
      // Определяем элемент
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
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }

      // Индекс перемещаемого элемента
      const dragIndex = item.index;
      // Индекс текущего элемента (над которым находится курсор при dnd)
      const hoverIndex = index;
      // console.log('hoverIndex', hoverIndex)
      // Выходим, если индексы сопадают
      if (dragIndex === hoverIndex) {
        // console.log('dragIndex === hoverIndex')
        return
      };
      // Получаем положение текущего элемента относительно экрана
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Получаем центр текущего элемента по вертикали
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
       // Получаем положение курсора
		  const clientOffset = monitor.getClientOffset() || { y: 0 };
      // Получаем положение курсора относительно текущего элемента
		  const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Выходим, если перемещаемый элемент ниже, чем 50% от высоты текущего
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      };
      // Выходим, если перемещаемый элемент выше, чем 50% от высоты текущего
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      };

      dispatch({
        type: MOVE_USER_ITEM,
        from: dragIndex,
        to: hoverIndex,
      });
      // Сразу меняем индекс перемещаемого элемента
      item.index = hoverIndex;
    },
  });

  const hover = isDrag ? styles.onHover : '';
  drag(drop(ref));

  return (
    <article ref={ref} data-handler-id={handlerId} className={`${ styles.element } ${hover}`}>
      <DragIcon type="primary"/>
      <ConstructorElement
        extraClass="ml-2"
        text={`${ingridient.name}`}
        price={ingridient.price}
        thumbnail={ingridient.image}
        handleClose={() => dispatch({
          type: DELETE_USER_ITEM,
          ingridient: ingridient
        })} />
    </article>
  )
}

export default memo(BurgerConstructorCard);
