import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { images } from '@/constant/images'

const RecentActivity = () => {
  const now = Date.now()
  const formattedDate = new Date(now).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  console.log(formattedDate)
  return (
    <View
      style={{
        marginBottom: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-start',
      }}
    >
      <Image
        source={images.sampleProduct as ImageSourcePropType}
        resizeMode='cover'
        style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          shadowColor: 'black',
        }}
      />
      <View className='items-start gap-1 flex-row justify-between flex-1'>
        <Text className='font-poppins-bold'>Wireless Mouse</Text>
        <Text
          style={{
            backgroundColor: '#6978fc',
            borderRadius: 5,
            textAlign: 'center',
            fontSize: 12,
            paddingBlock: 4,
            color: 'white',
          }}
          className='font-poppins-medium text-white text-sm h-fit px-5'
        >
          Electronics
        </Text>
      </View>
    </View>
  )
}

export default RecentActivity
