import { Stack } from 'expo-router'

export default function DashboardLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  )
}
