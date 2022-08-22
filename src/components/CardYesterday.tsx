import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const CardYesterday = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText1}>temperature now</Text>
                <Text style={styles.HeaderText2}>Fortaleza</Text>
            </View>
            <View style={styles.Temperature}>
                <View style={styles.Value}>
                    <Text style={styles.TemperatureText}>29ºC</Text>
                </View>
                <View style={styles.IconTemperature}>
                    <MaterialIcons name='wb-sunny' color='#eead2d' size={50} />
                </View>
            </View>
            <View style={styles.Info}>
                <Text style={{color: '#d8d8d8', fontWeight: '200',}}>recently recovered data</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '95%',
        borderRadius: 18,
        backgroundColor: '#28587B',
        padding: '5%',
    },
    Header: {
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderText1: {
        color: '#d8d8d8',
        fontSize: RFPercentage(2)
    },
    HeaderText2: {
        color: '#00ABE8',
        fontSize: RFPercentage(1.7),
    },
    Temperature: {
        height: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    TemperatureText: {
        color: '#d8d8d8',
        fontSize: RFPercentage(5)
    },
    Value: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    IconTemperature: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    Info: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})