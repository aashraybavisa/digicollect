// libraries
import { Pressable, PressableProps, StyleSheet, Text, TextProps, View } from 'react-native'
import React from 'react'
// components
import { Color, Responsive } from '../Helper'

// interface
interface AppButtonProps {
  onPress: PressableProps['onPress'];
  text: TextProps['children'];
}

// main component
const AppButton: React.FC<AppButtonProps> = (props) => {
  const { onPress, text } = props
  return (
    <Pressable style={styles.touch} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

// export
export default AppButton

// defaultProps
AppButton.defaultProps = {
  onPress: () => console.log('onPress'),
  text: 'Button'
}

// styles
const styles = StyleSheet.create({
  touch: {
    marginTop: Responsive.verticalScale(20),
    width: '60%',
    paddingVertical: Responsive.verticalScale(10),
    backgroundColor: Color.themePink,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: Responsive.font(5.5),
    color: Color.themeBlue,
    textAlign: 'center',
    fontWeight: '600'
  }
})
