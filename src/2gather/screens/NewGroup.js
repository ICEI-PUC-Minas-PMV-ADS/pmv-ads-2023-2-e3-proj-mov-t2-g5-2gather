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
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../contexts/UserContext";
import { Divider } from "react-native-paper";
import { GetUserList } from '../services/user.services';
import {CheckBox} from 'react-native-elements';

export default function NewGroup ({ navigation }) {
  
  const [contacts, setContacts] = useState([]);
  const [contactsRef, setContactsRef] = useState([]);


  
  {/*
  const [groupName, setGroupName] = useState('');
  const [selectedContacts, setSelectedContacts] = useState([]);

  const createGroup = async () => {
    // Crie o grupo com o nome e os membros selecionados
    const groupData = {
      name: groupName,
      members: selectedContacts,
    };

    await firebase.database().ref('groups').push(groupData);

    // Navegue de volta para a tela principal ou de grupos
    navigation.goBack();
  };



*/}

  const getContacts = async () => {
    try {      
        const result = await GetUserList() || [];
        setContacts(result);
        setContactsRef(result);
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {  
        
    }
};


useEffect(() => {
  getContacts();
}, []);


  const defaultImage = require('../assets/profile.png');
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.contactItem}> 
      <Image style={styles.contactPhoto} source={{ uri: item.photo || null }} defaultSource={defaultImage} />     
      <View style={styles.contactTextContainer}>
        <Text style={styles.contactText}>{item.name}</Text>
      </View>
      <CheckBox style={styles.checkBox}
            containerStyle={styles.checkBoxContainer}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={item.checked} // Use item.checked instead of this.state.checked
            onPress={() => {
            // Update the 'checked' property of the corresponding item
            const updatedContacts = contacts.map((contact) =>
              contact.id === item.id
                ? { ...contact, checked: !contact.checked }
                : contact
            );
            setContacts(updatedContacts);
          }}
        />    
    </View>
    </TouchableOpacity>
  );
    

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText} onPress={() => navigation.goBack()}>
          Adicionar participantes ao Grupo
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




     {/*Botão Provisório*/}

     <TouchableOpacity style={styles.buttonForecast} onPress={() => navigation.navigate("CreateNewGroup")}>
      <Text style={styles.buttonLoginText}>Go to CreateNewGroup Screen</Text>
      </TouchableOpacity> 

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

  contactTextContainer: {
    flex: 1,
  },

  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginRight: 10, 
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


  //Botão Provisório
  buttonForecast: {
    backgroundColor: "#1A4971",
    borderRadius: 10,
    paddingVertical: 8, 
    width: '80%',
    height: 50,
    alignSelf: 'center',
    marginBottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonLoginText: {
    fontSize: 18,
    color: '#FFFFFF',
  }

});