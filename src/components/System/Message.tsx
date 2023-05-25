import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import { Fonts } from '../../themes/Fonts';
import { Colors } from '../../themes/Colors';
import { MessageProps } from '../../@types/System';


const Message = ({ message, stateMessageBot, type }: MessageProps) => {

    return (
        <View style={[styles.messageContainer, type == "user" ? styles.userMessage : styles.botMessage]}>
            <Text style={styles.messageLabel}>{stateMessageBot == "creating" ? "..." : message}</Text>
            {
                stateMessageBot != "creating" && (
                    <Text style={styles.timeLabel}>22:54</Text>
                )
            }
        </View>
    );
}
const styles = StyleSheet.create({
    messageContainer: {
        borderRadius: 8,
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    userMessage: {
        marginLeft: 20,
        backgroundColor: Colors.verde1,
        borderTopRightRadius: 0,
    },
    botMessage: {
        marginRight: 20,
        backgroundColor: Colors.branco,
        borderTopLeftRadius: 0,
    },
    messageLabel: {
        color: Colors.preto,
        fontFamily: Fonts.InterBold,
    },
    timeLabel: {
        right: 20,
        color:Colors.preto,
        bottom: 5,
        fontSize:10,
        position: "absolute",
        fontFamily:Fonts.InterSemiBold,
    }
})
export default Message;