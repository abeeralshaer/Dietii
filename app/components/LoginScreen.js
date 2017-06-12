import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const LoginScreen = ({navigation})=>{
  return(

    <View>
    <Text>LoginScreen</Text>
    <Button title='تسجيل دخول' onPress={()=>navigation.navigate('LaunchApp')}></Button>
    </View>

  );
};

export default LoginScreen;
