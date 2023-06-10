import React from 'react';
import styles from './modalCard.module.css';
import { useSelector } from "../../hooks/hooks";
import { getInitialIngridientsItems } from '../../services/selectors/initialIngridients';
import { useParams } from 'react-router-dom';
import { IngredientType } from '../../utils/types';

export default function ModalCard() {

  const { id } = useParams();
  const ingredients = useSelector(getInitialIngridientsItems);
  const ingredient = ingredients.find((item: IngredientType) => item._id === id);

  return(
    <React.Fragment>
      {ingredient && (
      <div className={ styles.container }>
        <h2 className={`${ styles.header } text text_type_main-medium pt-10`}>Детали ингредиента</h2>
        <img
          className={ styles.pic }
          src={ingredient.image_large}
          alt="Картинка. Изображение ингридиента">
        </img>
        <span className={`${ styles.description } text pt-4 pb-8`}>{ingredient.name}</span>
        <div className={`${ styles.calContainer } pb-15`}>
          <article className={`${ styles.cal } pb-2`}>
            <h2 className={`${ styles.calDescription } text text_type_main-small text_color_inactive pb-1`}>Калории,ккал</h2>
            <p className={`${ styles.calValue } text text_type_main-small text_color_inactive`}>{ingredient.calories}</p>
          </article>
          <article className={`${ styles.cal } pb-2`}>
            <h2 className={`${ styles.calDescription } text text_type_main-small text_color_inactive pb-1`}>Белки, г</h2>
            <p className={`${ styles.calValue } text text_type_main-small text_color_inactive`}>{ingredient.proteins}</p>
          </article>
          <article className={`${ styles.cal } pb-2`}>
            <h2 className={`${ styles.calDescription } text text_type_main-small text_color_inactive pb-1`}>Жиры, г</h2>
            <p className={`${ styles.calValue } text text_type_main-small text_color_inactive`}>{ingredient.fat}</p>
          </article>
          <article className={`${ styles.cal } pb-2`}>
            <h2 className={`${ styles.calDescription } text text_type_main-small text_color_inactive pb-1`}>Углеводы, г</h2>
            <p className={`${ styles.calValue } text text_type_main-small text_color_inactive`}>{ingredient.carbohydrates}</p>
          </article>
        </div>
      </div>
      )}
    </React.Fragment>
  )
}