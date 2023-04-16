import styles from './modalOrder.module.css';
import { useSelector } from 'react-redux';
import { getDisplayedItem } from '../../services/selectors/modalDetails';

export default function ModalOrder() {

  const orderNumber = useSelector(getDisplayedItem);

  return(
    <div className={ styles.container }>
      <h2 className={`${ styles.header } text text_type_digits-large pt-30`}>{orderNumber}</h2>
      <span className="text text_type_main-medium pt-8">идентификатор заказа</span>
      <div className={`${ styles.pic } m-15`}/>
      <span className='text text_type_main-default pb-2'>Ваш заказ начали готовить</span>
      <span className='text text_type_main-default text_color_inactive mb-30'>Дождитесь готовности на орбитальной станции</span>
    </div>
  )
}