import React from 'react'
import { Text, TextInput, View, Button, StyleSheet } from 'react-native'
import AndroidLink from '../components/AndroidLink'
import useForm from '../hooks/useForm'

export default ({ navigation }) => {
    const initialState = {
        email: '',
        password: ''
    }
    const onSubmit = values => {
        console.log(values)
    }
    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)

    const goToRegister = () => navigation.navigate('Register')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <TextInput
                autoCapitalize='none'
                value={inputs.email}
                onChangeText={subscribe('email')}
                style={styles.input} 
                placeholder="Email"
            />
            <TextInput 
                autoCapitalize='none'
                value={inputs.password}
                onChangeText={subscribe('password')}
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry={true}
            />
            <Button 
                title="Iniciar sesión"
                onPress={handleSubmit}
            />
            <AndroidLink 
                text="Aún no tienes cuenta? Crea una!"
                textStyle={{ marginTop: 10, color: '#2196F3'}}
                action={goToRegister}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        alignSelf: 'stretch',
        marginBottom: 10,
        paddingHorizontal: 5
    },
    title: {
        fontSize: 22,
        marginBottom: 16
    }
})