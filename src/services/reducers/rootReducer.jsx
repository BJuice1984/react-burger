import { configureStore } from '@reduxjs/toolkit';
import { compose, applyMiddleware } from 'redux';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers();

const rootReducer

export const store = configureStore({
  enhancer,
  reducer: rootReducer
});