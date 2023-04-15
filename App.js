import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainStackScreen } from './src/screens/event-list/MainStackScreen'
import { EventDetailScreen } from './src/screens/event-detail/EventDetailScreen'
import { EventDetailWebScreen } from './src/screens/event-detail-web/EventDetailWebScreen'

const EventListStack = createNativeStackNavigator()

export default function App () {
  return (
    <>
      <NavigationContainer>
        <EventListStack.Navigator screenOptions={{ headerShown: false }}>
          {/** //Pantallas con tab */}
          <EventListStack.Screen name='Main' component={MainStackScreen} />
          {/** //Pantallas sin tab */}
          <EventListStack.Screen name='EventDetail' component={EventDetailScreen} />
          <EventListStack.Screen name='EventDetailWeb' component={EventDetailWebScreen} />
        </EventListStack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  )
}
