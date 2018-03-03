import React from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'


export default ({ navigation, ...props }) => {
  console.log(props)
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FullDescription', { visible: false })}
    >
      <Text>Vacancy list</Text>
    </TouchableOpacity>
  )
}
