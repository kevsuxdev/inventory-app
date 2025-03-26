import {
  View,
  Text,
  Image,
  StatusBar,
  ImageSourcePropType,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constant/images'
import { PackageOpen } from 'lucide-react-native'
import TextField from '@/components/TextField'
import PasswordField from '@/components/PasswordField'
import DefaultButton from '@/components/DefaultButton'
import Separator from '@/components/Separator'
import { Link } from 'expo-router'
import { RegisterUser } from '@/types/Form'
import { isEmail } from '@/lib/isValidEmail'

const RegisterScreen = () => {
  const [registrationForm, setRegistrationForm] = useState<RegisterUser>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleRegistrationForm = () => {
    const { firstName, lastName, email, password, confirmPassword } = registrationForm

    if (firstName.trim() === '') return console.log(`Please enter your first name.`)
    if (lastName.trim() === '') return console.log(`Please enter your last name.`)

    if (email.trim() === '') return console.log(`Please enter your email address.`)
    if (!isEmail(email)) return console.log(`Please enter a valid email address.`)

    if (password.trim() === '') return console.log(`Please enter your password.`)
    if (confirmPassword.trim() === '') return console.log(`Please enter your confirm password.`)
    if(password !== confirmPassword) return console.log(`Password do not match.`)


  }
  return (
    <SafeAreaView className='px-5 items-center w-full pb-5'>
      <StatusBar hidden />
      <Image
        source={images.waveImage as ImageSourcePropType}
        className='absolute'
        resizeMode='contain'
      />

      <ScrollView>
        <View className='mt-48 gap-5'>
          <View className='gap-3'>
            <View className='flex-row gap-2 items-center'>
              <PackageOpen color={'#3448fb'} size={25} />
              <Text className='text-sm font-poppins-medium text-accent'>
                Inventory Management System
              </Text>
            </View>
            <Text className='text-2xl font-poppins-bold'>
              Create Your Account
            </Text>
            <Text className='text-lg'>
              Get started by setting up your account and managing your inventory
              effortlessly
            </Text>
          </View>

          <View className='flex-row max-w-[48.5%] justify-between gap-3'>
            <TextField
              label='First Name'
              placeholder='ex. John'
              onChangeText={(value) => setRegistrationForm({...registrationForm, firstName: value })}
            />
            <TextField
              label='Last Name'
              placeholder='ex. Doe'
              onChangeText={(value) => setRegistrationForm({...registrationForm, lastName: value })}
            />
          </View>

          <View className='gap-5'>
            <TextField
              label='Email Address'
              placeholder='ex. johndoe@example.com'
              onChangeText={(value) => setRegistrationForm({...registrationForm, email: value })}
            />
            <PasswordField
              label='Create Password'
              placeholder='*************'
              onChangeText={(value) => setRegistrationForm({...registrationForm, password: value })}
            />
            <PasswordField
              label='Confirm Password'
              placeholder='*************'
              onChangeText={(value) => setRegistrationForm({...registrationForm, confirmPassword: value })}
            />
          </View>

          <View>
            <DefaultButton title='Create account' onPress={handleRegistrationForm}/>
          </View>
          <Separator />
          <Text className='font-poppins-medium text-center'>
            Already have an account?{' '}
            <Link href={'/login'} className='text-accent underline'>
              Sign in here.
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen
