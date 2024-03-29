import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import styles from '../components/Main/main.module.css';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Main() {

  return (
    <main className={ styles.main }>
      <DndProvider backend={HTML5Backend}>
        <div className={ styles.container }>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </DndProvider>
    </main>
  )
}