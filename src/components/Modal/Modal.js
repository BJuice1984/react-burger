import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import useClose from "../../hooks/useClose";
import { useEffect, useState } from "react";

const modalRoot = document.getElementById("modal");

export default function Modal({ component, handleClose }) {
const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {
  if (component) {
    setIsModalOpen(true);
  }
}, [component]);

  const {
    useEscClose,
    useClickClose
  } = useClose();

  useEscClose(handleClose);
  useClickClose(handleClose, "modalOpened");

  return(
    ReactDOM.createPortal(
      <>
        <ModalOverlay isModalOpen={isModalOpen}/>
        <div className={`${ styles.window } ${isModalOpen ? styles.windowOpened : ''}`}>
          <button 
            className={ styles.closeButton }
            type="button" 
            aria-label="Закрыть"
            onClick={handleClose}>
          </button>
          {component}
        </div>
      </>
      , modalRoot)
  )
}
