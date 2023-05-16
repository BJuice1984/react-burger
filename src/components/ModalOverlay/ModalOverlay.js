import styles from './modalOverlay.module.css';

export default function ModalOverlay({ isModalOpen }) {

  return(
      <div className={`${ styles.modal } ${isModalOpen ? styles.modalOpened : ''}`}></div>
  )
}