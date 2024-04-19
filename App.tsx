import { View, Text } from 'react-native'
import React from 'react'
import { CommonStyles } from './src/Helper'
import Route from './src/Router/Route'

const App = () => {
  return (
    <View style={CommonStyles.flex}>
      <Route isLogin={false} />
    </View>
  )
}

export default App
