import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { initialIngridientsReducer } from './initialIngridients';
import { userIngridientsReducer } from './userIngridients';
import { modalDetailsReducer } from './modalDetails';
import { orderDetailsReducer } from './orderDetails';
import { forgotPasswordReducer } from './forgotPassword';
import { profileReducer } from './profile';
import { checkAuthReducer } from './checkAuth';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({
  initialIngridients: initialIngridientsReducer,
  userIngridients: userIngridientsReducer,
  modalDetails: modalDetailsReducer,
  orderDetails: orderDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  profile: profileReducer,
  checkAuth: checkAuthReducer,
})

export const store = configureStore({
  enhancer,
  reducer: rootReducer
});