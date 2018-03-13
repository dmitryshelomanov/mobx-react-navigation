import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { inject } from 'mobx-react/native'
import { StackNavigator } from 'react-navigation'

export default StackNavigator({
  CodeSend: {
    screen: inject('nav')(({ nav }) => (
      <View>
        <TouchableOpacity onPress={() => nav.reset('CodeCheck') }>
          <Text>to CodeCheck</Text>
        </TouchableOpacity>
      </View>
    )),
    navigationOptions: { title: 'CodeSend' },
  },
  CodeCheck: {
    screen: inject('nav')(({ nav }) => (
      <View>
        <TouchableOpacity onPress={() => nav.reset('CodeSend') }>
          <Text>to CodeSend</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('MainFlow') }>
          <Text>to MainFlow</Text>
        </TouchableOpacity>
      </View>
    )),
    navigationOptions: { title: 'CodeCheck' },
  },
})
