import {StackNavigator} from 'react-navigation'
import * as firebase from 'firebase'
import Home from './screens/home'
import Login from './screens/login'

const firebaseConfig = {
  apiKey: "AIzaSyDfrFkfr1WRZtnePUxlAUdJZZWj5XjXzEQ",
  databaseURL: "https://binder-99f7c.firebaseio.com",
}

firebase.initializeApp(firebaseConfig)

const RouteConfigs = {
  Login: {screen:Login},
  Home: {screen:Home},
}

const StackNavigatorConfig = {
  headerMode:'none',
}

export default StackNavigator(RouteConfigs, StackNavigatorConfig)
