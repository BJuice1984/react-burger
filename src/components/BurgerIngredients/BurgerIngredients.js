import styles from './burgerIngridients.module.css';
import BurgerIngredientsCard from '../BurgerIngredientsCard/BurgerIngredientsCard';
import BurgerTab from '../BurgerTab/BurgerTab';
import PropTypes from 'prop-types';

export default function BurgerIngredients({ bunIngridients, sauceIngridients, mainIngridients }) {

  return(
    <section className={ styles.ingridients }>
      <h2 className={`${ styles.header } text text_type_main-large pt-10`}>Соберите бургер</h2>
      <BurgerTab />
      <ul className={ styles.ingridientsListContainer }>
        <li className={`${ styles.ingridientsListHeader } text text_type_main-medium`}>
          Булки
          <ul className={`${ styles.ingridientsList } pt-6 pb-10`}>
            {bunIngridients.map(ingridient => 
              <BurgerIngredientsCard
                ingridient={ingridient}
                key={ingridient._id} />)}
          </ul>
        </li>
        <li className={`${ styles.ingridientsListHeader } text text_type_main-medium`}>
          Соусы
          <ul className={`${ styles.ingridientsList } pt-6 pb-10`}>
            {sauceIngridients.map(ingridient => 
              <BurgerIngredientsCard
                ingridient={ingridient}
                key={ingridient._id} />)}
          </ul>
        </li>
        <li className={`${ styles.ingridientsListHeader } text text_type_main-medium`}>
          Начинки
          <ul className={`${ styles.ingridientsList } pt-6 pb-10`}>
            {mainIngridients.map(ingridient => 
              <BurgerIngredientsCard
                ingridient={ingridient}
                key={ingridient._id} />)}
          </ul>
        </li>
      </ul>

    </section>
  )
}

BurgerIngredients.propTypes = {
  bunIngridients: PropTypes.array.isRequired,
  sauceIngridients: PropTypes.array.isRequired,
  mainIngridients: PropTypes.array.isRequired,
}