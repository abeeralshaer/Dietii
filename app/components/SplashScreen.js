import React,{Component} from 'react';
import {
  View,
  Text,
  Button
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
    const {navigation} = this.props;
    return(

    <View>
    <Text>SplashScreen</Text>
    <Button title='login' onPress={()=>navigation.navigate('Home')}/>
    </View>
    );
  }
}




export default SplashScreen;
