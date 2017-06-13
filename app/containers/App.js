import {connect} from 'react-redux';
import React,{Component}from 'react';
import {OpenAppStack} from '../navigators/AppNavigator.js';
import {addNavigationHelpers} from 'react-navigation';


const mapStatetoProps = (state) =>{
  return {
    nav: state.nav
  };
};


class App extends Component {
  render() {
    return (
      <OpenAppStack navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}


const AppwithState= connect(mapStatetoProps)(App);

export default AppwithState;
