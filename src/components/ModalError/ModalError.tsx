import styles from './modalError.module.css';
import { useSelector } from 'react-redux';

//Временно не функционирует, т.к. нужно настраивать пропсы

export default function ModalError() {
//@ts-ignore
  const orderSuccess = useSelector(state => state.orderDetails.orderSuccess);
  console.log('Err')

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