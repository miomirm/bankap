import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from './../screens/auth/LoginScreen';
import SignUpScreen from './../screens/auth/SignUpScreen';

export default createSwitchNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
  Main: MainTabNavigator,
}, {
  initialeRouteName: 'Login'
});