import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './header.module.css'

export default function Header() {
  return(
    <header className={ styles.header }>
      <div className={ styles.container }>
        <nav className={ styles.links }>
          <Link to='/' className={`${ styles.link } p-2`}>{<BurgerIcon type="primary" />}Конструктор</Link>
          <Link to='/' className={`${ styles.link } p-2`}>{<ListIcon  type="secondary" />}Лента заказов</Link>
        </nav>
        <Logo />
        <button className={ styles.btn }>
          <Link to='/' className={`${ styles.link } p-2`}>{<ProfileIcon  type="secondary" />}Личный кабинет</Link>
        </button>
      </div>
    </header>

  )
}