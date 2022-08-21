import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RFPercentage } from 'react-native-responsive-fontsize';
import { UserCard } from '../components/UserCard';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { OptionsHome } from '../components/OptionsHome';
import { WantedPlaces } from '../components/WantedPlaces';

export const Home = () => {
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
                <OptionsHome />
            </View>
            <View style={styles.MoreOptions}> 
                <Text style={{color: '#46555c', fontSize: RFPercentage(2.3)}}>
                    Most wanted places
                </Text>
                <WantedPlaces />
            </View>
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
})