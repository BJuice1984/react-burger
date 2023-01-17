import ReactDOM from "react-dom";
// import { useEffect, useState } from "react";
import styles from './modal.module.css';

const modalRoot = document.getElementById("modal");

export default function Modal({ isModalOpen, handleCloseModal, component }) {

  console.log(component)

  // useEffect(() => {
  //   if (component) {
  //     setIsModalOpen(true)
  //   }
  // }, [component])

  // const closeModal = () => {
  //   setIsModalOpen(false)
  // }

  return(
    ReactDOM.createPortal(
      <div className={`${ styles.modal } ${isModalOpen ? styles.modalOpened : ''}`}>
        <div className={ styles.window }>
          <button 
            className={ styles.closeButton }
            type="button" 
            aria-label="Закрыть"
            onClick={handleCloseModal}>
          </button>

          {component}

        </div>
      </div>
      , modalRoot)
  )
}