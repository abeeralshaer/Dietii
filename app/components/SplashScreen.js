import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const SplashScreen = ({navigation})=>{
  return(

    <View>
    <Text>SplashScreen</Text>
    <Button title='login' onPress={()=>navigation.navigate('Login')}/>
    </View>


  );
};

export default SplashScreen;
