import React from 'react'
import { ImageBackground, SafeAreaView, Text } from 'react-native'
import { styles } from './HomeScreen.styles'
// agregar imagen de fondo
export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../assets/images/main.jpg')}>
        <Text style={styles.title}>
          Eventos de Jujuy!!!
        </Text>
      </ImageBackground>
    </SafeAreaView>
  )
}
