import * as types from './types.js';
export const login = (user) =>{
  return {
    type: types.LOGIN,
    user
  };
};
//trying out asyncronous actions
//TODO
// export const getdata = (user) => {
//   return (dispatch) => {
//     dispatch(login(user))
//     return fetch()
//     .then()
//     .then(result=>dispatch())
//
//
//   };
// };
