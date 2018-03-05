import React from 'react'
import { Text, View } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { inject, observer } from 'mobx-react/native'
import autobind from 'autobind-decorator'
import back from './handle-back-button'
import getCurrentState from '../utils/get-navigation-state'

export default (Component) => {
  @inject('nav')
  @back
  @observer
  class NavigationContainer extends React.Component {
    @autobind
    backButtonPressed() {
      const { nav } = this.props
      const result = !!nav.goBack()

      if (nav.state.routeName === 'AppDispatcher') {
        return !!nav.goBack()
      }
      return result
    }

    getNavigation = () => {
      const { nav } = this.props

      return addNavigationHelpers({
        dispatch: nav.dispatchNavigation,
        state: nav.navigationState,
        addListener: () => {},
      })

    }
    render() {

      return <Component
        navigation={this.getNavigation()}
        screenProps={{ ...this.props }}
      />
    }
  }
  return NavigationContainer
}