import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Colors } from '../../themes/Colors';
import { Fonts } from '../../themes/Fonts';
import { ButtonDefaultProps } from '../../@types/Pressable';


const ButtonDefault = ({ style, ...props }: ButtonDefaultProps) => {

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.buttonContainer, style]}
            {...props}>
            <Text style={styles.titleButtonLabel}>INICIAR</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        width: "60%",
        height: 60,
        alignItems: "center",
        borderRadius: 8,
        justifyContent: "center",
        backgroundColor: Colors.verde1,
    },
    titleButtonLabel: {
        fontSize: 16,
        color: Colors.branco,
        fontFamily: Fonts.InterBold,
    }
})
export default ButtonDefault;