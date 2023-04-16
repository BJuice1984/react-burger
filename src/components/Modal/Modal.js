import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalCard from "../ModalCard/ModalCard";
import ModalOrder from "../ModalOrder/ModalOrder";
import ModalError from "../ModalError/ModalError";
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import useClose from "../../hooks/useClose";
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_ITEM_DETAILS } from "../../services/actions/modalDetails";
import { getModalDetails } from "../../services/selectors/modalDetails";

const modalRoot = document.getElementById("modal");

export default function Modal() {

  const { modalOpen, displayedItem } = useSelector(getModalDetails);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({
    type: DELETE_ITEM_DETAILS,
    })
  };

  const {
    EscClose,
    ClickClose
  } = useClose();

  EscClose(closeModal);
  ClickClose(closeModal, "modalOpened");

  return(
    ReactDOM.createPortal(
      <>
        <ModalOverlay />
        <div className={`${ styles.window } ${modalOpen ? styles.windowOpened : ''}`}>
          <button 
            className={ styles.closeButton }
            type="button" 
            aria-label="Закрыть"
            onClick={closeModal}>
          </button>

          {typeof(displayedItem) === "number" ? <ModalOrder /> : displayedItem === false ? <ModalError /> : <ModalCard />}

        </div>
      </>
      , modalRoot)
  )
}
