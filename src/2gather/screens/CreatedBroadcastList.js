import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { useUser } from '../contexts/UserContext';
import { useToast } from '../contexts/ToastContext'; //toast

export default function BroadcastList({ navigation }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const { user, name } = useUser();
  const { showToast } = useToast(); //toast
  // const userName = user?.name || 'Carregando...';
  const userName = name;
  const userId = user?.id;
  const isAdmin = userId === user?.idAdmin;
  // const isAdmin = user?.isAdmin; //admin off

  const handleSendMessage = () => {
    if (isAdmin && currentMessage.trim() !== '') {
      const timestamp = new Date();
      const timeString = `${timestamp
        .getHours()
        .toString()
        .padStart(2, '0')}:${timestamp
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          userName: userName,
          content: currentMessage,
          time: timeString,
        },
      ]);
      setCurrentMessage('');
      showToast('Lista de transmissão', userName, '2Gather'); //toast
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerBody}
    >
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.navigate('Homepage')} />
        <Text style={styles.titleHeader}>Nome da Lista</Text>
      </Appbar.Header>

      <View style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View key={index} style={styles.messageContainer}>
            <Text style={styles.userName}>{message.userName}</Text>
            <Text style={styles.message}>{message.content}</Text>
            <Text style={styles.messageTime}>{message.time}</Text>
          </View>
        ))}
      </View>

      <View style={styles.chatInputContainer}>
        <TextInput
          value={currentMessage}
          onChangeText={isAdmin ? setCurrentMessage : null}
          style={styles.chatInput}
          placeholder={
            isAdmin
              ? 'Digite sua mensagem...'
              : 'Apenas um admin pode enviar mensagens'
          }
          onSubmitEditing={handleSendMessage}
          editable={isAdmin}
        />
        <TouchableOpacity
          onPress={handleSendMessage}
          disabled={!isAdmin}
          style={!isAdmin ? styles.sendButtonDisabled : styles.sendButton}
        >
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
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
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    backgroundColor: '#FFFCF4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#333',
  },
  messageTime: {
    fontSize: 10,
    color: '#888',
    alignSelf: 'flex-end',
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#2368A2',
  },
  chatInputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: '#EEE',
  },
  chatInput: {
    flex: 1,
    backgroundColor: '#F1F3F5',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#2368A2',
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#CCCCCC',
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },
  sendButtonText: {
    color: 'white',
  },
});
