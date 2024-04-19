// libraries
import { Platform, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
// components
import { Color, Responsive } from '../Helper'

// interface
interface AppTextInputProps {
    value: TextInputProps['value']
    onChangeText: TextInputProps['onChangeText']
    placeholder: TextInputProps['placeholder']
    title: string,
    isBigText?: boolean
}

// main component
const AppTextInput: React.FC<AppTextInputProps> = (props) => {
  const { value, onChangeText, placeholder, title, isBigText } = props

  return (
    <View style={styles.mainView}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={[styles.inputView, isBigText && styles.multiInputView]}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={Color.tPinkL3}
          onChangeText={onChangeText}
          autoCapitalize={'none'}
          multiline={isBigText}
          textAlignVertical={'top'}
        />
      </View>
    </View>
  )
}

export default AppTextInput

// defaultProps
AppTextInput.defaultProps = {
    value: '',
    onChangeText: () => console.log('onChangeText'),
    placeholder: '',
    title: '',
    isBigText: false
}

const styles = StyleSheet.create({
  mainView:{
    width: '85%',
    marginVertical: Responsive.verticalScale(10),
  },
  inputView: {
    width: '100%',
    height: Responsive.verticalScale(45),
    borderRadius: 20,
    backgroundColor: Color.white,
    alignItems: 'center',
  },
  multiInputView:{
    height: Responsive.verticalScale(100),
  },
  textInput: {
    width: '90%',
    height: '100%',
    fontSize: Responsive.font(5),
    fontWeight: '600',
    color: Color.themePink,
    overflow: 'hidden',
    backgroundColor: Color.white,
    marginTop: Platform.select({ ios: Responsive.verticalScale(10), android: 0 })
  },
  titleView: {
    fontSize: Responsive.font(4),
    fontWeight: '700',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: Responsive.verticalScale(20),
  },
  titleText: {
    fontWeight: '700',
    fontSize: Responsive.font(4.5),
    color: Color.themePink,
    textAlign: 'center'
  }
})
