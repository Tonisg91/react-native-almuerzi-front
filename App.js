import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Meals from './screens/Meals'
import Modal from './screens/Modal'

const AppNavigator = createStackNavigator({
  Meals: {
    screen: Meals,
  }
}, {
  initialRouteName: 'Meals'
})

const RootStack = createStackNavigator({
  Main: AppNavigator,
  Modal: Modal,
}, {
  mode: 'modal',
  headerMode: 'none'
})

export default createAppContainer(RootStack)