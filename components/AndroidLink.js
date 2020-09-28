import React from 'react'
import { TouchableWithoutFeedback, Text, StyleSheet } from 'react-native'

export default ({text, textStyle, action}) => {
    return (
        <TouchableWithoutFeedback
            style={styles.container}
            onPress={action}
        >
            <Text
                style={textStyle}    
            >{text}</Text>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        color: 'blue'
    }
})