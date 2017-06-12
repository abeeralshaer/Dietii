import {DrawerNavigator,DrawerItems}from 'react-navigation';
import {ScrollView,Text,View,Image}from 'react-native';
import {ShoppingListStackNav}  from './StackNavigators.js';
import {MyPlanStackNav}  from './StackNavigators.js';
import {SubscribeStackNav}  from './StackNavigators.js';
import {TabsStackNavigator} from './StackNavigators.js';
import React from 'react';
import MyPlan from '../components/MyPlan.js';
import Login from '../components/LoginScreen.js';
import Signup from '../components/SignupScreen.js';

console.log(TabsStackNavigator);
const DrawerRoutes = {
  Main: {
    screen : TabsStackNavigator
  },
  Plan: {
    screen: MyPlanStackNav
  },
  Subscribe: {
    screen: SubscribeStackNav
  },
  ShoppingList: {
    screen: ShoppingListStackNav
  }
};

export const AppDrawerNav= DrawerNavigator(DrawerRoutes,{drawerWidth: 200,
  drawerPosition: 'right',
  contentComponent:  (props) =>
  <ScrollView>
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between' }}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/110108/pexels-photo-110108.jpeg?h=350&auto=compress&cs=tinysrgb',
        }}
        style={{width: 200, height: 200}} />
      <Text>This is A Drawer</Text>
      </View>
      <DrawerItems {...props} />
    </ScrollView>
});
