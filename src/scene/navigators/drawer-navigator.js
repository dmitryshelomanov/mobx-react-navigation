import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { DrawerNavigator, NavigationActions } from 'react-navigation'
import TabNavigator from './tab-navigator'


const scenes = {
  Index: { screen: TabNavigator },
}

const configs = {
  contentComponent: null,
}

const navigationOptions = {
  header: null,
}

const Drawer = DrawerNavigator(scenes, configs)

Drawer.navigationOptions = navigationOptions

export default Drawer
