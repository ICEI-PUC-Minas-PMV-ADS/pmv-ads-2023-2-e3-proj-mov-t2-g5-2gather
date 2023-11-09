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
import { getOrCreatePrivateGroup } from '../services/group.services';
import { getAccesKey } from '../services/localDb/user.services';
import { Appbar } from 'react-native-paper';

export default function Contacts({ navigation }) {
  const { name, id, privateE2eContext  } = useUser();
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

  const handleNavigation = async (partnerId, partnerName, partnerPubKey) => {
    try { 
      const result = await getOrCreatePrivateGroup({ idPartner: partnerId, idSelf: id})
      socket.emit("createRoom", result.id, partnerName);
      navigation.navigate("Chat", {
        room: result,
        roomId: result.id,
        partnerName: partnerName,
        partnerPke: partnerPubKey,
      });

    } catch (error) {
      alert('error')
      console.log(error)
    }
  };

useEffect(() => {
  getContacts();
}, []);

  const defaultImage = require('../assets/profile.png');
  const renderItem = ({ item }) => (

    <View style={styles.contactItem}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile', {item})}>
        <Image
          style={styles.contactPhoto}
          source={{ uri: item.photo || null }}
          defaultSource={defaultImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => handleNavigation(item.id, item.name, item.pke)}>
        <Text style={styles.contactText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
    

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => {navigation.navigate("Homepage")}} />
          <View style={styles.rowContainer}>
            <Text style={styles.titleHeader}>Nova Conversa</Text>
          </View>
	      </Appbar.Header>
	      <View style={styles.searchBar}>
          <TextInput onChangeText={(value) => {setContacts(contactsRef.filter(obj=>obj.name.toLowerCase().includes(value.toLowerCase())))}}
          
            style={styles.searchInput}
            placeholder="Pesquisar"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>
      
      <View style={styles.container1}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    //padding: 8,
  },

  containerHeader: {
    backgroundColor: '#2368A2',
    padding: 0,
    borderBottomWidth: 1,
    borderColor: '#BBB',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  header: {
    backgroundColor: '#2368A2',
    width: '100%',
  },

  titleHeader: {
    color: '#FFFCF4',
    fontSize: 20,
  },

  searchBar: {
    padding: 10,
    marginBottom: 25,
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
    marginTop: -25,
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
