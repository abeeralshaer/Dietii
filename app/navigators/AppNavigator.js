import Splash from '../components/SplashScreen.js';
import Main from '../components/MainScreen.js';
import Login from '../components/LoginScreen.js';
import Signup from '../components/SignupScreen.js';
import Subscribe from '../components/SubscribeScreen.js';
import React from 'react';
import ShoppingList from '../components/ShoppingListScreen.js';
import MyPlan from '../components/MyPlan.js';
import DailyCalculator from '../components/DailyCalculatorScreen.js';
import AskExpert from '../components/AskExpertScreen.js';
import {Icon} from 'react-native-elements';
import {StackNavigator,TabNavigator,DrawerNavigator,DrawerItems} from 'react-navigation';
import {ScrollView,Text,View,Image}from 'react-native';



const MainTabs = {
  Main: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'الرئيسية',
      headerTitle: 'ma'
    }
  },
  DailyCalculator: {
    screen: DailyCalculator,
    navigationOptions: {
      tabBarLabel: 'حاسبةالسعرات',
      headerTitle: 'ff'
    }
  },
  AskExpert: {
    screen: AskExpert,
    navigationOptions: {
      tabBarLabel: 'ff',
      headerTitle: 'ddd'
    }
  }
};

const DrawerIcon = ({ navigate }) => {
  return (
    <Icon
    raised
name='heartbeat'
type='font-awesome'
color='#f50'
      onPress={() => navigate('DrawerOpen')}

    />
  );
};

const MainTabsNavigator = TabNavigator(MainTabs);

const Routes = {
  Splash: {
    screen: Splash,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />,
    })
  },
  Home: {
    screen: MainTabsNavigator,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />,
    })
  },
  Login : {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />,
    })
  },
  Signup : {
    screen: Signup,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />,
    })
  }
};

const AppNavigator = StackNavigator(Routes);
const MainStackNavigator = StackNavigator({
  Main:{
    screen: Main,
    navigationOptions:   ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />,
      title: 'Main'
    })
  }
}
  );

const AppDrawer = {
  Drawer: {
    screen : MainStackNavigator
  },
  Stack: {
    screen: AppNavigator,
  }
};

const AppwithDrawer = DrawerNavigator(AppDrawer,{drawerWidth: 200,
  drawerPosition: 'right',
  contentComponent: (props) =>
  <ScrollView>
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/110108/pexels-photo-110108.jpeg?h=350&auto=compress&cs=tinysrgb',
        }}
        style={{width: 200, height: 200}} />
      <Text>This is A Drawer</Text>
      </View>
      <DrawerItems {...props} />
    </ScrollView>});


export default AppwithDrawer;
