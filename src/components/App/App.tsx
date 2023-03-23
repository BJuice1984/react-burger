import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import Header from '../Header/Header';
import Login from '../Login/Login';
import styles from './app.module.css';

function App() {

  return (
    <div className={ styles.page }>
      <Modal />
      <div className={ styles.container }>
        <Header />
        <Routes>
          <Route path='/sign-in' element={<Login />} />
          <Route path='/' element={<Main />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;