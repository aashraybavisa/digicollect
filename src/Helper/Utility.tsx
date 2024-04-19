// import Toast from 'react-native-root-toast'
// import { Platform } from 'react-native'

import { Alert } from 'react-native'

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

const Utility = {
  deepClone,
  isValid,
  showToast,
  VideoUrl,
  secondsTommss
}

export default Utility
