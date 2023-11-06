import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessageBox({isPrivate, item, user }) {
  const isSelf = item.user === user;
  return (
    <View style={isSelf ? styles.wrapperSelf : styles.wrapperPartner}>
      <View style={styles.messageContainer}>
        <View style={isSelf ? styles.messageSelf : styles.messagePartner}>
			      <Text style={ isPrivate ? styles.hidden : styles.time}>{item.user}</Text>
          	<Text style={styles.messageText}>{item.text}</Text>
      		<Text style={styles.time}>{ item.bySocket ? item.time : item.date.split('T')[1].substring(0, 5) }</Text> 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
  wrapperSelf: {
    alignItems: "flex-end",
    marginBottom: 15,
  },
  wrapperPartner: {
    alignItems: "flex-start",
    marginBottom: 15,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
	maxWidth: "90%",
  },
  messageSelf: {
    backgroundColor: "#AAD4F5",
    padding: 10,
    borderRadius: 10,
    marginBottom: 2,
  },
  messagePartner: {
    backgroundColor: "#F1F3F5",
    padding: 10,
    borderRadius: 10,
    marginBottom: 2,
  },
  messageText: {
    fontSize: 16,
    color: "black",
  },
  photo: {
    marginRight: 10,
  },
  time: {
    color: "gray",
	  fontSize: 10,
  },
});