import styles from './modalOverlay.module.css';
import { useSelector } from 'react-redux';

export default function ModalOverlay() {

  const modalOpen = useSelector(state => state.modalDetails.modalOpen);

  return(
      <div className={`${ styles.modal } ${modalOpen ? styles.modalOpened : ''}`}></div>
  )
}