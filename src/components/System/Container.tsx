import React from 'react';
import { View, StyleSheet } from 'react-native'
import { ContainerProps } from '../../@types/System';
import { Colors } from '../../themes/Colors';


const Container = ({ children, style }: ContainerProps) => {

    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.verde2
    }
})
export default Container;