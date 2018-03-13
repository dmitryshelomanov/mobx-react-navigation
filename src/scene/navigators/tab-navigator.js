import React from 'react'
import { TabNavigator, StackNavigator, TabBarBottom, TabBarTop } from 'react-navigation'
import { View, Text } from 'react-native'
import CreateScene from '../create-scene'


const scenes = {
  Tab1: {
    screen: (props) => (
      <View {...props}>
        <Text>1</Text>
      </View>
    )
  },
  Tab2: {
    screen: (props) => (
      <View  {...props}>
        <Text>2</Text>
      </View>
    ),
  },
  // tab3: {
  //   screen: StackNavigator({
  //     tab3stack1: { screen: (props) => <CreateScene text={'tab3-stack1'} {...props} /> },
  //     tab3stack2: { screen: (props) => <CreateScene text={'tab3-stack2'} {...props} /> },
  //   }),
  // },
  // menu: {
  //   screen: StackNavigator({
  //     menustack1: { screen: (props) => <CreateScene text={'menu-stack1'} {...props} /> },
  //     menustack2: { screen: (props) => <CreateScene text={'menu-stack2'} {...props} /> },
  //   }),
  // },
}

const configs = {
  tabBarPosition: 'bottom',
  lazy: true,
  // tabBarComponent: TabBarTop,
}

export default TabNavigator(scenes, configs)
