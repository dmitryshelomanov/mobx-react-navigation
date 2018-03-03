import React from 'react'
import {
  Text,
} from 'react-native'


export default ({ navigation }) => {
  setTimeout(() => navigation.navigate('Report'), 500)
  return  (
    <Text>Vacancy full descriptions</Text>
  ) 
} 
