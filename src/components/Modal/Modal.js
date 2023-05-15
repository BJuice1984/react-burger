import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalOrder from "../ModalOrder/ModalOrder";
import ModalError from "../ModalError/ModalError";
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import useClose from "../../hooks/useClose";
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_ITEM_DETAILS } from "../../services/actions/modalDetails";
import { getModalDetails } from "../../services/selectors/modalDetails";
import { useNavigate } from "react-router-dom";

const modalRoot = document.getElementById("modal");

export default function Modal({ component }) {
  const { modalOpen, displayedItem } = useSelector(getModalDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = () => {
    dispatch({
    type: DELETE_ITEM_DETAILS,
    });
    component && navigate(-1);
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
        <ModalOverlay component={component}/>
        <div className={`${ styles.window } ${component || modalOpen ? styles.windowOpened : ''}`}>
          <button 
            className={ styles.closeButton }
            type="button" 
            aria-label="Закрыть"
            onClick={closeModal}>
          </button>
          {component && component}
          {typeof(displayedItem) === "number" ? <ModalOrder /> : displayedItem === false && <ModalError /> }

        </div>
      </>
      , modalRoot)
  )
}
