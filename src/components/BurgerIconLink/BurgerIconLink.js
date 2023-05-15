import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './burgerIconLink.module.css'

export default function BurgerIconLink({ isBurgerConstructor }) {

  return(
    <Link to='/' className={`${ styles.link } pt-2 pb-2 pr-6`}>{<BurgerIcon type={isBurgerConstructor ? "primary" : "secondary"} />}<p className={`${ styles.description }`}>Конструктор</p></Link>
  )
}