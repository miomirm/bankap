import { LOADING_STARTED, LOADING_FINISHED } from './types';
import { NavigationActions } from 'react-navigation';

// before sending an HTTP request please dispatch({type: LOADING_STARTED})
// after an HTTP request is completed please dispatch({type: LOADING_FINISHED})

// To redirect a user to a different screen please use
// dispatch(NavigationActions.navigate({routeName: 'ScreenName' }));

export const logOut = () => dispatch => {

};

export const login = (email, password) => dispatch => {

};

export const signUp = (email, password, passwordConfirmation) => dispatch => {
  
};

export const forgotPassword = (email) => dispatch => {
  
};
