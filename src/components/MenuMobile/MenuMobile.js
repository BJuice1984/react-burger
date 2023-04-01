import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import styles from './menuMobile.module.css';

export default function MenuMobile() {

  return (
    <div className={`${styles.burgerMenu} ${styles.burgerMenu_type__visible}`}>
      <input type="checkbox" className={ styles.burgerMenu__toggler }></input>
      <div className={ styles.burgerMenu__hamburger }>
        <div className={ styles.burgerMenu__hamburgerBtn }></div>
      </div>
      <div className={ styles.burgerMenu__blur }></div>
      <div className={`${styles.menu} ${styles.menu_type_main}`}>
        <ProfileNavigation />
      </div>
    </div>
  )

}
