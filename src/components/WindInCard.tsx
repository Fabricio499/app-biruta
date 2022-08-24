import React from 'react'
import { View, StyleSheet, Text } from "react-native"
import Lottie from 'lottie-react-native';
import Wind from '../assets/animations/wind.json'
import { RFPercentage } from 'react-native-responsive-fontsize';

export const WindInCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.LottieHere}>
                <Lottie source={Wind} autoPlay loop />
            </View>
            <View style={styles.Value}>
                <Text style={styles.TextValue}>18 km/h</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flexDirection: 'row',
    },
    LottieHere: {
        borderRightWidth: 1,
        borderColor: '#28587b',
        height: '100%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Value: {
        borderLeftWidth: 1,
        borderColor: '#28587b',
        height: '100%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextValue: {
        color: '#e6e6e6',
        fontSize: RFPercentage(3.4)
    },
})