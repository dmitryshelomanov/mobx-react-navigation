import React from 'react'
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import VacansyScreen from '../vacancy'
import ReportScreen from '../report'
import { View, Text } from 'react-native'
import WithComponentHide from '../../hocs/with-component-hide'


const scenes = {
  Report: { screen: ReportScreen, path: '' },
  Vacansy: { screen: VacansyScreen, path: 'vacancy' },
}

const configs = {
  initialRouteName: 'Report',
  tabBarPosition: 'bottom',
  lazy: true,
  tabBarComponent: WithComponentHide(TabBarBottom),
}

export default TabNavigator(scenes, configs)
