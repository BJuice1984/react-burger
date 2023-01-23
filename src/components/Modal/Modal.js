import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ReactDOM from "react-dom";
import styles from './modal.module.css';

const modalRoot = document.getElementById("modal");

export default function Modal({ isModalOpen, handleCloseModal, component }) {

  return(
    ReactDOM.createPortal(
      <>
        <ModalOverlay isModalOpen={isModalOpen}/>
        <div className={`${ styles.window } ${isModalOpen ? styles.windowOpened : ''}`}>
          <button 
            className={ styles.closeButton }
            type="button" 
            aria-label="Закрыть"
            onClick={handleCloseModal}>
          </button>

          {component}

        </div>
      </>
      , modalRoot)
  )
}