// this reducer is for global loading indicator...
// use custom loading indicators for specific parts of your screen

import { LOADING_STARTED, LOADING_FINISHED } from "./../actions/types";

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_STARTED:
      return true;
    case LOADING_FINISHED:
      return false;
    default:
      return state;
  }
};
