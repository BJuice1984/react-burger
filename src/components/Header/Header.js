import LogoMobile from '../LogoMobile/LogoMobile';
import MenuMobile from '../MenuMobile/MenuMobile';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIconLink from '../BurgerIconLink/BurgerIconLink';
import ListIconLink from '../ListIconLink/ListIconLink';
import ProfileIconLink from '../ProfileIconLink/ProfileIconLink';
import styles from './header.module.css'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  
  return(
    <header className={ styles.header }>
      <div className={ styles.container }>
        <LogoMobile />
        <MenuMobile />
        <nav className={ styles.links }>
          <BurgerIconLink />
          <ListIconLink />
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <button type='button' className={ styles.btn } onClick={() => navigate("/profile")}>
          <ProfileIconLink />
        </button>
      </div>
    </header>

  )
}