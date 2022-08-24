import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

interface SettingsModalProps {
    Exit: () => void;
}

export const SettingsModal = ({ Exit }: SettingsModalProps) => {

    const [languagem, setLanguagem] = useState(1)
    const [methodCalc, setMethodCalc] = useState(1)

    return (
        <View style={styles.Container}>
            <View style={styles.Content}>
                <View style={styles.header}>
                    <Text style={styles.TextHeader}>Settings</Text>
                </View>
                <View style={styles.OptionContent}>
                    <TouchableOpacity style={styles[languagem === 1 ? 'buttonStyleSelected' : 'buttonStyle']}
                        onPress={() => setLanguagem(1)}
                    >
                        <Text style={[styles.buttonText]}>English</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles[languagem === 2 ? 'buttonStyleSelected' : 'buttonStyle']}
                        onPress={() => setLanguagem(2)}
                    >
                        <Text style={styles.buttonText}>Português</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles[methodCalc === 1 ? 'buttonStyleSelected' : 'buttonStyle']}
                        onPress={() => setMethodCalc(1)}
                    >
                        <Text style={styles.buttonText}>Celsius</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles[methodCalc === 2 ? 'buttonStyleSelected' : 'buttonStyle']}
                        onPress={() => setMethodCalc(2)}
                    >
                        <Text style={styles.buttonText}>Fahrenheit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ApplyLocale}>
                    <TouchableOpacity style={styles.ApplyButton} onPress={Exit}>
                        <Text style={styles.ApplyTextButton}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Content: {
        backgroundColor: '#d8d8d8',
        height: '50%',
        width: '90%',
        borderRadius: 22,
    },
    header: {
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextHeader: {
        fontSize: RFPercentage(2.2),
        color: '#46555c',
    },
    OptionContent: {
        height: '65%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    ApplyLocale: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        backgroundColor: '#888',
        width: '80%',
        height: RFPercentage(6),
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyleSelected: {
        backgroundColor: '#28587B',
        width: '80%',
        height: RFPercentage(6),
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: RFPercentage(1.8),
        color: '#d6d6d6'
    },
    ApplyButton: {
        borderWidth: 1,
        borderColor: '#28587B',
        width: '80%',
        height: RFPercentage(6),
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ApplyTextButton: {
        fontSize: RFPercentage(1.8),
        color: '#28587B'
    },
})