import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Bell, Settings } from 'lucide-react-native'
import { inventoryData } from '@/constant/data'
import RecentActivity from '@/components/RecentActivity'

const Dashboard = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-start p-5  mt-3'>
      <View className='w-full'>
        <View className='w-full p-3 items-center justify-end flex-row gap-x-2'>
          <Bell color={'#3448fb'} size={22} />
          <Settings color={'#3448fb'} size={22} />
        </View>
        <View>
          <Text className='text-2xl font-poppins-semibold mb-3'>
            Recent Activities
          </Text>
          <FlatList
            renderItem={({ item }) => {
              const { id, user, action, details } = item
              return <RecentActivity />
            }}
            keyExtractor={(item) => item.id}
            data={inventoryData}
            nestedScrollEnabled={true}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard
