import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Loading from '../components/Loading'
import useFetch from '../hooks/useFecth'

export default ({ navigation }) => {
    const meal_id = navigation.getParam('_id')
    const { loading, data } = useFetch(`https://serverless.tonisg91.vercel.app/api/meals/${meal_id}`)

    const generateOrder = async () => {
        await fetch(`https://serverless.tonisg91.vercel.app/api/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                meal_id: meal_id,
                user: 'lala'
            })
        })
        alert('Pedido realizado con exito')
        navigation.navigate('Meals')
    }    
    const { _id, name, desc } = data

    return (
        loading ? <Loading />:
            <View style={styles.container}>
                <Text>{_id}</Text>
                <Text>{name}</Text>
                <Text>{desc}</Text>
                <View style={styles.button}>
                    <Button title="Aceptar" onPress={generateOrder} />
                </View>
                <View style={styles.button}>
                    <Button title="Cancelar" onPress={() => navigation.navigate('Meals')} />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        paddingVertical: 5
    }
})