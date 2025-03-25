import { SplashScreen, Stack } from 'expo-router'
import './global.css'
import { SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync()
    return null
  }

  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: '#fff' }, headerShown: false }}>
      <Stack.Screen name='index'  />
      <Stack.Screen name='login'  />
      <Stack.Screen name='register'  />
    </Stack>
  )
}
