import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { inject } from 'mobx-react/native'
import { StackNavigator } from 'react-navigation'

export default {
  VacancyFlow: {
    screen: StackNavigator({
      VacancyList: {
        screen: inject('nav')(({ nav }) => (
          <View>
            <TouchableOpacity onPress={() => nav.navigate('Vacancy', { visible: false }) }>
              <Text>VcancyList</Text>
            </TouchableOpacity>
          </View>
        )),
        navigationOptions: { title: 'VcancyList' },
      },
      Vacancy: {
        screen: inject('nav')(({ nav }) => (
          <View>
            <TouchableOpacity>
              <Text>Vacancy</Text>
            </TouchableOpacity>
          </View>
        )),
        navigationOptions: { title: 'Vacancy' },
      },
    }),
    navigationOptions: {
      title: 'vacancy',
    },
  },
}
