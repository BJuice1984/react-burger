import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../BurgerIconLink/burgerIconLink.module.css'

export default function ProfileIconLink() {

  return(
    <div className={`${ styles.link } pt-2 pb-2`}>{<ProfileIcon type="secondary" />}<p className={`${ styles.description }`}>Личный кабинет</p></div>
  )
}