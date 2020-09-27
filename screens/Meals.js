import React from 'react'
import useFetch from '../hooks/useFecth'
import ListItem from '../components/ListItem'
import { View, StyleSheet, FlatList } from 'react-native'
import Loading from '../components/Loading'

const Meals = ({navigation}) => {
    const { loading, data: meals } = useFetch('https://serverless.tonisg91.vercel.app/api/meals')

    return (
        <View
            style={styles.container}
        >
            {loading ? <Loading /> :
                <FlatList
                    style={styles.list}
                    data={meals}
                    keyExtractor={x => x._id}
                    renderItem={({ item }) =>
                        <ListItem
                            onPress={() => navigation.navigate('Modal', { _id: item._id })}
                            name={item.name}
                        />
                    }
                />
            }
        </View>
    )
}

Meals.navigationOptions = ({
    title: "Comidas disponibles",
})

export default Meals

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    list: {
        alignSelf: 'stretch'
    }
})