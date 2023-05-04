import styles from './modalCard.module.css';
import { useSelector } from 'react-redux';
import { getDisplayedItem } from '../../services/selectors/modalDetails';

export default function ModalCard() {

  const ingridient = useSelector(getDisplayedItem);

  return(
    ingridient && (
    <div className={ styles.container }>
      <h2 className={`${ styles.header } text text_type_main-medium pt-10 ml-10`}>Детали ингредиента</h2>
      <img
        className={ styles.pic }
        src={ingridient.image}
        alt="Картинка. Изображение ингридиента">
      </img>
      <span className={`${ styles.description } text pt-4 pb-8`}>{ingridient.name}</span>
      <div className={`${ styles.calContainer } pb-15`}>
        <article className={`${ styles.cal } pb-2`}>
          <h2 className={`${ styles.calDescription } text text_type_main-small text_color_inactive pb-1`}>Калории,ккал</h2>
          <p className={`${ styles.calValue } text text_type_main-small text_color_inactive`}>{ingridient.calories}</p>
        </article>
        <article className={`${ styles.cal } pb-2`}>
          <h2 className={`${ styles.calDescription } text text_type_main-small text_color_inactive pb-1`}>Белки, г</h2>
          <p className={`${ styles.calValue } text text_type_main-small text_color_inactive`}>{ingridient.proteins}</p>
        </article>
        <article className={`${ styles.cal } pb-2`}>
          <h2 className={`${ styles.calDescription } text text_type_main-small text_color_inactive pb-1`}>Жиры, г</h2>
          <p className={`${ styles.calValue } text text_type_main-small text_color_inactive`}>{ingridient.fat}</p>
        </article>
        <article className={`${ styles.cal } pb-2`}>
          <h2 className={`${ styles.calDescription } text text_type_main-small text_color_inactive pb-1`}>Углеводы, г</h2>
          <p className={`${ styles.calValue } text text_type_main-small text_color_inactive`}>{ingridient.carbohydrates}</p>
        </article>
      </div>
    </div>
    )
  )
}