import { Text, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { LoginScreen } from '../login/LoginScreen'
import { FormUserRegistration } from '../signUp/UserRegister'
import { styles } from './verificationUser.styles'

export const VerificationUser = () => {
  const [registered, setRegistered] = useState(true);
  const onSubmit = () => {
    setRegistered(!registered)
    console.log(registered)
  }
  return (
    <View style={styles.container}>
      {!registered &&
        <View>
          <FormUserRegistration />
          <View style={styles.state}><Text>Ya tiene cuenta?      </Text><TouchableOpacity onPress={onSubmit}><Text style={styles.relevant}>Logearse</Text></TouchableOpacity></View>
        </View>}
      {registered &&
        <View>
          <LoginScreen />
          <View style={styles.state}><Text>Es usuario nuevo?     </Text><TouchableOpacity onPress={onSubmit}><Text style={styles.relevant}>Registrarse</Text></TouchableOpacity></View>
        </View>}
    </View>
  )
}
