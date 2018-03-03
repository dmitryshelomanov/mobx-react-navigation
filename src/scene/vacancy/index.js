import { StackNavigator } from 'react-navigation'
import FullDescription from './full-description'
import List from './list'


const scenes = {
  List: { screen: List },
  FullDescription: { screen: FullDescription },
}

export default StackNavigator(scenes)
