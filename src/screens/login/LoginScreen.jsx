import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-paper'
import { styles } from './LoginScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { getUsers } from '../../api/user.service'
import { UserContext } from '../../contexts/UserContext'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLORS } from '../../utils/theme'

const UserDataRegister = async ({ username, password, userAge, userEmail }) => {
  try {
    await AsyncStorage.setItem('usernameSave', username)
    await AsyncStorage.setItem('passwordSave', password)
  } catch (error) {
    console.log(error)
  }
}

export const LoginScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  const [loader, setLoader] = useState(false)
  const [userNotFound, setUserNotFound] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const handleLogin = ({ username, password }) => {
    setLoader(true)
    getUsers()
      .then(users => {
        const user = users[0]
        if (username === user.username && password === user.password) {
          setCurrentUser({ username, password })
          UserDataRegister({ username, password })
          navigation.navigate('Home')
          setLoader(false)
        } else {
          setLoader(false)
          setUserNotFound(true)
        }
      })
      .catch(err => console.warn(err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Nombre de usuario'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='username'
        rules={{ required: 'El nombre de usuario es requerido' }}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Contraseña'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-outline' : 'eye-off-outline'}
                color='blue'
                onPress={() => setShowPassword(!showPassword)}
              />
             }
          />
        )}
        name='password'
        rules={{ required: 'La constraseña es requerida' }}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      {userNotFound && <Text style={styles.errorText}>Usuario no encontrado</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <ActivityIndicator
        size='large'
        color={COLORS.primary}
        animating={loader}
      />
    </View>
  )
}
