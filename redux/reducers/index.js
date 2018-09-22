import { combineReducers } from "redux";
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from './../../navigation/AppNavigator';
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";

const navReducer = createNavigationReducer(AppNavigator);

export default combineReducers({
  nav: navReducer,
  user: userReducer,
  loading: loadingReducer
});
