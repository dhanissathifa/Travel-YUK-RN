import React, { Component } from "react";
import { Text, View } from "react-native";

class Bali extends Component{
    constructor(props){
        super(props)
        this.state = {
            hello : "selamat datang"
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                hello: "mau kemana"
            })
        }, 5000)
    }
    componentDidUpdate() {
    }

    render(){
        return(
            <View>
            <Text>{this.state.hello} Saraswati</Text>
            </View>
        )
    }
}
export default Bali;