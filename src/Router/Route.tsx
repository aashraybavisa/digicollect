import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { memo } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Color, Screen } from '../Helper'
import { AddPasswordScreen, HomeScreen, LogInScreen, RegistrationScreen } from '../Screen'

interface RouteProps {
  isLogin: Boolean;
}

const Stack = createNativeStackNavigator()

const Route = (props: RouteProps) => {
  const { isLogin } = props

  const statusBarBackgroundColor = Color.themeLightBlue
  const statusBarStyle = 'dark-content'

  const RenderAuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screen.LogInScreen} component={LogInScreen} />
        <Stack.Screen name={Screen.RegistrationScreen} component={RegistrationScreen} />
      </Stack.Navigator>
    )
  }

  const MainStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screen.AddPasswordScreen} component={AddPasswordScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarBackgroundColor} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={isLogin ? Screen.MainStack : Screen.AuthStack}
        >
          {/* <Stack.Screen name={Screen.AuthStack} component={RenderAuthStack} /> */}
          <Stack.Screen name={Screen.MainStack} component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default memo(Route)
