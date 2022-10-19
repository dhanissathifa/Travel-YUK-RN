import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator } from 'react-native'

const Loading = () => {
    return(
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}
export default Loading

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'absolute',
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor : 'rgba(0, 0, 0, 0.5)',
        width : '100%',
        height : '100%'
    }
})