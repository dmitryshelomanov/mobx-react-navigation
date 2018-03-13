import React from 'react'
import { StackNavigator } from 'react-navigation'
import DrawerNavigator from './drawer-navigator'
import CreateScene from '../create-scene'


const scenes = {
  root1: { screen: (props) => <CreateScene text={'root1'} {...props} /> },
  root2: { screen: (props) => <CreateScene text={'root2'} {...props} /> },
  root3: { screen: (props) => <CreateScene text={'root3'} {...props} /> },
}

export default StackNavigator(scenes)
