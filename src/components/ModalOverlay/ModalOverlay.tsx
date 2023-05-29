import { FC } from 'react';
import styles from './modalOverlay.module.css';

type ModalOverlayType = {
  isModalOpen: boolean
}

const ModalOverlay: FC<ModalOverlayType> = (isModalOpen) => {
  return(
      <div className={`${ styles.modal } ${isModalOpen ? styles.modalOpened : ''}`}></div>
  )
};

export default ModalOverlay;