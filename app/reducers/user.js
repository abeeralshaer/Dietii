import * as types from '../actions/types.js';
import {OpenAppStack} from '../navigators/AppNavigator.js';

export const login = (state = {},action)=>{
  switch (action.type) {
  case types.LOGIN:
    return Object.assign({},state,{
      isLoggedin : true
    });

  default:

  }
};

const initialAction = OpenAppStack.router.getActionForPathAndParams('Splash');

const initialState = OpenAppStack.router.getStateForAction(initialAction);

export const navReducer = (state = initialState ,action)=>{

  const nextState = OpenAppStack.router.getStateForAction(action,initialState);
  return  nextState || state;
};
