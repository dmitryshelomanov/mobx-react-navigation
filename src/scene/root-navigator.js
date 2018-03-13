import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
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
    screen: StackNavigator({
      Drawer: {
        screen: DrawerNavigator({
          Tabs: { screen: TabMain },
        }, DrawerOptions),
        navigationOptions: {
          header: null,
        },
      },
      TestFlow: {
        screen: () => (
          <View>
            <TouchableOpacity>
              <Text>TestScreen</Text>
            </TouchableOpacity>
          </View>
        ),
      },
    }),
  },
}, { headerMode: 'none' })
