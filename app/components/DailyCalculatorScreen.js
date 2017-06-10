import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const DailyCalculator = ()=>{
  return(

    <View>
    <Text style={styles.text}>بسم الله الرحمن الرحيم</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'thesans'
  }
});

export default DailyCalculator;
