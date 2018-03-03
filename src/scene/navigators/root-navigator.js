import { StackNavigator } from 'react-navigation'
import DrawerNavigator from './drawer-navigator'

import LoginScene from '../login'
import FaqScene from '../faq'

const scenes = {
  Login: { screen: LoginScene },
  Faq: { screen: FaqScene },
  Main: { screen: DrawerNavigator },
}

const configs = {
  initialRouteName: 'Main',
}

export default StackNavigator(scenes, configs)
