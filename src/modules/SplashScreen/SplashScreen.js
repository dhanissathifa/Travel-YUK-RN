import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"
import { useEffect } from "react";

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 5000)
    }, [navigation])
    return (
        <View style={styles.view}>
            <Image source={require('../../aseets/aroundBlack.png')} style={styles.logo} />
            <Text style={styles.textBrand}>TRAVEL YUK</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBrand: {
        fontWeight: '700',
        fontSize: 20,
        marginTop: 15,
        color: 'black'
    },
    logo: {
        height: 100,
        width: 100,
    }
})
export default SplashScreen;