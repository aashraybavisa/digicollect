// libraries
import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { AppContainer } from '../../Component'

// interface
interface AddPasswordScreenProps {}

// main component
const AddPasswordScreen: React.FC<AddPasswordScreenProps> = (props) => {
  return (
    <AppContainer>
      <View style={styles.mainContainer}>
        <Text>AddPasswordScreen</Text>
      </View>
    </AppContainer>
  )
}

// export
export default memo(AddPasswordScreen)

// defaultProps
AddPasswordScreen.defaultProps = {}

// styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
