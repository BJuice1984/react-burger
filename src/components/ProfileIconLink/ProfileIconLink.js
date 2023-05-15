import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../BurgerIconLink/burgerIconLink.module.css'

export default function ProfileIconLink({ isProfile }) {

  return(
    <div className={`${ styles.link } pt-2 pb-2`}>{<ProfileIcon type={isProfile ? "primary" : "secondary"} />}<p className={`${ styles.description }`}>Личный кабинет</p></div>
  )
}