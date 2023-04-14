import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainStackScreen } from './src/screens/event-list/MainStackScreen'
import { EventDetailScreen } from './src/screens/event-detail/EventDetailScreen'

const EventListStack = createNativeStackNavigator()

export default function App () {
  return (
    <>
      <NavigationContainer>
        <EventListStack.Navigator screenOptions={{ headerShown: false }}>
          {/** //Pantallas con tab */}
          <EventListStack.Screen name='Main' component={MainStackScreen} />
          {/** //Pantallas sin tab */}
          <EventListStack.Screen name='LocationDetail' component={EventDetailScreen} />
        </EventListStack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  )
}
