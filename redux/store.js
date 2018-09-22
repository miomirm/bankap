import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const initialState = {};

const reduxMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const middlewares = [thunk, reduxMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);

export default store;
