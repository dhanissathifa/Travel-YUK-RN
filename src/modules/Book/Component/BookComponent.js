import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Linking } from "react-native";

const BookComponent = () => {
    const DetailDay1A = '   Di pagi hari driver kami akan menjemput anda di hotel atau Komodo International Airport. Setelah penjemputan driver akan mengantar anda menuju ke Pelabuhan Labuan Bajo untuk proses check in sailing trip labuan bajo 3 hari 2 malam. Destinasi pertama hari ini adalah Pulau Kelor yang akan memakan waktu kurang lebih 1 jam. Di Pulau Kelor, anda bisa trekking untuk menikmati keindahan Taman Nasional Komodo dari atas bukit. Dan bagi yang tidak kuat trekking anda bisa bersantai di pinggir pantau yang indah dengan hamparan pasir putih sambil menikmati kelapa muda.'
    const DetailDay1B = '   Destinasi berikutnya adalah Pulau Manjarite, sebuah pulau tak berpenghuni yang menawarkan pesona keindahan bawah laut. Di pulau ini anda bisa menikmati snorkeling dengan pemandangan terumbu karang, berbagai macam ikan, dan bintang laut. Puas bermain di Pulau Manjarite, kapal akan berlayar menuju ke Pulau Kalong dan perjalanan akan memakan waktu kurang lebih 2 jam. Perjalanan ini tidak akan berasa lama, karena di sepanjang perjalanan anda akan di suguhkan dengan pemandangan Taman Nasional Komodo yang begitu indah. Di Pulau Kalong, kita akan menikmati indahnya Sunset yang di iringi dengan ribuan kelelawar yang beterbbangan di atas laut. Di malam hari, chef kapal kami akan menyuguhkan anda makan malam yang nikmat. Nikmatilah pengalaman makan malam di atas kapal yang luar biasa'
    const DetailDay2A = '   Hari ini team kami akan membangunkan anda di pukul 04:00 dini hari. Nikmatilah sarapan ringan yang chef kami sediakan dan secangkir teh atau kopi sebelum mendaki ke bukit Pulau Padar. Sekitar pukul 05:00 kita akan trekking di puncak bukit di pulau padar, kami sarankan untuk memakai sepatu dan celana trekking yang enak buat bergerak. Di puncak bukit Pulau Padar, anda akan di suguhkan dengan pemandangan sunrise yang luar biasa. Bila ingin mengabbadikan moment indah anda, fotografer profesional kami siap melayani anda.'
    const DetailDay2B = '   Selesai trekking di Pulau Padar, nikmatilah sarapan di atas kapal dan kapal akan berlayar menuju ke Pulau Pink. Di Pulau Pink, anda bisa berenang di pantai dengan pasir berwarna pink yang sangat indah.'
    const DetailDay2C = '   Setelah puas bermain di pantai, anda akan kami ajak berpetualangan melihat secara langsung Komodo Dragon di Pulau Komodo secara dekat. Jangan takut, karena selama perjalanan di pulau ini anda akan di temani oleh tour guide dan ranger pawang komodo jadi perjalanan trekking anda akan tetap aman.'
    const DetailDay2D = '   Destinasi selanjutnya di hari ini adalah Taka Makassar, sebuah pulau mungil yang cantik dan berbentuk bulan sabit bila di lihat dari atas. Taka Makassar memiliki pasir berwarna putih semi pink yang sangat indah. Dan di pulau kecil ini anda bisa berfoto foto atau snorkeling.'
    const DetailDay2E = '   Acara terakhir di hari ini adalah snorkeling di Manta Point. Disini anda akan kami ajak snorkeling melihat secara langsung ikan pari raksaksa di laut lepas. Tour guide kami akan mengarahkan anda untuk snorkeling melihat manta dengan aman dan nyaman. Karena arus di sini cukup deras, anda di haruskan untuk tetap mengikuti intruksi dari tour guide.'
    const DetailDay3A = '   Ini adalah hari terakhir perjalanan sailing kita di Taman Nasional Komodo. Destinasi hari ini adalah mengunjungi Pulau Kanawa sebuah pulau kecil indah yang memiliki pantai dengan pasir putih. Di Pulau Kanawa anda juga bisa menikmati senorkeling dengan pemandangan berbagai macam ikan yang berwarna warni. Setelah puas bermain di Pulau Kanawa, kapal akan berlayar menuju ke Pelabuhan Labuan Bajo, Sampai di Pelabuhan sekitar pukul 11:00-13:00. Dan sesampai di pelabuhan driver kami akan mengantar anda ke hotel tempat anda menginap atau ke Komodo International Airport bagi anda yang ingin langusung kembali ke kampung halaman. Trip hari ini selesai...'
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={styles.tittlePackage}>Package Labuan Bajo 3D2N</Text>
                <Text style={styles.price}>Rp 3.000.000</Text>
                <Text style={styles.include}>Price Include :</Text>
                <Text style={styles.includeText}>Sharing boat charter</Text>
                <Text style={styles.includeText}>Entrance fee Taman National Komodo</Text>
                <Text style={styles.includeText}>Meals and Beverage While Sailing</Text>
                <Text style={styles.includeText}>Freeflow drink</Text>
                <Text style={styles.includeText}>Airport / Hotel Pickup and Drop-off</Text>
                <Text style={styles.includeText}>Snorkeling Equipment</Text>
                <Text style={styles.includeText}>Water sport</Text>
                <Text style={styles.includeText}>Photo Documentation</Text>
                <Text style={styles.includeText}>Tour guide</Text>
                <Text style={styles.includeText}>Life Jacket</Text>
                <Text style={styles.includeText}>Karaoke sound system</Text>
                <Text style={styles.includeText}>Itinerary</Text>
                <View>
                    <Text style={styles.days}>Day 1 - Kelor Island - Menjerite Snorkeling Spot - Kalong Island</Text>
                    <Image source={require('../../../aseets/bajo.jpg')}
                        style={styles.imgDays} />
                    <Text style={styles.detailDays}>{DetailDay1A}</Text>
                    <Text style={styles.detailDays}>{DetailDay1B}</Text>
                </View>
                <View>
                    <Text style={styles.days}>Day 2 - Padar Island-Pink Beach - Pulau Komodo - Taka Makassar - Manta Point</Text>
                    <Image source={require('../../../aseets/bajo.jpg')}
                        style={styles.imgDays} />
                    <Text style={styles.detailDays}>{DetailDay2A}</Text>
                    <Text style={styles.detailDays}>{DetailDay2B}</Text>
                    <Text style={styles.detailDays}>{DetailDay2C}</Text>
                    <Text style={styles.detailDays}>{DetailDay2D}</Text>
                    <Text style={styles.detailDays}>{DetailDay2E}</Text>
                </View>
                <View>
                    <Text style={styles.days}>Day 3 - Kanawa Island</Text>
                    <Image source={require('../../../aseets/bajo.jpg')}
                        style={styles.imgDays} />
                    <Text style={styles.detailDays}>{DetailDay3A}</Text>
                </View>
                <View>
                    <Text style={styles.question}>Question or Booking?</Text>
                    <TouchableOpacity style={styles.touchableQuestion}
                    onPress={() =>  Linking.openURL('http://google.com') }>
                        <Text style={styles.touchabelText}>WHATSAPP NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    screen: {
        marginHorizontal:20,
    },
    tittlePackage: {
        fontSize:25, 
        fontWeight:'600'
    },
    price: {
        fontSize:20,
        fontWeight:'bold'
    },
    include : {
        fontSize:20,
        fontWeight:'600'
    },
    includeText: {
        fontSize:18
    },
    days: {
        fontSize: 20,
        fontWeight: '600',
        paddingVertical: 15,
        maxWidth: 500
    },
    imgDays: {
        width: 360,
        height: 200
    },
    detailDays: {
        fontSize:20,
        textAlign:'justify',
        paddingRight: 15
    },
    question: {
        fontSize: 25,
        textAlign:'center',
        fontWeight:'700'
    },
    touchableQuestion: {
        borderWidth:1,
        margin: 10
    },
    touchabelText: {
        fontSize:18,
        textAlign:'center'
    }
})
export default BookComponent;
