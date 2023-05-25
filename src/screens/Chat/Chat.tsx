import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native'
import Container from '../../components/System/Container';
import Header from '../../components/System/Header';
import InputMessage from '../../components/Inputs/InputMessage';
import { Colors } from '../../themes/Colors';
import Message from '../../components/System/Message';


const Chat = () => {

    return (
        <Container>
            <Header />
            <View
                style={styles.scrollContainer}>
                <Message
                    type='bot'
                    message='Olá André, me chamo Beto, no que posso te ajudar?'
                    stateMessageBot='ready'
                />
                <Message
                    type='user'
                    message='Qual o melhor tipo de solo para a platação de soja' />
                <Message
                    type='bot'
                    stateMessageBot='creating' />
            </View>
            <View style={styles.inputBorderProtect}>
                <InputMessage
                    style={styles.inputContainer} />
            </View>
        </Container>
    );
}
const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        justifyContent:"flex-end"
    },
    inputBorderProtect: {
        width: "100%",
        paddingVertical: 8,
        backgroundColor: Colors.verde2,
    },
    inputContainer: {
        marginBottom: 15,

    }
})
export default Chat;