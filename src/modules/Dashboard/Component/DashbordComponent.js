import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet } from "react-native";

const DashboardComponent = (props) => {
    const { route,
        navigation,
        text,
        onChangeText,
        menu,
        city, onPress } = props;
    const { Username } = route.params;
    const DescriptionTravelPackage = '  Package Tour denganTRAVEL YUK, bisa Private maupun grup tour dengan jaminan harga terbaik. Pilihan paket 4D3N,3D2N, dan Day Trip.'
    return (
        <ScrollView style={{ backgroundColor: '#EED180' }}>
            <View>
                <View style={styles.greeting}>
                    <Text style={styles.greetingText}>
                        Halo {Username} mau kemana hari ini?</Text>
                    <TouchableOpacity style={styles.editProfile}>
                        <Image source={require('../../../aseets/dinda.jpg')}
                            style={styles.imgProgfile} />
                    </TouchableOpacity>
                </View>
                <View style={styles.search}>
                    <TouchableOpacity
                        style={styles.toucableSearch}>
                        <Image source={require('../../../aseets/searchb.png')}
                            style={styles.logoSearch} />
                        <TextInput
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Kota yang sedang kamu pikirkan?"
                            placeholderTextColor={'#876445'} />
                    </TouchableOpacity>
                </View>

                <View style={styles.menu}>
                    {menu.map((y) => {
                        return (
                            <View style={styles.settingMenu}>
                                <TouchableOpacity style={styles.touchableMenu}>
                                    <Image source={y.icon}
                                        style={styles.logoMenu} />
                                </TouchableOpacity>
                                <Text style={styles.textMenu}>{y.place}</Text>
                            </View>
                        )
                    })}
                </View>
                <Text style={styles.tittleRecommended}>
                    Recommended by TRAVEL YUK</Text>
                <ScrollView horizontal={true} >
                    <View style={styles.cities}>
                        {city.map((p) => {
                            return (
                                <View style={styles.citiesDisplay}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <TouchableOpacity
                                            style={styles.touchableCities}
                                            onPress={() => navigation.navigate('Bali')}>
                                            <Image source={p.photo} style={styles.imgCities} />
                                            <View>
                                                <Text style={styles.textCities}>{p.city}</Text>
                                                <View style={styles.provinces}>
                                                    <Image source={p.pinLogo}
                                                        style={styles.logoProvinces} />
                                                    <Text style={styles.textProvinces}>{p.province}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
                <View>
                    <Text style={styles.tittlePackage}>
                        Travel Package with TRAVEL YUK</Text>
                </View>
                <View style={styles.displayImg}>
                    <Image source={require('../../../aseets/karimun.jpg')}
                        style={styles.imgPackage} />
                </View>
                <Text style={styles.textDescription}
                >{DescriptionTravelPackage}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetailTrip')}
                    style={styles.seeDetail}>
                    <Text style={styles.textTouchable}>Selengkapnya</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
    // }
}
const styles = StyleSheet.create({
    greeting: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 15
    },
    greetingText: {
        fontSize: 30,
        color: '#876445',
        fontWeight: '700',
        maxWidth: 300
    },
    editProfile: {
        alignContent: 'center'
    },
    imgProgfile: {
        borderRadius: 50,
        width: 70,
        height: 70
    },
    search: {
        padding: 15
    },
    toucableSearch: {
        flexDirection: 'row',
        backgroundColor: '#FFF89C',
        borderRadius: 3
    },
    logoSearch: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        width: 25,
        height: 25
    },
    menu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 15
    },
    settingMenu: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    touchableMenu: {
        alignSelf: 'center',
        borderRadius: 90,
        margin: 7,
        padding: 15,
        backgroundColor: 'white'
    },
    logoMenu: {
        width: 50,
        height: 50
    },
    textMenu: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 15
    },
    tittleRecommended: {
        fontSize: 25,
        paddingLeft: 15,
        paddingVertical: 15,
        fontWeight: 'bold',
        color: '#876445'
    },
    cities: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 15,
        paddingRight: 15
    },
    citiesDisplay: {
        margin: 10
    },
    touchableCities: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5
    },
    imgCities: {
        width: 250,
        height: 250,
        borderRadius: 5
    },
    textCities: {
        fontSize: 20
    },
    provinces: {
        flexDirection: 'row'
    },
    logoProvinces: {
        width: 15,
        height: 15
    },
    textProvinces: {
        fontSize: 15
    },
    tittlePackage: {
        fontSize: 25,
        paddingHorizontal: 20,
        paddingTop: 20,
        fontWeight: 'bold',
        color: '#876445'
    },
    displayImg: {
        paddingHorizontal: 20,
        paddingTop: 15
    },
    imgPackage: {
        width: 350,
        height: 250
    },
    textDescription: {
        fontSize: 20,
        paddingHorizontal: 20,
        paddingTop: 15,
        maxWidth: 500
    },
    seeDetail: {
        backgroundColor: '#FFF89C',
        paddingVertical: 10,
        borderRadius: 45,
        width: 180,
        marginLeft: 20,
        marginVertical: 15
    },
    textTouchable: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500'
    }
})
export default DashboardComponent;