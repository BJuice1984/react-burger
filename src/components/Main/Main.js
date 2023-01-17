import Header from "../Header/Header";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from './main.module.css';

export default function Main({ bunIngridients, sauceIngridients, mainIngridients, openModal }) {

  return (
    <>
    <Header />
    <main className={ styles.main }>
      <div className={ styles.container }>
        <BurgerIngredients
          bunIngridients={bunIngridients}
          sauceIngridients={sauceIngridients}
          mainIngridients={mainIngridients} />
        <BurgerConstructor
          bunIngridients={bunIngridients}
          sauceIngridients={sauceIngridients}
          mainIngridients={mainIngridients}
          handleOpenModal={openModal} />
      </div>
    </main>
    </>
  )
}