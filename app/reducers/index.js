import {combineReducers} from 'redux';
import * as userReducers from './user.js';

export default combineReducers(
  {
    user : userReducers,
    nav  :userReducers.navReducer

  }
);
