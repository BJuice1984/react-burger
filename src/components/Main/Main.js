import Header from "../Header/Header";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from './main.module.css';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Main({ bunIngridients, sauceIngridients, mainIngridients, openModal }) {

  return (
    <>
    <Header />
    <main className={ styles.main }>
      <DndProvider backend={HTML5Backend}>
        <div className={ styles.container }>
          <BurgerIngredients
            bunIngridients={bunIngridients}
            sauceIngridients={sauceIngridients}
            mainIngridients={mainIngridients}
            handleOpenModal={openModal} />
          <BurgerConstructor
            bunIngridients={bunIngridients}
            sauceIngridients={sauceIngridients}
            mainIngridients={mainIngridients}
            handleOpenModal={openModal} />
        </div>
      </DndProvider>
    </main>
    </>
  )
}