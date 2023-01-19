import styles from './modalCard.module.css';

export default function ModalCard() {
  return(
    <div className={ styles.container }>
      <h2 className={`${ styles.header } text text_type_main-medium pt-10`}>Детали ингредиента</h2>
      <img
        className={ styles.pic }
        src="https://code.s3.yandex.net/react/code/meat-01.png"
        alt="Картинка. Изображение ингридиента">
      </img>
      <span className={`${ styles.description } text text_type_main-default pt-4 pb-8`}>Биокотлета из марсианской Магнолии</span>
      <div className={`${ styles.calContainer } pb-15`}>
        <article className={`${ styles.cal } pb-2`}>
          <h2 className={`${ styles.calDescription } text text_type_main-small text_color_inactive pb-1`}>Калории,ккал</h2>
          <p className={`${ styles.calValue } text text_type_main-small text_color_inactive`}>244,4</p>
        </article>
        <article className={`${ styles.cal } pb-2`}>
          <h2 className={`${ styles.calDescription } text text_type_main-small text_color_inactive pb-1`}>Белки, г</h2>
          <p className={`${ styles.calValue } text text_type_main-small text_color_inactive`}>12,2</p>
        </article>
        <article className={`${ styles.cal } pb-2`}>
          <h2 className={`${ styles.calDescription } text text_type_main-small text_color_inactive pb-1`}>Жиры, г</h2>
          <p className={`${ styles.calValue } text text_type_main-small text_color_inactive`}>17,2</p>
        </article>
        <article className={`${ styles.cal } pb-2`}>
          <h2 className={`${ styles.calDescription } text text_type_main-small text_color_inactive pb-1`}>Углеводы, г</h2>
          <p className={`${ styles.calValue } text text_type_main-small text_color_inactive`}>10,2</p>
        </article>

      </div>
    </div>
  )
}