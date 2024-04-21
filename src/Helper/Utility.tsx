// import Toast from 'react-native-root-toast'
// import { Platform } from 'react-native'

import _ from 'lodash'
import { Alert } from 'react-native'
import Constant from './Constant'

const deepClone = (val: Object) => {
  return JSON.parse(JSON.stringify(val))
}

const showToast = (message: string) => {
  Alert.alert(message)
  // Toast.show(message, {
  //   duration: Toast.durations.SHORT,
  //   position: Toast.positions.BOTTOM,
  //   shadow: true,
  //   animation: true,
  //   hideOnPress: true,
  //   textStyle: { fontSize: Responsive.moderateScale(15) },
  //   backgroundColor: global.Color?.blackDM1 || 'transparent',
  //   textColor: global.Color?.whiteDM1 || Color.whiteDM1
  // })
}

const isValid = (value, regEx = false) => {
  if (regEx) return !value.trim() || !regEx.test(value.trim())
  return value === null || value === undefined || !value.trim()
}

const VideoUrl = (videoData: Object) => {
  const url = videoData.video_link
  const videoId = url.match(
    /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
  )
  return videoId
}

const secondsTommss = (seconds) => {
  let minute = Math.floor(seconds / 60)
  let second = seconds % 60
  if (minute < 10) minute = `0${minute}`
  if (second < 10) second = `0${second}`
  const ans = `${minute}:${second}`
  return ans
}

interface addPasswordProps {
  username: string
  password: string
}

const addPasswordValidation = (data: addPasswordProps) => {
  const {username, password} = data
  const {usernameValidation, passwordValidation} = Constant.UI.AddPasswordScreen 
  if (_.isEmpty(username) ){
    showToast(usernameValidation)
    return false
  } else if ( _.isEmpty(password)) {
    showToast(passwordValidation)
    return false
  }
  return true
}

const Utility = {
  deepClone,
  isValid,
  showToast,
  VideoUrl,
  secondsTommss,
  addPasswordValidation
}

export default Utility
