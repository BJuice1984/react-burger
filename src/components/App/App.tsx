import { Routes, Route } from 'react-router-dom';
import { SIGN_IN, SIGN_UP, FORGOT_PASSWORD, PROFILE, ORDERS } from '../../constants/constants';
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
          <Route path={SIGN_IN} element={<Login />} />
          <Route path={SIGN_UP} element={<Registration />} />
          <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path='/' element={<Main />} />
          <Route path={PROFILE} element={<Profile />} />
          <Route path={PROFILE+ORDERS} element={<Orders />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;