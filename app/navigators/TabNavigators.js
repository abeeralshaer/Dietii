import Main from '../components/MainScreen.js';
import DailyCalculator from '../components/DailyCalculatorScreen.js';
import AskExpert from '../components/AskExpertScreen.js';
import {TabNavigator}from 'react-navigation';
import {Text,
  StyleSheet
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily:'thesans'
  }
});

const MainTabs = {
  Main: {
    screen: Main,
    navigationOptions: {
      headerTitle:<Text style={styles.text}>الرئيسية</Text>
    }
  },
  DailyCalculator: {
    screen: DailyCalculator,
    navigationOptions: {
      headerTitle:<Text style={styles.text}>حاسبة السعرات</Text>
    }
  },
  AskExpert: {
    screen: AskExpert,
    navigationOptions: {
      headerTitle:<Text style={styles.text}>إسأل الخبير</Text>
    }
  }
};

export const MainTabsNavigator = TabNavigator(MainTabs);
