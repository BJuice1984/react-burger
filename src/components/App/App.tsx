import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Profile from '../Profile/Profile';
import Orders from '../Orders/Orders';
import styles from './app.module.css';

function App() {

  return (
    <div className={ styles.page }>
      <Modal />
      <div className={ styles.container }>
        <Header />
        <Routes>
          <Route path='/sign-in' element={<Login />} />
          <Route path='/sign-up' element={<Registration />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/' element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/orders' element={<Orders />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;