import styles from './logoMobile.module.css';
import { Link } from "react-router-dom";

function Logo() {
  return <Link to='/' className={styles.logo} />
}

export default Logo;