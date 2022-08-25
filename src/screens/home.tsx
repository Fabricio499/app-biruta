import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RFPercentage } from 'react-native-responsive-fontsize';
import { UserCard } from '../components/UserCard';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { OptionsHome } from '../components/OptionsHome';
import { WantedPlaces } from '../components/WantedPlaces';
import { CardYesterday } from '../components/CardYesterday';
import Lottie from 'lottie-react-native';
import MenPeople from '../assets/animations/men-people.json'
import { SearchPage } from '../components/SearchPage';
import { SettingsModal } from '../components/SettingsModal';

export const Home = () => {

    const [visibleSearch, setVisibleSearch] = useState(false)
    const [visibleSettings, setVisibleSettings] = useState(false)

    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity style={styles.buttonNotify}>
                    <MaterialIcons name="notifications-active" size={20} color='#F3F3F3' />
                </TouchableOpacity>
                <UserCard />
            </View>

            <View style={styles.HelloView}>
                <Text style={styles.secondaryText}>Hello, </Text>
                <Text style={styles.PrincipalText}>Fabricio</Text>
                <Text style={{fontSize: RFPercentage(2.2)}}> 👋</Text>
            </View>
            <View style={styles.OptionsLocale}>
                <OptionsHome Open={()=>setVisibleSearch(true)} />
            </View>
            <View style={styles.MoreOptions}> 
                <Text style={{color: '#46555c', fontSize: RFPercentage(2.3)}}>
                    Most wanted places
                </Text>
                <WantedPlaces />
            </View>
            <View style={styles.YesterdayArea}>
                <CardYesterday />
            </View>
            <View style={styles.OptionsApp}>
                <View style={styles.OptionsLottie}>
                    <Lottie source={MenPeople} autoPlay loop={false} style={{width: '100%'}} />
                </View>
                <View style={styles.OptionsButtons}>
                    <TouchableOpacity style={styles.ButtomOption} onPress={()=>setVisibleSettings(true)}>
                        <MaterialIcons name='build' size={20} />
                        <Text>settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtomOption}>
                        <MaterialIcons name='loop' size={20} />
                        <Text>Reload</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal 
                animationType='slide'
                transparent={false}
                visible={visibleSearch}
            ><SearchPage Exit={()=>setVisibleSearch(false)} /></Modal>
            <Modal
                animationType='fade'
                transparent={true}
                visible={visibleSettings}
            >
            <SettingsModal Exit={()=>setVisibleSettings(false)} /></Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    },
    Header: {
        height: '8%',
        width: '100%',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: '#D8D8D8',
    },
    Title: {
        fontSize: RFPercentage(4),
    },
    buttonNotify: {
        width: '10%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#00ABE8',
    },
    HelloView: {
        height: '8%',
        paddingHorizontal: '5%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    secondaryText: {
        color: '#b3b5ae',
        fontSize: RFPercentage(3)
    },
    PrincipalText: {
        color: '#46555c',
        fontSize: RFPercentage(3)
    },
    OptionsLocale: {
        height: '20%',
    },
    MoreOptions: {
        height: '15%',
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        flexDirection: 'column',
    },
    YesterdayArea: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '5%',
    },
    OptionsApp: {
        height: '29%',
        flexDirection: 'row'
    },
    OptionsLottie: {
        width: '50%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    OptionsButtons: {
        width: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '5%',
    },
    ButtomOption: {
        width: '100%',
        marginTop: '3%',
        marginBottom: '2%',
        height: '33%',
        borderRadius: 20,
        backgroundColor: '#d8d8d8',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: '5%',
        justifyContent: 'space-evenly'
    },
})