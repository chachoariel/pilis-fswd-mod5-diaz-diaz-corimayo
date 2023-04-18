import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SPACING } from '../../utils/theme'
import { HomeScreen } from '../home/HomeScreen'
import { FormUserRegistration } from '../signup/UserRegister'
import { EventListScreen } from './EventListScreen'
import { LoginUser } from '../login/LoginScreen'
const Tab = createBottomTabNavigator()
const TAB_ICON = {
  Home: 'home',
  Profile: 'person',
  Search: 'search'
}

const screenOptions = ({ route }) => {
  const inconName = TAB_ICON[route.name]// TAB_ICON[Home]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={inconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}
export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='Home' options={{ title: 'Inicio' }} component={HomeScreen} />
      <Tab.Screen name='Search' options={{ title: 'Explorar' }} component={EventListScreen} />
      <Tab.Screen name='Reg' options={{ title: 'Perfil' }} component={FormUserRegistration} />
      <Tab.Screen name='Login' option={{title: 'Login'}} component={LoginUser}/>
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
})
