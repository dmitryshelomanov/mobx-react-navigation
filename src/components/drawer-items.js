import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { inject } from 'mobx-react/native'


export default inject('nav')(({ nav }) => (
  <View>
    <TouchableOpacity onPress={() => nav.navigate('TestScreen') }>
      <Text>to TestFlow</Text>
    </TouchableOpacity>
  </View>
))
