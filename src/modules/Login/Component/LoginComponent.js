import React, { useEffect, useState} from "react";
import { View, Text, TouchableOpacity, TextInput, ImageBackground, Image, StyleSheet } from "react-native";
import Loading from "../../Loading/Loading";

const LoginComponent = (props) => {
    const { number,
        text,
        onLogin,
        onChangeText,
        onChangeNumber,
        pas,
    loading
 } = props
    return (
        <>
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../../aseets/travel.jpg')}
                resizeMode="cover"
                blurRadius={3}
                style={styles.imgBackground} >
                <View style={styles.header}>
                    <Image source={require('../../../aseets/around.png')}
                        style={styles.logoTravelYUK} />
                    <Text style={styles.brandText}>TRAVEL YUK</Text>
                    <Text style={styles.brandTagline}>Find Your Dream Trip</Text>
                </View>
                <Text
                    style={styles.loginText}>Login</Text>
                <View style={{ padding: 10 }}>
                    <TouchableOpacity
                        style={styles.input}>
                        <Image source={require('../../../aseets/user.png')}
                            style={styles.logoInput} />
                        <TextInput
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Username" />
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 11 }}>
                    <TouchableOpacity
                        style={styles.input}>
                        <Image source={require('../../../aseets/lock.png')}
                            style={styles.logoInput} />
                        <TextInput
                            onChangeNumber={onChangeNumber}
                            value={number}
                            secureTextEntry={true}
                            keyboardType='numeric'
                            placeholder="Password" />
                            {pas !== "password belum benar" ? <View /> : 
                            <Text style={{color:'white'}}>Password belum benar</Text>}
                    </TouchableOpacity>
                </View>
                <Text style={styles.alternative}>Or Login with</Text>
                <View style={styles.logoDisplay}>
                    <TouchableOpacity
                        style={styles.touchableLogo}>
                        <Image source={require('../../../aseets/google.png')}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchableLogo}>
                        <Image source={require('../../../aseets/facebook.png')}
                            style={{ width: 33, height: 33 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonLogin}>
                    <TouchableOpacity
                        style={styles.touchableLogin}
                        onPress={() => onLogin()}>
                        <Text style={styles.textButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        {loading && <Loading/> }
        </>
    )
}
    const styles= StyleSheet.create({
        imgBackground: {
            flex: 1, 
            justifyContent: 'center'
        },
        header: {
            alignItems: 'center', 
            paddingBottom: 10
        },
        logoTravelYUK: {
            width: 75,
            height: 75
        },
        brandText: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'grey',
            paddingTop:8
        },
        brandTagline: {
            fontSize: 15,
            color: 'grey',
            fontWeight: 'bold'
        },
        loginText: {
            fontSize: 35,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
            paddingBottom: 10
        },
        input: {
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 3, 
        },
        logoInput: {
            margin: 10,
            width: 30,
            height: 30
        },
        alternative: {
            alignSelf: 'center',
            fontSize: 17,
            paddingBottom: 5,
            color: 'white',
            fontWeight: 'bold',
            paddingTop: 10
        },
        logoDisplay: {
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            paddingBottom: 10
        },
        touchableLogo: {
            flexDirection: 'row',
            alignSelf: 'center',
            borderRadius: 90,
            padding: 8,
            backgroundColor: 'white'
        },
        buttonLogin: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10
        },
        touchableLogin: {
            backgroundColor: 'white',
            width: 150,
            borderRadius: 3,
            paddingLeft: 10,
            paddingRight: 10,
        },
        textButton: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'grey',
            padding: 5,
            marginHorizontal: 30
        }
    })
export default LoginComponent;