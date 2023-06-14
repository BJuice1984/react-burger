import { Link, useMatch, useNavigate } from "react-router-dom";
import styles from './profileNavigation.module.css';
import { useDispatch } from "../../hooks/hooks";
import { postLogout } from "../../services/actions/profile";
import { SIGN_IN, PROFILE, ORDERS } from "../../constants/constants";

export default function ProfileNavigation() {
  const isOrders: boolean = !!useMatch({ path: `${PROFILE}/${ORDERS}` });
  const isProfile: boolean = !!useMatch({ path: PROFILE })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogut = () => {
    dispatch(postLogout());
    navigate(SIGN_IN);
  }

  return(
    <nav className={ styles.links }>
      <Link to={PROFILE} className={`${ styles.link } ${isProfile ? '' : styles.link_disactive }`}><p className={`${ styles.description } text`}>Профиль</p></Link>
      <Link to={ORDERS} className={`${ styles.link } ${isOrders ? '' : styles.link_disactive }`}><p className={`${ styles.description } text`}>История заказов</p></Link>
      <button className={ styles.btn } onClick={handleLogut}>Выход</button>
    </nav>
  )
}