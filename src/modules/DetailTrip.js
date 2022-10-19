import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";

const Detail = [
    {
        package: 'Package Labuan Bajo Trip 3D2N', image: require('../aseets/bajo.jpg'), price: 'Start from Rp 3jutaan',
        include: 'Inclusions', includes: 'Airport / Hotel Pickup and Drop-off', includes1: 'Three Meals per Day',
        includes2: 'Paddle Boards', includes3: 'Afternoon Coffee and Snack', includes4: 'Water with refillable onboard',
        includes5: 'Snorkeling Gear', includesEnd: 'Linen and Towels'
    },
    {
        package: 'Package Labuan Bajo Trip 3D2N', image: require('../aseets/bajo.jpg'), price: 'Start from Rp 3jutaan',
        include: 'Inclusions', includes: 'Airport / Hotel Pickup and Drop-off', includes1: 'Three Meals per Day',
        includes2: 'Paddle Boards', includes3: 'Afternoon Coffee and Snack', includes4: 'Water with refillable onboard',
        includes5: 'Snorkeling Gear', includesEnd: 'Linen and Towels'
    },
    {
        package: 'Package Raja Ampat Trip 3D2N', image: require('../aseets/ampat.jpg'), price: 'Start from Rp 3jutaan',
        include: 'Inclusions', includes: 'Airport / Hotel Pickup and Drop-off', includes1: 'Three Meals per Day',
        includes2: 'Paddle Boards', includes3: 'Afternoon Coffee and Snack', includes4: 'Water with refillable onboard',
        includes5: 'Snorkeling Gear', includesEnd: 'Linen and Towels'
    },
    {
        package: 'Package Karimun Jawa Trip 3D2N', image: require('../aseets/karimun.jpg'), price: 'Start from Rp 3jutaan',
        include: 'Inclusions', includes: 'Airport / Hotel Pickup and Drop-off', includes1: 'Three Meals per Day',
        includes2: 'Paddle Boards', includes3: 'Afternoon Coffee and Snack', includes4: 'Water with refillable onboard',
        includes5: 'Snorkeling Gear', includesEnd: 'Linen and Towels'
    },
    {
        package: 'Package Bali Trip 3D2N', image: require('../aseets/bali.jpg'), price: 'Start from Rp 3jutaan',
        include: 'Inclusions', includes: 'Airport / Hotel Pickup and Drop-off', includes1: 'Three Meals per Day',
        includes2: 'Paddle Boards', includes3: 'Snorkeling Gear', includesEnd: 'Linen and Towels'
    }]

    // const inc = (Detail == includes4) ? includes4 : includesEnd
const DetailTrip = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.screen}>
            <Text style={styles.tittlePackage}>Travel Package by TRAVEL YUK</Text>
                {Detail.map((x) => {
                    return(
                    <View style={styles.card}>
                        <Text style={styles.typePackage}>{x.package}</Text>
                        <Image source={x.image} style={styles.imgPackage} />
                        <Text style={styles.price}>{x.price}</Text>
                        <Text style={styles.include}>{x.include}</Text>
                        <Text style={styles.listInclude}>{x.includes}</Text>
                        <Text style={styles.listInclude}>{x.includes1}</Text>
                        <Text style={styles.listInclude}>{x.includes2}</Text>
                        <Text style={styles.listInclude}>{x.includes3}</Text>
                        {/* x == x.includes4 ? includes4 : includesEnd */}
                        <Text style={styles.listInclude}>{x.includes4}</Text>
                        {/* x == x.includes5 ? includes5 : includesEnd */}
                        <Text style={styles.listInclude}>{x.includes5}</Text>
                        <Text style={styles.listEnd}>{x.includesEnd}</Text>
                        <TouchableOpacity
                            style={styles.touchableBook}
                            onPress={() => navigation.navigate('Book')}>
                            <Text style={styles.touchableText}>DETAILS TRIP</Text>
                        </TouchableOpacity>
                    </View>
                )})}
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#FFF89C'
    },
    tittlePackage: {
        fontSize:30,
        paddingHorizontal: 20,
        paddingTop: 20,
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#EED180',
        alignItems: 'center',
        borderColor: 'grey',
        borderRadius: 5,
        padding: 5,
        margin: 20,
        justifyContent: 'space-evenly'
    },
    typePackage: {
        fontSize: 25,
        margin: 10,
        fontWeight: 'bold',
        color: '#876445'
    },
    imgPackage: {
        width: 300,
        height: 200,
        margin: 5
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#876445'
    },
    include: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: '#876445'
    },
    listInclude: {
        fontSize: 18
    },
    listEnd: {
        fontSize: 18,
        marginBottom: 15
    },
    touchableBook: {
        backgroundColor: '#FFF89C',
        padding: 5,
        marginBottom: 15
    },
    touchableText: {
        fontSize: 20, 
        padding: 7
    }
})
export default DetailTrip;