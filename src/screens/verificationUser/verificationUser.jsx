import React, { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { LoginScreen } from '../login/LoginScreen'
import { FormUserRegistration } from '../signUp/UserRegister'
import { styles } from './verificationUser.styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { getUsers } from '../../api/user.service';

export const VerificationUser = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  useEffect(() => {
    const dataLocalUser = async () => {
      try {
        const [username, password] = await AsyncStorage.multiGet(['usernameSave', 'passwordSave']);
        console.log('Username:', username, 'Password:', password);
        //comprobar si existe el usuario que esta guardado en local y no salio
        //devuelve este usuario
        if (username[1] !== null || password[1] !== null){
        //envia informacion y hace otra comprobacion para accesder al perfil
        getUsers()
            .then(users => {
                const user = users[0]
                console.log(user)
                //--------------------------
                setCurrentUser({username:username[1], password:password[1]})
          })
        }
      } catch (error) {
        console.log(error);
      }
    };
    dataLocalUser();
  }, []);
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
