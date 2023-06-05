import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../BurgerIconLink/burgerIconLink.module.css';

type ProfileIconLinkType = {
  isProfile: boolean
};

export default function ProfileIconLink({ isProfile }: ProfileIconLinkType) {

  return(
    <div className={`${ styles.link } pt-2 pb-2`}>{<ProfileIcon type={isProfile ? "primary" : "secondary"} />}<p className={`${ styles.description }`}>Личный кабинет</p></div>
  )
}