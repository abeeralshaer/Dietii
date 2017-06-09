import * as types from '../actions/types.js';
import AppNavigator from '../navigators/AppNavigator.js';

export const login = (state = {},action)=>{
  switch (action.type) {
  case types.LOGIN:
    return Object.assign({},state,{
      isLoggedin : true
    });

  default:

  }
};
const initialAction = AppNavigator.router.getActionForPathAndParams('Splash');

const initialState = AppNavigator.router.getStateForAction(initialAction);

export const navReducer = (state = initialState ,action)=>{

  const nextState = AppNavigator.router.getStateForAction(action,initialState);
  return  nextState || state;
};
