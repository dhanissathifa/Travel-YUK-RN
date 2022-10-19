import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect, useCallback } from "react";
import DashboardComponent from "../Component/DashbordComponent";

const menu = [
    { icon: require('../../../aseets/mountain.png'), place: 'Mountain' },
    { icon: require('../../../aseets/island.png'), place: 'Beach' },
    { icon: require('../../../aseets/temple.png'), place: 'Temple' },
    { icon: require('../../../aseets/camp.png'), place: 'Camping' },
    { icon: require('../../../aseets/forest.png'), place: 'Forest' },
    { icon: require('../../../aseets/lake.png'), place: 'Lake' },
    { icon: require('../../../aseets/park.png'), place: 'Park' },
    { icon: require('../../../aseets/other.png'), place: 'Others' }
]
const city = [
    { photo: require('../../../aseets/bali.jpg'), city: 'Bali', pinLogo: require('../../../aseets/pin.png'), province: 'Bali' },
    { photo: require('../../../aseets/karimun.jpg'), city: 'Karimun Jawa', pinLogo: require('../../../aseets/pin.png'), province: 'Jawa Tengah' },
    { photo: require('../../../aseets/ampat.jpg'), city: 'Raja Ampat', pinLogo: require('../../../aseets/pin.png'), province: 'Papua' },
    { photo: require('../../../aseets/bromo.jpg'), city: 'Gunung Bromo', pinLogo: require('../../../aseets/pin.png'), province: 'Jawa Timur' },
    { photo: require('../../../aseets/bajo.jpg'), city: 'Labuan Bajo', pinLogo: require('../../../aseets/pin.png'), province: 'NTT' }
]
const DashboardContainer = (props) => {
    const [text, onChangeText] = useState(null)
    useEffect(() => {
        // "component did mount"
        return() => {
            // "component unmound"
            onChangeText(null)
        }
    }, [])
    useFocusEffect(
        useCallback(() => {
            onChangeText(null)
            return() => {}
        }, [])
    )
    return(
        <DashboardComponent 
        menu = {menu} 
        city = {city} 
        text = {text}
        {...props}/>
    )
}
export default DashboardContainer;