import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {Icon} from 'react-native-elements';

const MainScreen = ()=>{
  return(

    <View>
    <Text>MainScreen</Text>
      <Icon
      raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
        onPress={() => {}}

      />
    </View>

  );
};

export default MainScreen;
