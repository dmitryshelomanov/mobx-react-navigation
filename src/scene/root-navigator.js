import {
  StackNavigator,
  TabNavigator,
  TabBarTop,
  DrawerNavigator,
} from 'react-navigation'
import withHide from '../hocs/with-component-hide'
import {
  TabNavigationOptions,
  DrawerOptions,
} from './options'
import LoginFlow from './login'
import VacancyFlow from './vacancy'
import FeedbackFlow from './feedback'


const TabMain = TabNavigator({
    ...VacancyFlow,
    ...FeedbackFlow,
}, TabNavigationOptions)

export default StackNavigator({
  LoginFlow: {
    screen: LoginFlow,
  },
  MainFlow: {
    screen: DrawerNavigator({
      TabsMain: {
        screen: TabMain,
      },
    }, DrawerOptions),
  },
}, { headerMode: 'none' })
