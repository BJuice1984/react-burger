import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../BurgerIconLink/burgerIconLink.module.css';

type ProfileIconLinkType = {
  isProfile: boolean,
  isOrders: boolean
};

export default function ProfileIconLink({ isProfile, isOrders }: ProfileIconLinkType) {

  return(
    <div className={`${ styles.link } pt-2 pb-2`}>
      {<ProfileIcon type={isProfile || isOrders ? "primary" : "secondary"} />}
      <p className={`${isProfile || isOrders ? '' : styles.disactive} ${ styles.description }`}>Личный кабинет</p></div>
  )
}