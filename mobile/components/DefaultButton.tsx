import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Href, useRouter } from 'expo-router'
import { CallToAction } from '@/types/Button'

const DefaultButton = ({ title, onPress, buttonClassName, textClassName }: CallToAction) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`default-button ${buttonClassName}`}
    >
      <Text className={`default-button-text ${textClassName}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default DefaultButton
