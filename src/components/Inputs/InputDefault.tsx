import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'

import { Fonts } from '../../themes/Fonts';
import { Colors } from '../../themes/Colors';
import { InputDefaultProps } from '../../@types/Inputs';


const InputDefault = ({ style, ...props }: InputDefaultProps) => {

    return (
        <View style={[styles.inputContainer, style]}>
            <TextInput
                style={styles.input}
                placeholderTextColor={Colors.cinza}
                {...props} />
        </View>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        height: 60,
        width: "100%",
        paddingLeft: 10,
        borderRadius: 8,
        justifyContent: "center",
        backgroundColor: Colors.branco,
    },
    input: {
        height: "100%",
        fontSize: 16,
        fontFamily: Fonts.InterSemiBold
    }
})
export default InputDefault;