import { View, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { Screen } from '../../Helper'

const RegistrationScreen = (props) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}
      onPress={() => props.navigation.navigate(Screen.LogInScreen)}
    >
      <Text>RegistrationScreen</Text>
    </TouchableOpacity>
  )
}

export default memo(RegistrationScreen)
