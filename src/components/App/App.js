import { Routes, Route, useLocation } from 'react-router-dom';
import { SIGN_IN, SIGN_UP, FORGOT_PASSWORD, PROFILE, ORDERS, INGREDIENTS } from '../../constants/constants';
import Main from '../Main/Main';
import Ingredient from '../Ingredient/Ingredient';
import Modal from '../Modal/Modal';
import ModalCard from '../ModalCard/ModalCard';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Profile from '../Profile/Profile';
import Orders from '../Orders/Orders';
import styles from './app.module.css';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../services/actions/checkAuth';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className={ styles.page }>
      {/* <Modal /> */}
      <div className={ styles.container }>
        <Header />
        <Routes location={background || location}>
          <Route path={SIGN_IN} element={<ProtectedRouteElement onlyUnAuth = {true} component={<Login />}/>} />
          <Route path={SIGN_UP} element={<ProtectedRouteElement onlyUnAuth = {true} component={<Registration />}/>} />
          <Route path={FORGOT_PASSWORD} element={<ProtectedRouteElement onlyUnAuth = {true} component={<ForgotPassword />}/>} />
          <Route path='/' element={<Main />} />
          <Route path={PROFILE} element={<ProtectedRouteElement component={<Profile />}/>}>
            <Route path={ORDERS} element={<Orders />} />
          </Route>
          <Route path={`${INGREDIENTS}/:id`} element={<Ingredient />} />
        </Routes>
        {background &&
        <Routes>
          <Route path={`${INGREDIENTS}/:id`} element={<Modal component={<ModalCard />}/>} />
        </Routes>}

      </div>
    </div>
  );
}

export default App;