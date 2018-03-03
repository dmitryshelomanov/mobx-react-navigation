import { StackNavigator } from 'react-navigation'
import List from './list'


const scenes = {
  ReportList: { screen: List },
}

export default StackNavigator(scenes)