import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from '../BurgerIconLink/burgerIconLink.module.css'

export default function ListIconLink() {

  return(
    <Link to='/feed' className={`${ styles.link } pt-2 pb-2`}>{<ListIcon type="secondary" />}<p className={`${ styles.description }`}>Лента заказов</p></Link>
  )
}