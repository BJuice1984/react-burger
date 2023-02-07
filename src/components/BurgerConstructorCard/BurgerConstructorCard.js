import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructorCard({ ingridient }) {

  return (
    <article>
      <DragIcon type="primary"/>
        <ConstructorElement
        text={`${ingridient.name}`}
        price={ingridient.price}
        thumbnail={ingridient.image} />
    </article>
  )
}