import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CardOption } from './CardOption'

interface OptionsHomeProps {
    Open: () => void;
}

export const OptionsHome = ({Open}: OptionsHomeProps) => {
    return (
        <View style={styles.Container}>
            <CardOption Option={1} />
            <CardOption Option={2} Open={Open} />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: '5%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

})