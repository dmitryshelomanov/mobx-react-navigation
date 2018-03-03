import { StackNavigator } from 'react-navigation'
import WikiScreen from './wiki'


const scenes = {
  WikiScreen: { screen: WikiScreen },
}

export default StackNavigator(scenes)
