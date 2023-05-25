import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Alert } from 'react-native'
import Container from '../../components/System/Container';
import Header from '../../components/System/Header';
import InputMessage from '../../components/Inputs/InputMessage';
import { Colors } from '../../themes/Colors';
import Message from '../../components/System/Message';
import { ToastyMessage } from '../../components/System/ToastyMessage';
import { CHAT_GPD_API_KEY } from '../../security/chat_api';
import { useRoute } from '@react-navigation/native';


const API_KEY = CHAT_GPD_API_KEY;

const Chat = () => {

    const { params } = useRoute();

    const { name } = params as { name: string };


    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState({
        content: "",
        type: "user",
    });
    const [loading, setLoading] = useState(false);

    const updateMessages = (type: "user" | "bot", newMessage?: string) => {
        let previewMessages = messages;
        previewMessages.push(newMessage ? newMessage : message);
        setMessages(previewMessages);
        if (type == "user") {
            handleFetchTags();
        }
    }

    const handleFetchTags = () => {
        setLoading(true);
        setMessage({
            content: "",
            type: "user",
        })
        fetch("https://api.openai.com/v1/chat/completions", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    name: "User",
                    role: "user",
                    content: message.content
                }],
                temperature: 0.22,
                max_tokens: 500,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            }),
        })
            .then(response => response.json())
            .then((data) => updateMessages(
                "bot",
                data.choices[0].message,
            ))
            .catch((error) => {
                console.log(error);
                ToastyMessage('Não foi possível realizar a mensagem.')
            })
            .finally(() => setLoading(false));
    }

    const _renderItem = ({ item }) => {
        return (
            <Message
                type={item.type}
                message={item.content}
            />)
    }

    useEffect(() => {
        setMessages([])
    }, [])


    return (
        <Container>
            <Header
            />
            <View
                style={styles.scrollContainer}>
                <FlatList
                    style={styles.flatListContainer}
                    data={messages}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={_renderItem}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => <Message
                        type='bot'
                        message={`Olá ${name}, meu nome é Beto, em que posso ajudar`} />
                    }
                    ListFooterComponent={() =>
                        loading && (
                            <Message
                                type='bot'
                                stateMessageBot={loading} />
                        )
                    }
                />

            </View>
            <View style={styles.inputBorderProtect}>
                <InputMessage
                    value={message.content}
                    onChangeText={(t) => setMessage({ content: t, type: "user" })}
                    onSendPress={() => updateMessages("user")}
                    style={styles.inputContainer} />
            </View>
        </Container>
    );
}
const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        justifyContent: "flex-end"
    },
    inputBorderProtect: {
        width: "100%",
        paddingVertical: 8,
        backgroundColor: Colors.verde2,
    },
    inputContainer: {
        marginBottom: 15,

    },
    flatListContainer: {
        flex: 1,
        paddingTop: 20,
    }
})
export default Chat;