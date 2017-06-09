import {connect} from 'react-redux';
import React,{Component}from 'react';
import AppNavigator from '../navigators/AppNavigator.js';
import {addNavigationHelpers} from 'react-navigation';


const mapStatetoProps = (state) =>{
  console.log(state);
  return {
    nav: state.nav
  };
};


class App extends Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}


const AppwithState= connect(mapStatetoProps)(App);

export default AppwithState;
