import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const WantedPlaces = () => {
    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.Locale}>
                <MaterialIcons name='star' size={15} color='#eead2d' />
                <Text>Fortaleza</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Locale}>
                <MaterialIcons name='star' size={15} color='#eead2d' />
                <Text>Marselha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Locale}>
                <MaterialIcons name='star' size={15} color='#eead2d' />
                <Text>Barcelona</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Locale: {
        backgroundColor: '#D8D8D8',
        width: '32%',
        height: '70%',
        borderRadius: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
})