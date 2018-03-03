import React, { Component } from 'react'
import { inject } from 'mobx-react/native'

export default (Wrapper) => {
  class Onesignal extends Component {
    componentDidMount() {
      // register one ignal event
    }

    componentWillUnmount() {
      // unmoun onesignal event
    }

    dispatchNavigateEvent() {

    }

    dispatchSettingsEvent() {

    }

    render() {
      return <Wrapper {...this.props} />
    }
  }
  
  return Onesignal
}
