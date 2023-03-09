import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import styles from './app.module.css';

function App() {

  return (
    <div className={ styles.page }>
      <Modal />
      <div className={ styles.container }>

        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;