import React, { Component } from 'react'
import { inject } from 'mobx-react/native'

export default (Wrapper) => {
  class Onesignal extends Component {
    render() {
      return <Wrapper {...this.props} />
    }
  }
  
  return Onesignal
}
