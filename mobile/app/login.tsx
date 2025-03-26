import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constant/images'
import { StatusBar } from 'expo-status-bar'
import { PackageOpen } from 'lucide-react-native'
import TextField from '@/components/TextField'
import PasswordField from '@/components/PasswordField'
import DefaultButton from '@/components/DefaultButton'
import Separator from '@/components/Separator'
import { Link, useRouter } from 'expo-router'
import { LoginUser } from '@/types/Form'

const LoginScreen = () => {
  const router = useRouter()
  const [loginForm, setLoginForm] = useState<LoginUser>({
    email: '',
    password: '',
  })

  const handleLogin = () => {
    router.push('/dashboard')
  }

  return (
    <SafeAreaView className='flex-1 px-5 items-center'>
      <StatusBar hidden />
      <Image
        source={images.waveImage as ImageSourcePropType}
        className='absolute'
        resizeMode='contain'
      />

      <View className='mt-72 gap-5 w-full'>
        <View className='gap-3'>
          <View className='flex-row gap-2 items-center'>
            <PackageOpen color={'#3448fb'} size={25} />
            <Text className='text-sm font-poppins-medium text-accent'>
              Inventory Management System
            </Text>
          </View>

          <Text className='text-2xl font-poppins-bold'>
            Sign In to Your Account
          </Text>
          <Text className='text-lg'>
            Keep your inventory in check and your operations running smoothly.
          </Text>
        </View>

        <View className='gap-4 w-full'>
          <TextField
            inputStyle='text-field'
            label='Email Address'
            placeholder='ex. john.doe@example.com'
            onChangeText={(value) =>
              setLoginForm({ ...loginForm, email: value })
            }
          />
          <PasswordField
            label='Password'
            placeholder='************'
            onChangeText={(value) =>
              setLoginForm({ ...loginForm, password: value })
            }
          />
          <DefaultButton title='Login' onPress={handleLogin}/>
        </View>
        <Separator />
        <Text className='font-poppins-medium text-center'>
          Don't have an account yet?{' '}
          <Link href={'/register'} className='text-accent underline'>
            Register here.
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
