import {combineReducers} from 'redux';
import * as userReducers from './user.js';

export default combineReducers(Object.assign(
  userReducers
)
);
