import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { PasswordInputField } from '@/types/InputField'
import { Eye, EyeClosed } from 'lucide-react-native'

const PasswordField = ({
  label,
  onChangeText,
  placeholder,
  keyboardType,
  inputStyle,
}: PasswordInputField) => {
  const [showPassword, setShowPassword] = useState<boolean>(true)
  return (
    <View className='gap-3 relative w-full'>
      <Text className='font-poppins-medium text-lg'>
        {label || 'Text here'}
      </Text>
      <TouchableOpacity
        style={{ position: 'absolute', right: '5%', top: '58%', zIndex: 1 }}
        onPress={() => setShowPassword(!showPassword)}
      >
        {!showPassword ? (
          <Eye color={'black'} size={20} />
        ) : (
          <EyeClosed color={'black'} size={20} />
        )}
      </TouchableOpacity>

      <TextInput
        secureTextEntry={showPassword}
        keyboardType={keyboardType ?? 'default'}
        placeholder={placeholder}
        className={`text-field ${inputStyle}`}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default PasswordField
