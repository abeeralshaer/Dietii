import React,{Component} from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';

class SplashScreen extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('Login');
    },1000);
  }

  render() {
    return(


    <Image
      source={require('../../assets/img/splash.jpg')}
      style={{
   flex: 1,
   alignSelf: 'stretch',
   width: undefined,
   height: undefined
 }} />

    );
  }
}




export default SplashScreen;
