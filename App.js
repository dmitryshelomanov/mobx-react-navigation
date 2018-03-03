import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Provider, inject } from 'mobx-react/native'
import { autorun, useStrict } from 'mobx'
import RootNavigator from './src/scene/navigators/root-navigator'
import createNavigationContainer from './src/utils/create-navigation-container'
import stores from './src/stores'


useStrict(true)
stores.nav.setNavigator(RootNavigator)
const AppNavigationMobx = createNavigationContainer(RootNavigator)

export default () => (
  <Provider {...stores}>
    <AppNavigationMobx />
  </Provider>
)