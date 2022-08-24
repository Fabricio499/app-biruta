import React from 'react'
import { StyleSheet, Text, View } from "react-native"
import { RFPercentage } from 'react-native-responsive-fontsize'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { WindInCard } from '../components/WindInCard'

interface FakeDateInterface {
    id: number;
    day: string;
    prediction: string;
}

export const MainView = () =>  {

    const fakeData: FakeDateInterface = [
        {
            id: 1,
            day: 'tomorrow',
            prediction: 'cloudy day'
        },
        {
            id: 2,
            day: 'after tomorrow',
            prediction: 'rainy day'
        },
    ]

    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Fortaleza</Text>
            </View>
            <View style={styles.Now}>
                <MaterialIcons name='wb-sunny' size={160} style={{marginBottom: '2%'}} /> 
                <Text style={styles.TextCelcius}>29ºC</Text>
                <Text>clear, sunny skies for the rest of the day</Text>
                <Text>dry weather</Text>
            </View>
            <View style={styles.Wind}>
                <WindInCard />
            </View>
            <View style={styles.Informations}>
                <Text>Stay hydrated and don't get sun without sunscreen.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#28587b'
    },
    HeaderText: {
        fontSize: RFPercentage(3.2),
        color: '#b3b5ae'
    },
    Header: {
        height: '8%',
        paddingHorizontal: '5%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    Now: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    TextCelcius: {
        marginTop: '2%',
        fontSize: RFPercentage(7.5)
    },
    Wind: {
        height: '25%',
        paddingHorizontal: '5%',
    },
    Informations: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})