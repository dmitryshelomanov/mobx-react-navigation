import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { DrawerNavigator, NavigationActions } from 'react-navigation'
import TabNavigator from './tab-navigator'
import Faq from '../faq'

const Comp = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DrawerClose')
          navigation.navigate('Faq')
        }}
      >
        <Text>to faq</Text>
      </TouchableOpacity>
    </View>
  )
}

const scenes = {
  Index: { screen: TabNavigator },
}

const configs = {
  contentComponent: Comp
}

const Drawer = DrawerNavigator(scenes, configs)

Drawer.navigationOptions = {
  header: null,
}

export default Drawer
