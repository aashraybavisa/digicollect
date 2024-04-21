// libraries
import { StyleSheet, View } from 'react-native'
import React, { memo, useState } from 'react'
// components
import { AppButton, AppContainer, AppHeader, AppTextInput } from '../../Component'
import { Color, CommonStyles, Constant, Utility } from '../../Helper'

// interface
interface AddPasswordScreenProps {
  navigation: any;
}

// main component
const AddPasswordScreen: React.FC<AddPasswordScreenProps> = (props) => {
  // props
  const { navigation } = props

  // states
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [url, setUrl] = useState('')
  const [detail, setDetail] = useState('')

  // extracts
  const {
    headerText,
    usernamePlaceholder,
    usernameTitle,
    passwordPlaceholder,
    passwordTitle,
    urlPlaceholder,
    urlTitle,
    detailPlaceholder,
    detailTitle,
    addButtonTitle
  } = Constant.UI.AddPasswordScreen

  // callbacks
  const onChangeUsername = (newUsername: string) => setUsername(newUsername)

  const onChangePassword = (newPassword: string) => setPassword(newPassword)

  const onChangeUrl = (newUrl: string) => setUrl(newUrl)

  const onChangeDetail = (newDetail: string) => setDetail(newDetail)

  const onPressBackButton = () => navigation?.goBack()

  const onAddPassword = () => {
    console.log('onAddPassword')
    const isValid = Utility.addPasswordValidation({ username, password })
    if (isValid) {
      // save new entry

      // redirect to password list screen
      navigation?.goBack()
    }
  }

  // render
  const renderUsernameInput = () => (
    <AppTextInput
      value={username}
      placeholder={usernamePlaceholder}
      onChangeText={onChangeUsername}
      title={usernameTitle}
    />
  )

  const renderPasswordInput = () => (
    <AppTextInput
      value={password}
      placeholder={passwordPlaceholder}
      onChangeText={onChangePassword}
      title={passwordTitle}
    />
  )

  const renderURLInput = () => (
    <AppTextInput
      value={url}
      placeholder={urlPlaceholder}
      onChangeText={onChangeUrl}
      title={urlTitle}
    />
  )

  const renderDetailInput = () => (
    <AppTextInput
      value={detail}
      placeholder={detailPlaceholder}
      onChangeText={onChangeDetail}
      title={detailTitle}
      isBigText
    />
  )

  const renderAddButton = () => <AppButton text={addButtonTitle} onPress={onAddPassword} />

  return (
    <AppContainer
      containerStyle={styles.containerStyle}
      backgroundColor={Color.themeBlue}
      bottomColor={Color.themeBlue}
    >
      <View style={CommonStyles.flex}>
        <AppHeader titleText={headerText} isBackButton onPressBack={onPressBackButton} />
        <View style={styles.mainContainer}>
          {renderUsernameInput()}
          {renderPasswordInput()}
          {renderURLInput()}
          {renderDetailInput()}
          {renderAddButton()}
        </View>
      </View>
    </AppContainer>
  )
}

// export
export default memo(AddPasswordScreen)

// defaultProps
AddPasswordScreen.defaultProps = {
  navigation: {}
}

// styles
const styles = StyleSheet.create({
  containerStyle: { backgroundColor: Color.themeBlue },
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  }
})
