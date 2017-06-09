import Splash from '../components/SplashScreen.js';
import Main from '../components/MainScreen.js';
import Login from '../components/LoginScreen.js';
import Signup from '../components/SignupScreen.js';
import {StackNavigator,TabNavigator} from 'react-navigation';


const Routes = {
  Splash: {
    screen: Splash
  },
  Main: {
    screen: Main
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
