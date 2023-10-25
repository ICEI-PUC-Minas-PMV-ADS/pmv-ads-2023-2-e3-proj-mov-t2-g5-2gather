import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../contexts/UserContext";
import { Divider } from "react-native-paper";
import { GetUserList } from '../services/user.services';
import socket from "../services/socket";

export default function Contacts({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const [contactsRef, setContactsRef] = useState([]);

  const getContacts = async () => {
    try {      
        const result = await GetUserList() || [];
        setContacts(result);
        setContactsRef(result);
    } catch (error) {
        console.log(error)
    } finally {  
        
    }
  };
  const handleNavigation = (partnerId, partnerName) => {
    socket.emit("createRoom", partnerId, partnerName);
    navigation.navigate("Chat", {
      id: partnerId,
      name: partnerName,
    });
  };

useEffect(() => {
  getContacts();
}, []);

  const defaultImage = require('../assets/profile.png');
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleNavigation(item.id, item.name)}>
      <View style={styles.contactItem}> 
      <Image style={styles.contactPhoto} source={{ uri: item.photo || null }} defaultSource={defaultImage} />     
      <Text style={styles.contactText}>{item.name}</Text>
    </View>
    </TouchableOpacity>
  );
    

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText} onPress={() => navigation.goBack()}>
          Nova Conversa
        </Text>
        <View style={styles.searchBar}>
          <TextInput onChangeText={(value) => {setContacts(contactsRef.filter(obj=>obj.name.toLowerCase().includes(value.toLowerCase())))}}
          
            style={styles.searchInput}
            placeholder="Pesquisar"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>
      <View style={styles.container1}>
        <ScrollView>
        <FlatList
          contentContainerStyle={styles.itemList}
          data={contacts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          inverted={false}
          ItemSeparatorComponent={() => (
            <Divider style={{ height: 1, backgroundColor: "grey" }} />
          )}
        />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },

  header: {
    padding: 10,
    height: 135,
    backgroundColor: "#2368A2",
    justifyContent: "space-between",
  },

  headerText: {
    fontSize: 20,
    color: "#FFFCF4",
    marginTop: 7,
  },
  searchBar: {
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: "#1a4971",
    color: "#fffcf4",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },

  container1: {
    flex: 1,
    backgroundColor: "#F1F3F5",
    borderRadius: 15,
    marginVertical: -25,
  },

  itemList: {
    margin: 25,
    gap: 25,
  },

  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  contactPhoto: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },

  contactText: {
    fontSize: 16,
  },
});
