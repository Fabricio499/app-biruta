import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

interface CardOptionTypes {
    Option: number;
}

export const CardOption = ({Option}: CardOptionTypes) => {
    return (
        <TouchableOpacity style={[styles.Container, styles[Option === 1 ? 'Coloration1' : 'Coloration2']]}>
            <View style={styles.Circle(Option)}>
                <MaterialIcons name={Option === 1 ? 'near-me' : 'search'} size={22} color={Option === 1 ? '#00ABE8' : '#28587B'} />
            </View>
            <Text style={styles.TextCard(Option)}>
                {Option === 1 ? 'Fortaleza' : 'add a new place'}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '45%',
        height: '95%',
        borderRadius: 18,
        paddingHorizontal: '5%',
        paddingVertical: '8%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    Coloration1: {
        backgroundColor: '#00ABE8',
    },
    Coloration2: {
        backgroundColor: '#28587B',
    },
    TextCard: (Option: number) => ({
        fontSize: RFPercentage(2.6),
        color: Option === 1 ? '#28587B' : '#F3F3F3',
    }),
    Circle: (Option: number) => ({
        width: '30%',
        height: '38%',
        borderRadius: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: Option === 1 ? '#28587B' : '#00ABE8',
    }),

})