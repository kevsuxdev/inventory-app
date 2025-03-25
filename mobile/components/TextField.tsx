import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { TextInputField } from '@/types/InputField'

const TextField = ({ label, onChangeText, placeholder, keyboardType, inputStyle, textClassName }: TextInputField) => {
  return (
    <View className='gap-3 w-full'>
      <Text className={`font-poppins-medium text-lg ${textClassName}`}>{label || 'Text here'}</Text>
      <TextInput
        keyboardType={keyboardType ?? 'default'}
        placeholder={placeholder}
        className={`text-field ${inputStyle}`}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default TextField
