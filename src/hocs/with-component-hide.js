import React, { Component } from 'react'
import { Animated } from 'react-native'
import getCurrentState from '../utils/get-navigation-state'

const TAB_BAR_OFFSET = -60

export default (Component, key = 'visible', duration = 400) => {
  return class TabBar extends Component {
    constructor(props) {
      super(props)
      this.state = {
        offset: new Animated.Value(0),
      }
    }
  
    componentWillReceiveProps(props) {
      const { params } = getCurrentState(props.navigation.state)
  
      if (params && !params[key])
       return Animated
        .timing(this.state.offset, { toValue: TAB_BAR_OFFSET, duration, })
        .start()
      Animated
        .timing(this.state.offset, { toValue: 0, duration, })
        .start()
    }
  
    render() {
      return (
        <Animated.View style={{ bottom: this.state.offset }}>
          <Component {...this.props} />
        </Animated.View>
      )
    }
  }
}