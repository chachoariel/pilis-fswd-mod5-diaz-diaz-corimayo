import React, { useContext } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { styles } from './UserinfoScreen.styles'
import { UserContext } from '../../contexts/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonEvent } from '../../components'

const clearDataUser = async () => {
  try {
    const keys = ['usernameSave', 'passwordSave', 'userAge', 'userEmail']
    await AsyncStorage.multiRemove(keys)
  } catch (error) {
  }
}

export const UserInfoScreen = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const handleLogout = () => {
    setCurrentUser(null)
    clearDataUser()
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require('../../../assets/images/user.png')}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{currentUser.username}</Text>
          <Text style={styles.profileLocation}>Jujuy, Argentina</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          tellus eu nisi tincidunt ultrices. Morbi id dictum ipsum.
        </Text>
        <Text style={styles.sectionTitle}>Interests</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          tellus eu nisi tincidunt ultrices. Morbi id dictum ipsum.
        </Text>
      </View>
      <View>
        <ButtonEvent
          text='Cerrar Sesión'
          onPress={handleLogout}
        />
      </View>
    </ScrollView>
  )
}
