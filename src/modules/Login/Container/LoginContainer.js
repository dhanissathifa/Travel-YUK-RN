import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import LoginComponent from "../Component/LoginComponent";

const LoginContainer = ({ navigation }) => {
    const [text, onChangeText] = useState(null)
    const [number, onChangeNumber] = useState(null)
    const password = 1234567890
    var pas;
    if (number !== null) {
        if (password == number) {
            pas = "berhasil login"
        } else {
            pas = "password belum benar"
        }
    }
    const onLogin = () => {
        if (pas !== "password belum benar") {
            navigation.navigate('Dashboard',
                { Username: text })
        }
    }
    useFocusEffect(
        useCallback(() => {
            onChangeText(null)
            return() => {}
        }, [])
    )
    return (
        <LoginComponent
        text={text}
        number={number}
        password={pas}
        onChangeText={onChangeText}
        onLogin={onLogin}
        />
    )}
export default LoginContainer;