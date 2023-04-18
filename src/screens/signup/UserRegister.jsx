import React, { useContext } from 'react'
import { Text, View, } from 'react-native'
import { useForm, Controller} from "react-hook-form";
import { TouchableOpacity,TextInput,SafeAreaView  } from 'react-native';
import { styles } from './userRegister.styles'
/*import { useNavigation } from '@react-navigation/native'*/
import { UserContext } from '../../contexts/UserContext'
import { getUsers } from '../../api/user.service';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const UserDataRegister = async ({userName, userPassword}) => {
  try {
    await AsyncStorage.setItem('usernameSave', userName);
    await AsyncStorage.setItem('passwordSave', userPassword);
  } catch (error) {
    console.log(error);
  }
}

export const FormUserRegistration = ()=>{
const { setCurrentUser } = useContext(UserContext)
const { currentUser } = useContext(UserContext)
/*const navigation = useNavigation()*/
const { control, handleSubmit, formState: { errors }} = useForm({
  defaultValues: {
      userName: '',
      userPassword: '',
      userAge: '',
      userEmail:'',
    }
});

const [userExists, setUserExists] = useState(false);

/* const onLogin = () => { navigation.navigate('Login') } */

const onSubmit = ({userName,userPassword}) => {
  getUsers()
    .then(users=>{
      //comprobar si existe un usuario
      
      const user = users[0]
      
      console.log(user)
      //--------------------------
      if (userName !== user.username || userPassword !== user.password )
      {
        
        setCurrentUser({userName, userPassword})
        console.log(currentUser)
        UserDataRegister({userName, userPassword})
        console.log(user.username)
      }else{
        setUserExists(true);
      }
    })
}

return (
<SafeAreaView style={styles.container}>
    {userExists&&<Text>El usuario ya existe</Text>}
    <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Nombre de Usuario"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="userName"
    />
    {errors.userName && <Text>Usuario invalido</Text>}



    <Controller

        control={control}
            rules={{
             required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
    secureTextEntry={true}
    autoCapitalize="none"
    placeholder="Contraseña"
    onBlur={onBlur}
    onChangeText={onChange}
    value={value}
  />
)}            
        name="userPassword"
    />
    {errors.userPassword && <Text>Contraseña invalida</Text>}


    <Controller
    control={control}
    rules={{
     required: true,
    }}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        keyboardType="numeric"
        placeholder="Edad"
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
    )}
        name="userAge"
    />
    {errors.userAge && <Text>Edad incorrercta</Text>}


    <Controller
    control={control}
    rules={{
     required: true,
    }}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        placeholder="Email"
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
    )}
        name="userEmail"
    />
    {errors.userEmail && <Text>Email vacio o no existe</Text>}
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text>
          Registrar
        </Text>
      </TouchableOpacity>
    <TouchableOpacity >
      <Text>
        Logearse
      </Text>
    </TouchableOpacity>

</SafeAreaView>

)
}
