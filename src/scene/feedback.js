import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { inject } from 'mobx-react/native'
import { StackNavigator } from 'react-navigation'


export default {
  FeedbackFlow: {
    screen: StackNavigator({
      FeedbackList: {
        screen: inject('nav')(({ nav }) => (
          <View>
            <TouchableOpacity onPress={() => nav.navigate('Feedback') }>
              <Text>FeedbackList</Text>
            </TouchableOpacity>
          </View>
        )),
        navigationOptions: { title: 'FeedbackList' },
      },
      Feedback: {
        screen: inject('nav')(({ nav }) => (
          <View>
            <TouchableOpacity>
              <Text>Feedback</Text>
            </TouchableOpacity>
          </View>
        )),
        navigationOptions: { title: 'Feedback' },
      },
    }),
    navigationOptions: {
      title: 'Feedback',
    },
  },
}
