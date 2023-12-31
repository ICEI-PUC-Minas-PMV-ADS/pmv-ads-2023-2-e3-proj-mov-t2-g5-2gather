import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../contexts/UserContext";
import { Divider } from "react-native-paper";
import { GetUserList } from '../services/user.services';
import {CheckBox} from 'react-native-elements';
import { Appbar } from 'react-native-paper';

export default function NewGroup ({ navigation }) {
  
  const [contacts, setContacts] = useState([]);
  const [contactsRef, setContactsRef] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const { id } = useUser();

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


useEffect(() => {
  getContacts();
}, []);


useEffect(() => {
  // Navegue para a tela CreateNewGroup quando um contato for selecionado
  if (selectedContacts.length > 0) {
    navigation.navigate("CreateNewGroup", { selectedContacts });
  }
}, [selectedContacts]);

{/*
useEffect(() => {
  // Verificar se o usuário Admin não está na lista de contatos selecionados
  const adminContact = contacts.find((contact) => contact.id === id);
  if (adminContact && !selectedContacts.some((selected) => selected.id === id)) {
    setSelectedContacts((prev) => [adminContact, ...prev]);
  }

  // Navegue para a tela CreateReceivers quando um contato for selecionado
  if (selectedContacts.length > 0) {
    navigation.navigate("CreateNewGroup", { selectedContacts });
  }
}, [selectedContacts]);
*/}


  const defaultImage = require('../assets/profile.png');
  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Image
        style={styles.contactPhoto}
        source={{ uri: item.photo || null }}
        defaultSource={defaultImage}
      />
      <View style={styles.contactTextContainer}>
        <Text style={styles.contactText}>{item.name}</Text>
      </View>
      <TouchableOpacity>
        <CheckBox
          style={styles.checkBox}
          containerStyle={styles.checkBoxContainer}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={item.checked} // Use item.checked instead of this.state.checked
          onPress={() => {
            const updatedContacts = contacts.map((contact) =>
              contact.id === item.id
                ? { ...contact, checked: !contact.checked }
                : contact
            );
            setContacts(updatedContacts);

            // Adicione ou remova o contato da lista de contatos selecionados
            const isSelected = !item.checked;
            if (isSelected) {
              setSelectedContacts((prev) => [...prev, item]);
            } else {
              setSelectedContacts((prev) =>
                prev.filter((contact) => contact.id !== item.id)
              );
            }
          }}
        />
      </TouchableOpacity>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction
            onPress={() => {
              navigation.navigate("Homepage");
            }}
          />
          <View style={styles.rowContainer}>
            <Text style={styles.titleHeader}>
              Adicione participantes ao Grupo
            </Text>
          </View>
        </Appbar.Header>
        <View style={styles.searchBar}>
          <TextInput
            onChangeText={(value) => {
              setContacts(
                contactsRef.filter((obj) =>
                  obj.name.toLowerCase().includes(value.toLowerCase())
                )
              );
            }}
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
  },

  containerHeader: {
    backgroundColor: "#2368A2",
    padding: 0,
    borderBottomWidth: 1,
    borderColor: "#BBB",
  },

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  header: {
    backgroundColor: "#2368A2",
    width: "100%",
  },

  titleHeader: {
    color: "#FFFCF4",
    fontSize: 20,
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
    marginVertical: -21,
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
    backgroundColor: "transparent",
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
    width: "80%",
    height: 50,
    alignSelf: "center",
    marginBottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonLoginText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});