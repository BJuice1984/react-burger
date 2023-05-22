import styles from './modalCard.module.css';
import { useSelector } from 'react-redux';
import { getInitialIngridientsItems } from '../../services/selectors/initialIngridients';
import { useParams } from 'react-router-dom';

export default function ModalCard(background) {

  const { id } = useParams();
  const ingredients = useSelector(getInitialIngridientsItems);
  const ingredient = ingredients.find(item => item._id === id);

  return(
    ingredient && (
    <div className={ styles.container }>
      <h2 className={`${ styles.header } text text_type_main-medium pt-10`}>Детали ингредиента</h2>
      <img
        className={ styles.pic }
        src={background ? ingredient.image : ingredient.image_large}
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
    )
  )
}