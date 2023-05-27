import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { SIGN_IN, SIGN_UP, FORGOT_PASSWORD, PROFILE, ORDERS, INGREDIENTS } from '../../constants/constants';
import Main from '../../pages/Main';
import Modal from '../Modal/Modal';
import ModalCard from '../ModalCard/ModalCard';
import Header from '../Header/Header';
import Login from '../../pages/Login';
import Registration from '../../pages/Registration';
import ForgotPassword from '../../pages/ForgotPassword';
import Profile from '../../pages/Profile';
import Orders from '../Orders/Orders';
import styles from './app.module.css';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../services/actions/checkAuth';
import { getItems } from '../../services/actions/initialIngridients';

type LocationType = {
  hash: string;
  pathname: string;
  search: string;
  state: undefined | null;
};

type LocationWithStateType = Omit<LocationType, 'state'> & {
  state: {
    background: LocationType;
  };
};

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location: LocationType | LocationWithStateType = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    //@ts-ignore
    dispatch(checkAuth());
    //@ts-ignore
    dispatch(getItems());
  }, [dispatch]);

  const closeModalCard = () => {
    navigate(-1);
  }

  return (
    <div className={ styles.page }>
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
          <Route path={`${INGREDIENTS}/:id`} element={<ModalCard/>} />
        </Routes>
        {background &&
        <Routes>
          <Route path={`${INGREDIENTS}/:id`} element={<Modal component={<ModalCard/>} handleClose={closeModalCard}/>} />
        </Routes>}

      </div>
    </div>
  );
}

export default App;