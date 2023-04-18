import { useState } from 'react';
import BurgerIconLink from '../BurgerIconLink/BurgerIconLink';
import ListIconLink from '../ListIconLink/ListIconLink';
import ProfileIconLink from '../ProfileIconLink/ProfileIconLink';
import ProfileNavigation from '../ProfileNavigation/ProfileNavigation';
import styles from './menuMobile.module.css';

export default function MenuMobile() {
  const [dropdown, setDropdown] = useState(false)

  return (
    <div className={`${styles.burgerMenu} ${styles.burgerMenu_type__visible}`}>
      <input type="checkbox" className={ styles.burgerMenu__toggler }></input>
      <div className={ styles.burgerMenu__hamburger }>
        <div className={ styles.burgerMenu__hamburgerBtn }></div>
      </div>
      <div className={ styles.burgerMenu__blur }></div>
      <div className={`${styles.menu} ${styles.menu_type_main}`}>
        <h2 className={`${ styles.header } text text_type_main-large`}>Меню</h2>
        <ul className={ styles.list }>
          <li className={ styles.listItem }>
            <button type='button' className={ styles.btn } onClick={() => setDropdown((prev) => !prev)}>
              <ProfileIconLink />
            </button>
            <ProfileNavigation dropdown={dropdown} />
          </li>
          <li className={ styles.listItem }><BurgerIconLink /></li>
          <li className={ styles.listItem }><ListIconLink /></li>
        </ul>
        
        
        
      </div>
    </div>
  )

}
