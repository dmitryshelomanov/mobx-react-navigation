import { BackHandler, Platform } from 'react-native'
import React, { Component } from 'react'


export default function handleBackButton(WrappedComponent) {
  class BackButtonComponent extends Component {
    componentDidMount() {
      const { backButtonPressed } = this.targetComponentRef

      this.backButtonPressedSubscription = BackHandler.addEventListener(
        'backPress',
        backButtonPressed,
      )
    }

    componentWillUnmount() {
      if (this.backButtonPressedSubscription) {
        this.backButtonPressedSubscription.remove()
      }
    }

    render() {
      return (
        <WrappedComponent
          ref={(component) => {
            this.targetComponentRef = component
          }}
          {...this.props}
        />
      )
    }
  }

  return Platform.select({
    ios: WrappedComponent,
    android: BackButtonComponent,
  })
}