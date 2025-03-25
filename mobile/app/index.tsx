import { images } from '@/constant/images'
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Blocks } from 'lucide-react-native'
import { useRouter } from 'expo-router'
import DefaultButton from '@/components/DefaultButton'

export default function Index() {
  const router = useRouter()
  return (
    <SafeAreaView className='items-center justify-center flex-1 px-10'>
      <StatusBar hidden />
      <View className='gap-8 items-center justify-center w-full '>
        <View className='items-center justify-center gap-2'>
          <View className='flex-row items-center gap-2'>
            <Blocks color={'#3448fb'} size={18} />
            <Text className='text-sm font-semibold tracking-wide text-accent'>The Best choice for your Inventory!</Text>
          </View>
          <Text className='text-2xl font-black tracking-wide'>Inventory Management System</Text>
        </View>
        <Image
          className='w-96 h-96'
          source={images.gettingStartedImage as ImageSourcePropType}
          resizeMode='contain'
        />
        <View className='w-full gap-4'>
          <Text className='text-[14px] font-poppins-medium -tracking-wide text-center leading-7'>Stay on top of your stock levels, track transactions effortlessly, and keep your business running smoothly.</Text>
          <DefaultButton onPress={() => router.push('/login')} title='Start Organizing'/>
        </View>
      </View>
    </SafeAreaView>
  )
}
