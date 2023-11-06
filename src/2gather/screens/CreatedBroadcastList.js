import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import { Appbar } from 'react-native-paper';
import Toast from '../components/Toast';

export default function BroadcastList({ navigation }) {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [hasSentMessage, setHasSentMessage] = useState(false);
    const [creationDate, setCreationDate] = useState(new Date());
    const [toastVisible, setToastVisible] = useState(false);

    const numberOfParticipants = 2;

    const formatDate = (date) => {
        const today = new Date();
        if (date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()) {
            return 'Hoje';
        }
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    const showBroadcastNotification = () => {
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
    };

    const handleToastClick = () => {
        setToastVisible(false);
        navigation.navigate('Homepage');
    };

    const handleSendMessage = () => {
        if (currentMessage.trim() !== '') {
            const timestamp = new Date();
            const timeString = `${timestamp.getHours().toString().padStart(2, '0')}:${timestamp.getMinutes().toString().padStart(2, '0')}`;

            setMessages(prevMessages => [...prevMessages, { content: currentMessage, time: timeString }]);
            setCurrentMessage('');

            if (!hasSentMessage) {
                setHasSentMessage(true);
                showBroadcastNotification();
            }
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.containerBody}>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => navigation.navigate("Homepage")} />
                <Text style={styles.titleHeader}>Nome da Lista</Text>
            </Appbar.Header>

            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{formatDate(creationDate)}</Text>
            </View>

            <View style={styles.messagesContainer}>
                {!hasSentMessage && (
                    <Text style={styles.broadcastMessage}>
                        Você criou uma lista de transmissão com 2 destinatários. Só você pode enviar mensagens aqui.
                    </Text>
                )}
                {messages.map((message, index) => (
                    <View key={index} style={styles.messageContainer}>
                        <Text style={styles.message}>
                            {message.content}
                        </Text>
                        <Text style={styles.messageTime}>
                            {message.time}
                        </Text>
                    </View>
                ))}
            </View>

            <View style={styles.chatInputContainer}>
                <TextInput
                    value={currentMessage}
                    onChangeText={setCurrentMessage}
                    style={styles.chatInput}
                    placeholder="Mensagem"
                    onSubmitEditing={handleSendMessage}
                />
                <TouchableOpacity onPress={showBroadcastNotification}>
                    <Text style={styles.sendButton}>Enviar</Text>
                </TouchableOpacity>
            </View>

            {toastVisible && 
                <Toast 
                    visible={toastVisible} 
                    message={`Lista: Mensagem enviada para ${numberOfParticipants} participantes`} 
                    appName={'2Gather'} 
                    showSenderName={false}
                    style={{ zIndex: 9999, position: 'absolute', top: 0 }}
                    onPress={handleToastClick}
                />
            }
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    containerBody: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: '#2368A2',
    },
    titleHeader: {
        marginLeft: 10,
        fontSize: 18,
        color: '#FFFCF4',
    },
    broadcastMessage: {
        backgroundColor: '#F1F3F5',
        borderRadius: 5,
        margin: 10,
        padding: 10,
        textAlign: 'center',
    },
    messagesContainer: {
        flex: 1,
        padding: 10,
    },
    message: {
        backgroundColor: '#FFFCF4',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    chatInputContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    chatInput: {
        flex: 1,
        backgroundColor: '#ADB5BD',
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#2368A2',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    messageContainer: {
        backgroundColor: '#FFFCF4',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    messageTime: {
        fontSize: 10,
        color: '#888',
        alignSelf: 'flex-end',
    },
    dateContainer: {
        backgroundColor: '#ADB5BD',
        borderRadius: 5,
        margin: 10,
        padding: 5,
        alignSelf: 'center',
    },
    dateText: {
        fontSize: 14,
    },
});