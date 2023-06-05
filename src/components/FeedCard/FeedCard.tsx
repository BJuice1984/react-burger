import { Link, useLocation } from 'react-router-dom';
import styles from './feesCard.module.css';
import { FEED } from '../../constants/constants';

export default function FeedCard() {
  const location = useLocation();

  return(
    <Link to={`${FEED}/`} state={{ background: location }}
    className={ `${ styles.element }` }>
    


  </Link>
  )
}