import React, { ReactElement } from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ColorValue,
  StatusBarStyle,
  ViewStyle,
  StyleProp
} from 'react-native'
import { Color } from '../Helper'

interface AppContainerProps {
  barStyle?: null | StatusBarStyle | undefined;
  backgroundColor?: ColorValue;
  isTopSafeArea?: Boolean;
  isBottomSafeArea?: Boolean;
  bottomColor?: ColorValue;
  children: ReactElement;
  containerStyle?: StyleProp<ViewStyle> | undefined;
}

const AppContainer = (props: AppContainerProps) => {
  const {
    children,
    barStyle,
    backgroundColor,
    isTopSafeArea,
    isBottomSafeArea,
    bottomColor,
    containerStyle
  } = props
  const TopComponent = isTopSafeArea ? SafeAreaView : View
  const BottomComponent = isBottomSafeArea ? SafeAreaView : View
  return (
    <View style={styles.container}>
      <TopComponent style={{ backgroundColor }} />
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      <View style={[styles.mainContainer, containerStyle]}>{children}</View>
      <BottomComponent style={{ backgroundColor: bottomColor }} />
    </View>
  )
}

export default AppContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white
  }
})

AppContainer.defaultProps = {
  barStyle: 'dark-content',
  backgroundColor: Color.white,
  bottomColor: 'transparent',
  isTopSafeArea: true,
  isBottomSafeArea: true
}
