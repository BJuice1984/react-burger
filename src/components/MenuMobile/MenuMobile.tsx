import BurgerIconLink from '../BurgerIconLink/BurgerIconLink';
import ListIconLink from '../ListIconLink/ListIconLink';
import ProfileIconLink from '../ProfileIconLink/ProfileIconLink';
import ProfileNavigation from '../ProfileNavigation/ProfileNavigation';
import styles from './menuMobile.module.css';

type MenuMobileType = {
  isProfile: boolean,
  isBurgerConstructor: boolean,
};

export default function MenuMobile({ isProfile, isBurgerConstructor }: MenuMobileType) {

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
          <details className={ styles.listItem }>
            <summary className={ styles.dropdown }><ProfileIconLink isProfile={isProfile}/>
              <svg className={ styles.arrow } height="34" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" fill="#fff"/></svg>
            </summary>
            <ProfileNavigation />
          </details>
          <li className={ styles.listItem }><BurgerIconLink isBurgerConstructor={isBurgerConstructor}/></li>
          <li className={ styles.listItem }><ListIconLink /></li>
        </ul>
      </div>
    </div>
  )

}
