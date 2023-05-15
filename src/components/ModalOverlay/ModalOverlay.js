import styles from './modalOverlay.module.css';
import { useSelector } from 'react-redux';

export default function ModalOverlay({ component }) {

  const modalOpen = useSelector(state => state.modalDetails.modalOpen);

  return(
      <div className={`${ styles.modal } ${modalOpen || component ? styles.modalOpened : ''}`}></div>
  )
}