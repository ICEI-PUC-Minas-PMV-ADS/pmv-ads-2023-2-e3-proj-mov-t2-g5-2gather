import React, { useState, useContext } from 'react';
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
import Toast from '../components/Toast';
import { useUser } from '../contexts/UserContext';

export default function BroadcastList({ navigation }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [toastVisible, setToastVisible] = useState(false);

  const { user } = useUser();
  const userName = user?.name || 'Carregando...'; // verificar a resposta da req

  const showBroadcastNotification = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() !== '') {
      const timestamp = new Date();
      const timeString = `${timestamp.getHours().toString().padStart(2, '0')}:${timestamp.getMinutes().toString().padStart(2, '0')}`;
      setMessages(prevMessages => [
        ...prevMessages,
        {
          userName: userName,
          content: currentMessage,
          time: timeString,
        },
      ]);
      setCurrentMessage('');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.containerBody}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.navigate("Homepage")} />
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
          onChangeText={setCurrentMessage}
          style={styles.chatInput}
          placeholder="Mensagem"
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity onPress={showBroadcastNotification}> 
        {/* handleSendMessage */}
          <Text style={styles.sendButton}>Enviar</Text>
        </TouchableOpacity>
      </View>

      {toastVisible && (
        <Toast
          visible={toastVisible}
          message="Mensagem enviada para a lista de transmissão."
          appName={"2Gather"}
          showSenderName={false}
          style={{ zIndex: 9999, position: "absolute", top: 0 }}
        />
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#2368A2",
  },
  titleHeader: {
    marginLeft: 10,
    fontSize: 18,
    color: "#FFFCF4",
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
    color: "#333",
  },
  messageTime: {
    fontSize: 10,
    color: "#888",
    alignSelf: "flex-end",
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#2368A2',
  },
  chatInputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderColor: "#EEE",
  },
  chatInput: {
    flex: 1,
    backgroundColor: "#F1F3F5",
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#2368A2",
    color: "white",
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
  },
});