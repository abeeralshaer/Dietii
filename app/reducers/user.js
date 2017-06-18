import {OpenAppStack} from '../navigators/AppNavigator.js';



const initialAction = OpenAppStack.router.getActionForPathAndParams('Splash');
const initialState = OpenAppStack.router.getStateForAction(initialAction);
export const navReducer = (state = initialState ,action)=>{
  const {type, routeName} = action;
  const nextState = OpenAppStack.router.getStateForAction(action,initialState);
    return  nextState || state;
};
