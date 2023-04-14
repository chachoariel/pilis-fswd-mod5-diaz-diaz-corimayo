import React from 'react'
import { ImageBackground, SafeAreaView, Text } from 'react-native'
import { styles } from './HomeScreen.styles'
// agregar imagen de fondo
export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Eventos de la Provincia de Jujuy!!!
      </Text>
    </SafeAreaView>
  )
}
