import styles from './modalOrder.module.css';

export default function ModalOrder({ price }) {

  return(
    <div className={ styles.container }>
      <h2 className={`${ styles.header } text text_type_digits-large pt-30`}>{price}</h2>
      <span className="text text_type_main-medium pt-8">идентификатор заказа</span>
      <div className={`${ styles.pic } m-15`}/>
      <span className='text text_type_main-default pb-2'>Ваш заказ начали готовить</span>
      <span className='text text_type_main-default text_color_inactive mb-30'>Дождитесь готовности на орбитальной станции</span>
    </div>
  )
}