import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from './profileNavigation.module.css';

export default function ProfileNavigation() {
  const location = useLocation();

  return(
    <nav className={ styles.links }>
      <Link to='/profile' className={`${ styles.link } ${location.pathname === '/profile' ? '' : styles.link_disactive }`}><p className={`${ styles.description } text text_type_main-medium`}>Профиль</p></Link>
      <Link to='/profile/orders' className={`${ styles.link } ${location.pathname === '/profile/orders' ? '' : styles.link_disactive }`}><p className={`${ styles.description } text text_type_main-medium`}>История заказов</p></Link>
      <Link to='/sign-in' className={`${ styles.link } ${ styles.link_disactive }`}><p className={`${ styles.description } text text_type_main-medium`}>Выход</p></Link>
    </nav>
  )
}