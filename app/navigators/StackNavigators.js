import {StackNavigator}from 'react-navigation';
import {AppDrawerNav}from './DrawerNavigator.js';
import Subscribe from '../components/SubscribeScreen.js';
import ShoppingList from '../components/ShoppingListScreen.js';
import MyPlan from '../components/MyPlan.js';
import Login from '../components/LoginScreen.js';
import Signup from '../components/SignupScreen.js';
import Splash from '../components/SplashScreen.js';
import  {MainTabsNavigator} from './TabNavigators.js';
import {Icon} from 'react-native-elements';
import React from 'react';
import {StyleSheet,Text}from 'react-native';


const Routes = {
  Splash : {
    screen: Splash,
  },
  Signup: {
    screen: Signup
  },
  Login: {
    screen: Login
  },
  LaunchApp: {
    screen: AppDrawerNav
  }
};
const styles = StyleSheet.create({
  text: {
    fontFamily: 'thesans'
  }
});


const DrawerIcon = ({ navigate }) => {
  return (
   <Icon
      raised
      name='list'
      type='font-awesome'
      color='#f50'
      onPress={() => navigate('DrawerOpen')}/>
  );
}; 

console.log(TabsStackNavigator); 

export const OpenAppStack = StackNavigator(Routes);
export const TabsStackNavigator = StackNavigator({
  Home: {
    screen: MainTabsNavigator,
    navigationOptions:({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation}/>,
      headerTitle: <Text style={styles.text}>الرئيسية</Text>
    })
  }
});



export const SubscribeStackNav = StackNavigator({
  Subscribe: {
    screen: Subscribe,
    navigationOptions:({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation}/>,
      headerTitle: <Text style={styles.text}>إشترك الآن</Text>
    })
  }
});

export const MyPlanStackNav = StackNavigator({
  MyPlan: {
    screen: MyPlan,
    navigationOptions:({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation}/>,
      headerTitle: <Text style={styles.text}>خطتي الخاصة</Text>
    })
  }
});

export const ShoppingListStackNav = StackNavigator({
  ShoppingList: {
    screen: ShoppingList,
    navigationOptions:({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation}/>,
      headerTitle: <Text style={styles.text}>سلة المشتريات</Text>
    })
  }
});
