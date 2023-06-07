import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { initialIngridientsReducer } from './initialIngredients';
import { userIngridientsReducer } from './userIngredients';
import { modalDetailsReducer } from './modalDetails';
import { orderDetailsReducer } from './orderDetails';
import { forgotPasswordReducer } from './forgotPassword';
import { profileReducer } from './profile';
import { checkAuthReducer } from './checkAuth';
import { socketFeedMiddleware } from '../middlewares/socketFeedMiddleware';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancers = composeEnhancers(applyMiddleware(thunk, socketFeedMiddleware(wsActions)));

export const rootReducer = combineReducers({
  initialIngridients: initialIngridientsReducer,
  userIngridients: userIngridientsReducer,
  modalDetails: modalDetailsReducer,
  orderDetails: orderDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  profile: profileReducer,
  checkAuth: checkAuthReducer,
})

export const store = configureStore({
  enhancers,
  reducer: rootReducer,
});