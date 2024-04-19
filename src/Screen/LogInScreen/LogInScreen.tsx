import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Switch,
  Pressable
} from 'react-native'
import React, { memo, useState } from 'react'
import { AppContainer } from '../../Component'
import { Color, Responsive, Screen } from '../../Helper'

interface LogInScreenProps {
}

const staticValues = {
  emailPlaceHolder: 'Email',
  passwordPlaceholder: 'Password'
}

const LogInScreen = (props: LogInScreenProps) => {
  console.log('props LogInScreen', props)
  const { navigation } = props

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [stayLoggedIn, setstayLoggedIn] = useState(false)

  const onChangeEmailText = (newEmail: string) => {
    setemail(newEmail)
  }

  const renderEmail = () => {
    return (
      <View style={styles.emailInputView}>
        <TextInput
          style={styles.emailTextInput}
          value={email}
          placeholder={staticValues.emailPlaceHolder}
          placeholderTextColor={Color.tPinkL3}
          onChangeText={onChangeEmailText}
          autoCapitalize={'none'}
        />
      </View>
    )
  }

  const onChangePasswordText = (newPassword: string) => {
    setpassword(newPassword)
  }

  const renderPassword = () => {
    return (
      <View style={styles.emailInputView}>
        <TextInput
          style={styles.emailTextInput}
          value={password}
          placeholder={staticValues.passwordPlaceholder}
          placeholderTextColor={Color.tPinkL3}
          onChangeText={onChangePasswordText}
          autoCapitalize={'none'}
        />
      </View>
    )
  }

  const toggleStayLoggedIn = () => {
    setstayLoggedIn((v) => !v)
  }

  const onPressForgetPassword = () => {
    ///
  }

  const renderOtherRow = () => {
    return (
      <View style={styles.otherView}>
        <Pressable style={styles.stayLogInView} onPress={toggleStayLoggedIn}>
          <Switch
            value={stayLoggedIn}
            style={styles.stayLogInSwitch}
            onValueChange={toggleStayLoggedIn}
          />
          <Text style={styles.staySignInText}>{'Stay Logged In'}</Text>
        </Pressable>
        <Text style={styles.forgetPasswordText} onPress={onPressForgetPassword}>
          {'Forgot Password?'}
        </Text>
      </View>
    )
  }

  const onPressLogIn = () => {
    ///
  }

  const renderLogInButton = () => {
    return (
      <TouchableOpacity style={styles.logInTouch} onPress={onPressLogIn}>
        <Text style={styles.logInText}>{'Log In'}</Text>
      </TouchableOpacity>
    )
  }

  const onPressSignUp = () => {
    navigation.navigate(Screen.RegistrationScreen)
  }

  const renderSignUp = () => {
    return (
      <Text style={styles.bottomText}>
        {'Need an account? '}
        <Text style={styles.signUpText} onPress={onPressSignUp}>
          {'Sign Up'}
        </Text>
      </Text>
    )
  }

  return (
    <AppContainer
      containerStyle={styles.containerStyle}
      backgroundColor={Color.themeBlue}
      bottomColor={Color.themeBlue}
    >
      <View style={styles.mainContainer}>
        {renderEmail()}
        {renderPassword()}
        {renderOtherRow()}
        {renderLogInButton()}
        {renderSignUp()}
      </View>
    </AppContainer>
  )
}

export default memo(LogInScreen)

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Color.themeBlue
  },
  mainContainer: {
    width: Responsive.widthPx(96),
    marginTop: Responsive.verticalScale(15),
    alignSelf: 'center',
    alignItems: 'center'
  },
  emailInputView: {
    width: '85%',
    height: Responsive.verticalScale(45),
    borderRadius: 20,
    backgroundColor: Color.white,
    marginTop: Responsive.verticalScale(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  emailTextInput: {
    width: '90%',
    height: '100%',
    textAlign: 'center',
    fontSize: Responsive.moderateScale(19),
    fontWeight: '600',
    color: Color.themePink,
    overflow: 'hidden'
  },
  otherView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: '10%',
    flexDirection: 'row',
    marginTop: Responsive.verticalScale(15)
  },
  forgetPasswordText: {
    fontSize: Responsive.moderateScale(15),
    color: Color.themePink
  },
  logInTouch: {
    marginTop: Responsive.verticalScale(20),
    width: '60%',
    paddingVertical: Responsive.verticalScale(10),
    backgroundColor: Color.themePink,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logInText: {
    fontSize: Responsive.moderateScale(18),
    color: Color.themeBlue,
    textAlign: 'center',
    fontWeight: '600'
  },
  stayLogInView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  stayLogInSwitch: {
    marginRight: Responsive.scale(6)
  },
  staySignInText: {
    fontSize: Responsive.moderateScale(15),
    color: Color.white,
    textAlign: 'center'
  },
  bottomText: {
    marginTop: Responsive.verticalScale(16),
    fontSize: Responsive.moderateScale(16),
    color: Color.white
  },
  signUpText: {
    color: Color.themePink,
    fontWeight: '600'
  }
})
