// libraries
import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
// imports
import { AppContainer } from '../../Component'

// interface
interface PasswordListScreenProps {
  navigation: any;
}

// main component
const PasswordListScreen: React.FC<PasswordListScreenProps> = (props) => {
  return (
    <AppContainer>
      <View style={styles.mainContainer}>
        <Text>PasswordListScreen</Text>
      </View>
    </AppContainer>
  )
}

// export
export default memo(PasswordListScreen)

// defaultProps
PasswordListScreen.defaultProps = {}

// styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
