import { MiddlewareArray, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { initialIngridientsReducer } from './initialIngredients';
import { userIngridientsReducer } from './userIngredients';
import { orderDetailsReducer } from './orderDetails';
import { forgotPasswordReducer } from './forgotPassword';
import { profileReducer } from './profile';
import { checkAuthReducer } from './checkAuth';
import { socketFeedMiddleware } from '../middlewares/socketMiddleware';
import { wsActions } from '../actions/wsActions';

export const rootReducer = combineReducers({
  initialIngridients: initialIngridientsReducer,
  userIngridients: userIngridientsReducer,
  orderDetails: orderDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  profile: profileReducer,
  checkAuth: checkAuthReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(thunk, socketFeedMiddleware(wsActions))
});