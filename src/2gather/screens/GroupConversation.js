import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Appbar, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GetGroupDetails } from "../services/group.services";
import { useUser } from "../contexts/UserContext";
import { useToast } from "../contexts/ToastContext";

export default function GroupConversation({ route }) {
  const navigation = useNavigation();
  const groupId = route.params ? route.params : {};
  const [idGroup, setIdGroup] = useState("");
  const [title, setTitle] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isGroupFocused, setIsGroupFocused] = useState(false);

  const { user, name } = useUser();
  const { showToast } = useToast();
  const userName = name;

  useFocusEffect(
    useCallback(() => {
      setIsGroupFocused(true);
      return () => setIsGroupFocused(false);
    }, [])
  );

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      const timestamp = new Date();
      const timeString = `${timestamp
        .getHours()
        .toString()
        .padStart(2, "0")}:${timestamp
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          userName: userName,
          content: currentMessage,
          time: timeString,
        },
      ]);
      setCurrentMessage("");
      if (!isGroupFocused) {
        showToast("Nova mensagem", userName, "2Gather");
      }
    }
  };

  const getGroup = async () => {
    try {
      const result = (await GetGroupDetails({ idGroup: groupId.id })) || [];
      setTitle(result.title);
      setIdGroup(result.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (groupId) {
      getGroup();
    } else {
      console.log("Missing group id");
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerBody}
    >
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("GroupInfo", { id: groupId.id })}
        >
          <Appbar.Header style={styles.header}>
            <Appbar.BackAction
              onPress={() => navigation.navigate("Homepage")}
            />
            <Avatar.Icon size={24} icon="account-group" />
            <Text style={styles.titleHeader}>{title}</Text>
          </Appbar.Header>
        </TouchableOpacity>
      </View>
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
          placeholder="Digite sua mensagem..."
          onSubmitEditing={handleSendMessage}
          editable={true}
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: "#FFFCF4",
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
    fontWeight: "bold",
    marginBottom: 4,
    color: "#2368A2",
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
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
  },
  sendButtonDisabled: {
    backgroundColor: "#CCCCCC",
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
  },
  sendButtonText: {
    color: "white",
  },
});
