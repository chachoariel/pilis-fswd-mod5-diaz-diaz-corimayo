import React, { useContext } from 'react'
import { Text, TouchableOpacity, TextInput, SafeAreaView, View } from 'react-native';
import { styles } from './userRegister.style'
import { UserContext } from '../../contexts/UserContext'
import { useForm, Controller } from "react-hook-form";
import { getUsers } from '../../api/user.service';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const UserDataRegister = async ({ username, password, userAge, userEmail }) => {
    try {
        await AsyncStorage.setItem('usernameSave', username);
        await AsyncStorage.setItem('passwordSave', password);
        await AsyncStorage.setItem('userAge', userAge);
        await AsyncStorage.setItem('userEmail', userEmail);
    } catch (error) {
        console.log(error);
    }
}


export const FormUserRegistration = () => {
    const { setCurrentUser } = useContext(UserContext)
    /*const navigation = useNavigation()*/
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: '',
            userAge: '',
            userEmail: '',
        }
    });

    const [userExists, setUserExists] = useState(false);

    /* const onLogin = () => { navigation.navigate('Login') } */

    const onSubmit = ({ username, password, userAge, userEmail }) => {
        getUsers()
            .then(users => {
                //comprobar si existe un usuario

                const user = users[0]

                console.log(user)
                //--------------------------
                if (username !== user.username || password !== user.password) {

                    setCurrentUser({ username, password })
                    console.log("no valido")
                    console.log({ username, password })
                    UserDataRegister({ username, password, userAge, userEmail })
                    console.log(user.username)
                } else {
                    setUserExists(true);
                }
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de usuario</Text>
            {userExists && <Text>El usuario ya existe</Text>}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre de Usuario"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="username"
            />
            {errors.username && <Text>Usuario invalido</Text>}



            <Controller

                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholder="Contraseña"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
            />
            {errors.password && <Text>Contraseña invalida</Text>}


            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
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
                        style={styles.input}
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="userEmail"
            />
            {errors.userEmail && <Text>Email vacio o no existe</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>
                    Registrar
                </Text>
            </TouchableOpacity>
        </View>

    )
}