import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { RFPercentage } from 'react-native-responsive-fontsize'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Lottie from 'lottie-react-native';
import Map from '../assets/animations/map-search.json'
interface SearchPage {
    Exit: () => void;
}

export const SearchPage = ({Exit}: SearchPage) => {
    return (
        <View style={styles.Container}> 
            <View style={styles.Header}>
                <View style={styles.SeachBar}>
                    <TextInput style={styles.SearchInput} placeholder='ex ~ Austin' />
                    <TouchableOpacity style={styles.SearchIcon}>
                        <MaterialIcons name='search' color='gray' size={25} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Results}>
                    <View style={styles.FalseResults}>
                        <MaterialIcons name='map' size={50} /> 
                        <Text>type the location above</Text>
                    </View>
                <TouchableOpacity style={styles.ExitButton} onPress={Exit} >
                    <Text style={{color: '#d8d8d8'}}>to back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.MapSection}>
                <Lottie source={Map} autoPlay loop />
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
        height: '10%',
        paddingHorizontal: '5%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    SeachBar: {
        backgroundColor: '#d8d8d8',
        borderColor: 'red',
        width: RFPercentage(45),
        height: RFPercentage(6),
        borderRadius: 22,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
    },
    SearchInput: {
        height: '100%',
        width: '80%',
        borderTopLeftRadius: 22,
        borderBottomLeftRadius: 22,
        paddingHorizontal: '5%',
    },
    SearchIcon: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 22,
        borderBottomRightRadius: 22,
    },
    Results: {
        height: RFPercentage(63.8),
        paddingVertical: '5%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ExitButton: {
        width: '30%',
        height: '8%',
        backgroundColor: '#28587B', 
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    FalseResults: {
        height: '85%',
        width: '90%',
        borderRadius: 22,
        backgroundColor: '#d8d8d8',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: '25%',
    },
    MapSection: {
        flex: 1,
        backgroundColor: '#28587B'
    }
})