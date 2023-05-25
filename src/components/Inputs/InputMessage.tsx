import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import { Fonts } from '../../themes/Fonts';
import { Colors } from '../../themes/Colors';
import { InputMessageProps } from '../../@types/Inputs';


const InputMessage = ({ style, onSendPress, ...props }: InputMessageProps) => {

    return (
        <View style={[styles.inputContainer, style]}>
            <TextInput
                style={styles.input}
                placeholderTextColor={Colors.cinza}
                placeholder='Faça uma pergunta...'
                multiline
                {...props} />
            <TouchableOpacity
                style={styles.buttonSendContainer}
                activeOpacity={0.5}
                onPress={onSendPress}>
                <Ionicons name="send" size={36} color={Colors.verde2} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        minHeight: 60,
        paddingVertical: 5,
        width: "100%",
        paddingLeft: 10,
        borderRadius: 8,
        flexDirection: "row",
        backgroundColor: Colors.branco,
    },
    input: {
        flex: 1,
        fontSize: 16,
        alignSelf:"center",
        fontFamily: Fonts.InterSemiBold
    },
    buttonSendContainer: {
        width: "18%",
        alignItems: "center",
        alignSelf:"flex-end",
        marginBottom:5,
        justifyContent: "center",
    }
})
export default InputMessage;