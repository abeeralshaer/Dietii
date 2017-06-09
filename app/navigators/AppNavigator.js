import Splash from '../components/SplashScreen.js';
import Main from '../components/MainScreen.js';
import Login from '../components/LoginScreen.js';
import Signup from '../components/SignupScreen.js';
import Subscribe from '../components/SubscribeScreen.js';
import ShoppingList from '../components/ShoppingListScreen.js';
import MyPlan from '../components/MyPlan.js';
import DailyCalculator from '../components/DailyCalculatorScreen.js';
import AskExpert from '../components/AskExpertScreen.js';


import {StackNavigator,TabNavigator} from 'react-navigation';

const MainTabs = {
  Main: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'الرئيسية'
  }

  },
  DailyCalculator: {
    screen: DailyCalculator,
    navigationOptions: {
      tabBarLabel: 'حاسبةالسعرات'
  }
  },
  AskExpert: {
    screen: AskExpert,
    navigationOptions: {
      tabBarLabel: 'إسأل الخبير'
  }
}
};

const MainTabsNavigator = TabNavigator(MainTabs);

const Routes = {
  Splash: {
    screen: Splash
  },
  Home: {
    screen: MainTabsNavigator
  },
  Login : {
    screen: Login
  },
  Signup : {
    screen: Signup
  }
};

const AppNavigatore = StackNavigator(Routes);

export default AppNavigatore;
