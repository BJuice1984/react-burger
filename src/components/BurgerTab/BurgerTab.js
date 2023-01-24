import { useState } from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerTab() {
  const [current, setCurrent] = useState('Булки')
  return (
    <div style={{ display: 'flex' }} className="pt-5 pb-10">
      <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}