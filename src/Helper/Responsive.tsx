import { Dimensions, StatusBar, Platform } from 'react-native'

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window')

let isIPhoneX = false

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX =
    W_HEIGHT === 780 ||
    W_WIDTH === 780 ||
    W_HEIGHT === 812 ||
    W_WIDTH === 812 ||
    W_HEIGHT === 844 ||
    W_WIDTH === 844 ||
    W_HEIGHT === 896 ||
    W_WIDTH === 896 ||
    W_HEIGHT === 926 ||
    W_WIDTH === 926
}

let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height

const { height } = Dimensions.get('screen')

const widthPx = (widthPercent: Number) => {
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent)
  return (screenWidth * elemWidth) / 100
}

const heightPx = (heightPercent: Number) => {
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent)
  return ((screenHeight - getStatusBarHeight().toFixed(0)) * elemHeight) / 100
}

const font = (font: Number) => {
  const fontSize = typeof font === 'number' ? font : parseFloat(font)
  return (screenWidth * fontSize) / 100
}

const getStatusBarHeight = () => {
  return Platform.select({
    ios: isIPhoneX ? 78 : 20,
    android: StatusBar.currentHeight > 24 ? 0 : StatusBar.currentHeight,
    default: 0
  })
}

const listenOrientationChange = (that) => {
  Dimensions.addEventListener('change', (newDimensions) => {
    screenWidth = newDimensions.window.width
    screenHeight = newDimensions.window.height
    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape'
    })
  })
}

const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {})
}

const isIPhoneXSeries = () => {
  return Platform.OS === 'android' ? 0 : isIPhoneX ? 34 : 0
}

const fullHeight = (heightPercent: Number) => {
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent)
  return (height * elemHeight) / 100
}

const isAndroidNouch = Platform.OS === 'android' ? StatusBar.currentHeight > 24 : false

// ///////////////////////////////////////////////

const [shortDimension, longDimension] =
  W_WIDTH < W_HEIGHT ? [W_WIDTH, W_HEIGHT] : [W_HEIGHT, W_WIDTH]

// guideline size
const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

const scale = (size: Number) => (shortDimension / guidelineBaseWidth) * size
const verticalScale = (size: Number) => (longDimension / guidelineBaseHeight) * size
const moderateScale = (size: Number, factor = 0.5) => size + (scale(size) - size) * factor

const Responsive = {
  widthPx,
  heightPx,
  isIPhoneXSeries,
  isIPhoneX,
  font,
  isAndroidNouch,
  getStatusBarHeight,
  listenOrientationChange,
  removeOrientationListener,
  fullHeight,
  scale,
  verticalScale,
  moderateScale
}
export default Responsive