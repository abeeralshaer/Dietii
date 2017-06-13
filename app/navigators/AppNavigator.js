import {DrawerNavigator,DrawerItems,StackNavigator}from 'react-navigation';
import {ScrollView,Text,View,Image,StyleSheet}from 'react-native';
import React from 'react';
import Splash from '../components/SplashScreen.js';
import Login from '../components/LoginScreen.js';
import Signup from '../components/SignupScreen.js';
import Subscribe from '../components/SubscribeScreen.js';
import ShoppingList from '../components/ShoppingListScreen.js';
import MyPlan from '../components/MyPlan.js';
import {Icon} from 'react-native-elements';
import Main from '../components/MainScreen.js';
import DailyCalculator from '../components/DailyCalculatorScreen.js';
import AskExpert from '../components/AskExpertScreen.js';
import {TabNavigator,NavigationActions}from 'react-navigation';


const MainTabs = {
  Main: {
    screen: Main

  },
  DailyCalculator: {
    screen: DailyCalculator

  },
  AskExpert: {
    screen: AskExpert

  }
};

export const MainTabsNavigator = TabNavigator(MainTabs);
export const styles = StyleSheet.create({
  text: {
    fontFamily: 'thesans'
  }
});
const DrawerIcon = ({navigation}) => {
  return (
   <Icon
      name='list'
      type='font-awesome'
      color='#f50'
      onPress={() => {navigation.navigate({routeName:'DrawerOpen'})
    }}/>
  );
};

export const TabsStackNavigator = StackNavigator({
  Home: {
    screen: MainTabsNavigator,
    navigationOptions:(props) => ({
      headerLeft: <DrawerIcon {...props}/>,
      headerTitle: <Text style={styles.text}>الرئيسية</Text>
    })
  }
});

export const SubscribeStackNav = StackNavigator({
  Subscribe: {
    screen: Subscribe,
    navigationOptions:(props) => ({
      headerLeft: <DrawerIcon {...props}/>,
      headerTitle: <Text style={styles.text}>إشترك الآن</Text>
    })
  }
});

export const MyPlanStackNav = StackNavigator({
  MyPlan: {
    screen: MyPlan,
    navigationOptions:(props) => ({
      headerLeft: <DrawerIcon {...props}/>,
      headerTitle: <Text style={styles.text}>خطتي الخاصة</Text>
    })
  }
});

export const ShoppingListStackNav = StackNavigator({
  ShoppingList: {
    screen: ShoppingList,
    navigationOptions:(props) => ({
      headerLeft: <DrawerIcon {...props}/>,
      headerTitle: <Text style={styles.text}>سلة المشتريات</Text>
    })
  }
});

export const DrawerRoutes = {
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

export const OpenAppStack = StackNavigator(Routes,{
  headerMode:'none'
});
