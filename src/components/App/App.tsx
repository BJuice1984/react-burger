import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { SIGN_IN, SIGN_UP, FORGOT_PASSWORD, PROFILE, ORDERS, INGREDIENTS, FEED } from '../../constants/constants';
import Main from '../../pages/Main';
import Modal from '../Modal/Modal';
import ModalCard from '../ModalCard/ModalCard';
import ModalOrderInfo from '../ModalOrderInfo/ModalOrderInfo';
import Header from '../Header/Header';
import Login from '../../pages/Login';
import Registration from '../../pages/Registration';
import ForgotPassword from '../../pages/ForgotPassword';
import Profile from '../../pages/Profile';
import Orders from '../Orders/Orders';
import Feeds from '../../pages/Feeds';
import styles from './app.module.css';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import { useEffect } from 'react';
import { useDispatch } from "../../hooks/hooks";
import { checkAuth } from '../../services/actions/checkAuth';
import { getItems } from '../../services/actions/initialIngredients';

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
    dispatch(checkAuth());
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
          <Route path={FEED} element={<Feeds />} />
          <Route path={PROFILE} >
            <Route index element={<ProtectedRouteElement component={<Profile />}/>} />
            <Route path={ORDERS} element={<ProtectedRouteElement component={<Orders />}/>} />
            <Route path={`${ORDERS}/:id`} element={<ProtectedRouteElement component={<ModalOrderInfo/>}/>} />
          </Route>
          <Route path={`${INGREDIENTS}/:id`} element={<ModalCard/>} />
          <Route path={`${FEED}/:id`} element={<ModalOrderInfo/>} />
        </Routes>
        {background &&
        <Routes>
          <Route path={`${INGREDIENTS}/:id`} element={<Modal component={<ModalCard/>} handleClose={closeModalCard}/>} />
          <Route path={`${FEED}/:id`} element={<Modal component={<ModalOrderInfo/>} handleClose={closeModalCard}/>} />
        </Routes>}

      </div>
    </div>
  );
}

export default App;