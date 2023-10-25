import React, { useLayoutEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ChatBox = ({ item }) => {
  const navigation = useNavigation();
  const [lastMessage, setLastMessage] = useState(null);

  useLayoutEffect(() => {
    if (item.messages.length > 0) {
      setLastMessage(item.messages[item.messages.length - 1]);
    }
  }, [item.messages]);

  const handleNavigation = () => {
    navigation.navigate("Messaging", {
      id: item.id,
      name: item.name,
    });
  };

  return (
    <Pressable style={styles.chatContainer} onPress={handleNavigation}>
      <Ionicons name="person-circle-outline" size={45} color="black" style={styles.avatar} />

      <View style={styles.rightContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.username}>{item.name}</Text>
          <Text style={styles.message}>
            {lastMessage ? lastMessage.text : "Tap to start chatting"}
          </Text>
        </View>
        <Text style={styles.time}>{lastMessage ? lastMessage.time : "now"}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: "white",
    height: 80,
    marginBottom: 10,
  },
  avatar: {
    marginRight: 15,
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    opacity: 0.7,
  },
  time: {
    opacity: 0.5,
  },
});

export default ChatBox;