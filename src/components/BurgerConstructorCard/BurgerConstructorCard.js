import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructorCard.module.css';

export default function BurgerConstructorCard({ ingridient }) {

  return (
    <article className={ styles.element }>
      <DragIcon type="primary"/>
      <ConstructorElement
        extraClass="ml-2"
        text={`${ingridient.name}`}
        price={ingridient.price}
        thumbnail={ingridient.image} />
    </article>
  )
}