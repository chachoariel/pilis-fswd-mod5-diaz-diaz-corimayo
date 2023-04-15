import React from 'react'
import { Text, View, } from 'react-native'
import { useForm, Controller} from "react-hook-form";
import { Button,TextInput,SafeAreaView  } from 'react-native';
import { styles } from './userRegister.styles'


export const FormUserRegistration = ()=>{


const { control, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
    }
});
const onSubmit = data => console.log(data);

return (
<View>

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
    {errors.userEmail && <Text>Email nulo o no existe</Text>}

    <Button title="Submit" onPress={handleSubmit(onSubmit)} />

</View>

)
}
