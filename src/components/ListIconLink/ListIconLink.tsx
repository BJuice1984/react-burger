import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from '../BurgerIconLink/burgerIconLink.module.css'
import { FEED } from '../../constants/constants';

type ListIconLinkType = {
  isFeed: boolean
};

export default function ListIconLink({ isFeed }: ListIconLinkType) {

  return(
    <Link to={FEED} className={`${ styles.link } pt-2 pb-2`}>{<ListIcon type={isFeed ? "primary" : "secondary"} />}<p className={`${ styles.description }`}>Лента заказов</p></Link>
  )
}