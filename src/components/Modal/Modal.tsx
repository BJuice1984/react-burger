import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import useClose from "../../hooks/useClose";
import { FC, ReactElement, useEffect, useState } from "react";

type ModalType = {
  component: ReactElement,
  handleClose: () => void,
}

const Modal: FC<ModalType> = ({ component, handleClose }) => {
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

const modalRoot = document.getElementById("modal")!;

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
            onClick={handleClose}
            test-cy="modal-close">
          </button>
          {component}
        </div>
      </>
      , modalRoot)
  )
}

export default Modal;
