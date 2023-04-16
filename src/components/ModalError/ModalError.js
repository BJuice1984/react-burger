import styles from './modalError.module.css';
import { useSelector } from 'react-redux';

export default function ModalError() {

  const orderSuccess = useSelector(state => state.orderDetails.orderSuccess);

  return(
    <div className={ styles.container }>
      <h2 className={`${ styles.header } text text_type_digits-medium pt-30`}>У нас ошибка..</h2>
      <span className="text text_type_main-medium p-8">Извините, у нас произошла ошибка на сервере</span>
      <div className={`${ styles.pic } m-15`}/>
      <span className='text text_type_main-default p-4'>Мы уже чиним. Попробуйте, пожалуйста, сделать заказ чуть позже</span>
      {orderSuccess && (<span className='text text_type_main-default text_color_inactive mb-30'>Ответ сервера: {orderSuccess}</span>)}
    </div>
  )
}