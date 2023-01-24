import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import useIngridients from '../../hooks/useIngridients';
import useModal from '../../hooks/useModal';
import styles from './app.module.css';

function App() {

  const {
    bunIngridients,
    sauceIngridients,
    mainIngridients,
  } = useIngridients();

  const {
    isModalOpen,
    openModal,
    closeModal,
    isComponent
  } = useModal();

  return (
    <div className={ styles.page }>
      <Modal 
        component={isComponent}
        handleCloseModal={closeModal}
        isModalOpen={isModalOpen} />

      <div className={ styles.container }>

        <Routes>
          <Route path='/' element={<Main
            bunIngridients={bunIngridients}
            sauceIngridients={sauceIngridients}
            mainIngridients={mainIngridients}
            openModal={openModal} />}/>
        </Routes>

      </div>
    </div>
  );
}

export default App;