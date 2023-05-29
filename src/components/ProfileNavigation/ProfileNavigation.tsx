import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from './profileNavigation.module.css';
import { useDispatch } from "react-redux";
import { postLogout } from "../../services/actions/profile";
import { SIGN_IN, PROFILE, ORDERS } from "../../constants/constants";

export default function ProfileNavigation() {
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogut = () => {
    //@ts-ignore
    dispatch(postLogout());
    navigate(SIGN_IN);
  }

  return(
    <nav className={ styles.links }>
      <Link to={PROFILE} className={`${ styles.link } ${location.pathname === PROFILE ? '' : styles.link_disactive }`}><p className={`${ styles.description } text`}>Профиль</p></Link>
      <Link to={ORDERS} className={`${ styles.link } ${location.pathname === ORDERS ? '' : styles.link_disactive }`}><p className={`${ styles.description } text`}>История заказов</p></Link>
      <button className={ styles.btn } onClick={handleLogut}>Выход</button>
    </nav>
  )
}