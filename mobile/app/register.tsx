import { View, Text, Image, StatusBar, ImageSourcePropType, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constant/images'
import { PackageOpen } from 'lucide-react-native'
import TextField from '@/components/TextField'
import PasswordField from '@/components/PasswordField'
import DefaultButton from '@/components/DefaultButton'
import Separator from '@/components/Separator'
import { Link } from 'expo-router'

const RegisterScreen = () => {
  return (
    <SafeAreaView className=' px-5 items-center w-full pb-5'>
      <StatusBar hidden />
      <Image
        source={images.waveImage as ImageSourcePropType}
        className='absolute'
        resizeMode='contain'
      />

      <ScrollView>
        <View className='mt-64 gap-5'>
          <View className='gap-3'>
            <View className='flex-row gap-2 items-center'>
              <PackageOpen color={'#3448fb'} size={25} />
              <Text className='text-sm font-poppins-medium text-accent'>Inventory Management System</Text>
            </View>
            <Text className='text-2xl font-poppins-bold'>Create Your Account</Text>
            <Text className='text-lg'>Get started by setting up your account and managing your inventory effortlessly</Text>
          </View>

          <View className='flex-row max-w-[48.5%] justify-between gap-3'>
            <TextField label='First Name' placeholder='ex. John' onChangeText={(value) => console.log(value)}/>
            <TextField label='Last Name' placeholder='ex. Doe' onChangeText={(value) => console.log(value)}/>
          </View>

          <View className='gap-5'>
            <TextField label='Email Address' placeholder='ex. johndoe@example.com' onChangeText={(value) => console.log(value)}/>
            <PasswordField label='Create Password'  placeholder='*******************************' onChangeText={(value) => console.log(value)}/>
            <PasswordField label='Confirm Password'  placeholder='*******************************' onChangeText={(value) => console.log(value)}/>
          </View>

          <View>
            <DefaultButton title='Create account'/>
          </View>
          <Separator/>
          <Text className='font-poppins-medium text-center'>Already have an account? <Link href={'/login'} className='text-accent underline'>Sign in here.</Link></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen
