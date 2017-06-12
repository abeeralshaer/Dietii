import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './app/reducers/index.js';
import App from './app/containers/App.js';



const loggerMiddleware = createLogger({predicate: (getState,action) => __DEV__});

const configureStore = (initialState)=> {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return createStore(reducer,initialState,enhancer);
};

const store = configureStore({});




export const Dietii = () => {
  return (<Provider store={store}>
    <App/>
  </Provider>
  );
};


AppRegistry.registerComponent('Dietii', () => Dietii);
