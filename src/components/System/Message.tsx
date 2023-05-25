import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import { Fonts } from '../../themes/Fonts';
import { Colors } from '../../themes/Colors';
import { MessageProps } from '../../@types/System';


const Message = ({ message, stateMessageBot, type }: MessageProps) => {

    return (
        <View style={[
            styles.messageContainer,
            type == "user"
                ? styles.userMessage
                : stateMessageBot
                    ? styles.waitMessage
                    : styles.botMessage]}>
            <Text style={styles.messageLabel}>{stateMessageBot && type == "bot" ? "..." : message}</Text>
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
    waitMessage: {
        width: "15%",
        backgroundColor: Colors.branco,
        alignItems: "center",
        borderTopLeftRadius: 0,
    },
    botMessage: {
        marginRight: 20,
        backgroundColor: Colors.branco,
        borderTopLeftRadius: 0,
    },
    messageLabel: {
        marginHorizontal: 5,
        textAlign:"justify",
        color: Colors.preto,
        fontFamily: Fonts.InterBold,
    }
})
export default Message;