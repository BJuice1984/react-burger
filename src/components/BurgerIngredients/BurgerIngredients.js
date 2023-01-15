import styles from './burgerIngridients.module.css';
import BurgerIngredientsCard from '../BurgerIngredientsCard/BurgerIngredientsCard';
import PropTypes from 'prop-types';

export default function BurgerIngredients({ bunIngridients, sauceIngridients, mainIngridients }) {

  return(
    <section className={ styles.ingridients }>
      <h2 className={ styles.header }>Соберите бургер</h2>
      <div className={ styles.buttonContainer }>
        <button className={ styles.button }>Булки</button>
        <button className={ styles.button }>Соусы</button>
        <button className={ styles.button }>Начинки</button>
      </div>
      <ul className={ styles.ingridientsListContainer }>
        <li className={ styles.ingridientsListHeader }>Булки
          <ul className={ styles.ingridientsList }>
            {bunIngridients.map(ingridient => 
              <BurgerIngredientsCard
                ingridient={ingridient}
                key={ingridient._id} />)}
          </ul>
        </li>
        <li className={ styles.ingridientsListHeader }>Соусы
          <ul className={ styles.ingridientsList }>
            {sauceIngridients.map(ingridient => 
              <BurgerIngredientsCard
                ingridient={ingridient}
                key={ingridient._id} />)}
          </ul>
        </li>
        <li className={ styles.ingridientsListHeader }>Начинки
          <ul className={ styles.ingridientsList }>
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

// BurgerIngredients.propTypes = {
//   initialIngridients: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     proteins: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     carbohydrates: PropTypes.number.isRequired,
//     calories: PropTypes.number.isRequired,
//     price: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,
//     image_mobile: PropTypes.string.isRequired,
//     image_large: PropTypes.string.isRequired,
//     __v: PropTypes.number
//   }),
// }
BurgerIngredients.propTypes = {
  bunIngridients: PropTypes.array.isRequired,
  sauceIngridients: PropTypes.array.isRequired,
  mainIngridients: PropTypes.array.isRequired,
}