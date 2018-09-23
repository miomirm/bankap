import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from './../screens/auth/LoginScreen';
import SignUpScreen from './../screens/auth/SignUpScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';

export default createSwitchNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
  Main: MainTabNavigator,
}, {
  initialeRouteName: 'Login'
});