import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import useClose from "../../hooks/useClose";
import { func, bool, element } from 'prop-types';

const modalRoot = document.getElementById("modal");

export default function Modal({ isModalOpen, handleCloseModal, component }) {

  const {
    EscClose,
    ClickClose
  } = useClose();

  EscClose(isModalOpen, handleCloseModal);
  ClickClose(isModalOpen, handleCloseModal, "modalOpened")

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

Modal.propTypes = {
  isModalOpen: bool.isRequired,
  handleCloseModal: func.isRequired,
  component: element
}