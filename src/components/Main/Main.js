import Header from "../Header/Header";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import styles from './main.module.css';

export default function Main({ initialIngridients }) {
  return (
    <>
    <Header />
    <main className={ styles.main }>
      <BurgerIngredients 
        initialIngridients={initialIngridients}/>
      
    </main>
    </>
  )
}