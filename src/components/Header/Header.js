import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './header.module.css'

export default function Header() {
  return(
    <header className={ styles.header }>
      <div className={ styles.container }>
        <nav className={ styles.links }>
          <Link to='/' className={`${ styles.link } p-2`}>{<BurgerIcon type="primary" />}<p className={`${ styles.description }`}>Конструктор</p></Link>
          <Link to='/feed' className={`${ styles.link } p-2`}>{<ListIcon type="secondary" />}<p className={`${ styles.description }`}>Лента заказов</p></Link>
        </nav>
        <Logo />
        <button className={ styles.btn }>
          <Link to='/profile' className={`${ styles.link } p-2`}>{<ProfileIcon type="secondary" />}<p className={`${ styles.description }`}>Личный кабинет</p></Link>
        </button>
      </div>
    </header>

  )
}