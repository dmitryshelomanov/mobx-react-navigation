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
import withOneSignal from './src/hocs/with-onesignal'
import stores from './src/stores'


useStrict(true)
stores.nav.setNavigator(RootNavigator)

const AppWithOneSignal = withOneSignal(RootNavigator)
const AppNavigationMobx = createNavigationContainer(AppWithOneSignal)

export default () => (
  <Provider {...stores}>
    <AppNavigationMobx />
  </Provider>
)