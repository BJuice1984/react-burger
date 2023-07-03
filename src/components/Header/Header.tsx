import LogoMobile from '../LogoMobile/LogoMobile';
import MenuMobile from '../MenuMobile/MenuMobile';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIconLink from '../BurgerIconLink/BurgerIconLink';
import ListIconLink from '../ListIconLink/ListIconLink';
import ProfileIconLink from '../ProfileIconLink/ProfileIconLink';
import styles from './header.module.css'
import { useMatch, useNavigate } from 'react-router-dom';
import { FEED, ORDERS, PROFILE } from '../../constants/constants';

export default function Header() {
  const navigate = useNavigate();

  const isBurgerConstructor = !!useMatch({ path: '/'});
  const isProfile = !!useMatch({ path: PROFILE});
  const isFeed = !!useMatch({ path: FEED});
  const isOrders = !!useMatch({ path: `${PROFILE}/${ORDERS}`});
  
  return(
    <header className={ styles.header }>
      <div className={ styles.container }>
        <LogoMobile />
        <MenuMobile 
          isProfile={isProfile}
          isBurgerConstructor={isBurgerConstructor}
          isFeed={isFeed}
          isOrders={isOrders}/>
        <nav className={ styles.links }>
          <BurgerIconLink isBurgerConstructor={isBurgerConstructor}/>
          <ListIconLink isFeed={isFeed}/>
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <button type='button' className={ styles.btn } onClick={() => navigate(PROFILE)}>
          <ProfileIconLink isProfile={isProfile} isOrders={isOrders}/>
        </button>
      </div>
    </header>

  )
}