import { StyleSheet } from 'react-native'

const CommonStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  }
})

export default CommonStyles
