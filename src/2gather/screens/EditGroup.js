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
import { Appbar } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../contexts/UserContext";
import { Divider } from "react-native-paper";
import { GetUserList } from '../services/user.services';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { EditGroup } from '../services/group.services';

export default function CreateNewGroup({ route, navigation }) {
  const { id } = useUser();
  const { group } = route.params || {};
  const [contacts, setContacts] = useState([]);


  const [contactsRef, setContactsRef] = useState([]);
  const [selectedContactsState, setSelectedContacts] = useState([]);

  const [markedContacts, setMarkedContacts] = useState([]);
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [marked, setMarked] = useState({});

  const getContacts = async () => {
    try {

      if (group) {
        setSelectedContacts(group.members)
        setMarkedContacts(group.members.map((member) => member.id))
        setTitle(group.title)
      }
      else {
        console.log('Missing group data')
      }
      const result = await GetUserList() || [];

      const participantes = group.members.map((member) => member.id)
      const array = result.map((member) => member.id)
      const markeds = array.reduce((obj, chave) => {
        if (participantes.includes(chave)) {
          obj[chave] = true;
        }
        else {
          obj[chave] = false;
        }
        return obj;
      }, {});
      setMarked(markeds)

      setContacts(result);
      setContactsRef(result);

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const defaultImage = require('../assets/profile.png');

  const toogleCheckbox = (item) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === item.id
        ? { ...contact, checked: !contact.checked }
        : contact
    );
    setContacts(updatedContacts);

    marked[item.id] = !marked[item.id]

    const isSelected = !item.checked;
    if (isSelected) {
      setSelectedContacts((prev) => [...prev, item]);
    } else {
      setSelectedContacts((prev) =>
        prev.filter((contact) => contact.id !== item.id)
      );
    }
  }

  const checkIfIsMember = (item) => {
    if (item.id in marked) {
      return marked[item.id];
    }
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.contactItem}>
        <Image
          style={styles.contactPhoto}
          source={{ uri: item.photo || null }}
          defaultSource={defaultImage}
        />
        <View style={styles.contactTextContainer}>
          <Text style={styles.contactText}>{item.name}</Text>
        </View>
        <CheckBox
          style={styles.checkBox}
          containerStyle={styles.checkBoxContainer}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={marked[item.id]} // Use item.checked instead of this.state.checked
          onPress={() => toogleCheckbox(item)
          }
        />
      </View>
    </TouchableOpacity>
  );

  const renderSelectedContacts = () => {
    const participants = contacts.map((contact) => {
      if (marked[contact.id] == true) {
        return contact
      }}).filter(elemento => elemento !== undefined);
    
    return (
      <View style={styles.selectedContactsContainer}>
        <ScrollView horizontal>
          {participants.map((participant) => 
              <View style={styles.selectedContactItem} key={participant.id}>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteSelectedContact(participant.id)}
                >
                  <Icon name="times-circle" size={24} color="red" />
                </TouchableOpacity>
                <Image
                  style={styles.selectedContactPhoto}
                  source={{ uri: participant.photo || null }}
                  defaultSource={defaultImage}
                />
                <Text style={styles.selectedContactText}>
                  {participant.name}
                </Text>
              </View>

          )}
        </ScrollView>
      </View>
    );
  };

  const handleDeleteSelectedContact = (contactId) => {
    // const updatedContacts = contacts.map((contact) =>
    //   contact.id === contactId ? { ...contact, checked: false } : contact
    // );
    // setContacts(updatedContacts);

    const updatedSelectedContacts = selectedContactsState.filter(
      (contact) => contact.id !== contactId
    );
    setSelectedContacts(updatedSelectedContacts);
    marked[contactId] = false
  };


  //Editar o grupo

  const handleEditGroup = async () => {
    const newParticipants = contacts.map((contact) => {
      if (marked[contact.id] == true){
        return contact.id
      }
    }).filter(elemento => elemento !== undefined);
    newParticipants.push(group.idAdmin)
    try {
      if (!title) {
        // Se o título não estiver preenchido, exibe o alerta
        setShowAlert(true);
        return;
      }
      const newGroup = {
        ...group,
        "title": title,
        participants: newParticipants,
      }

      const groupData = await EditGroup({ group: newGroup });

      alert("Grupo editado com sucesso");
      navigation.navigate('GroupInfo', {id: groupData.id})


    } catch (error) {
      console.log(error);

    } finally {

    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View style={styles.rowContainer}>
            <TextInput
              style={styles.nameInput}
              onChangeText={(text) => setTitle(text)}
              value={title}
              placeholder="Nome do grupo"
              placeholderTextColor="#aaa"
            />
          </View>
          <Text
            style={styles.headerTextTwo}
            onPress={handleEditGroup}
          >
            Editar
          </Text>
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

      {renderSelectedContacts()}

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

      {/*Botão Provisório
      <TouchableOpacity
        style={styles.buttonForecast}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={styles.buttonLoginText}>Go to NEXT Screen</Text>
      </TouchableOpacity>*/}


      {showAlert && (
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>Por favor, insira o nome do seu grupo!</Text>
          <TouchableOpacity
            style={styles.alertButton}
            onPress={() => setShowAlert(false)}
          >
            <Text style={styles.alertButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      )}


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
    backgroundColor: '#2368A2',
      padding: 0,
      borderBottomWidth: 1,
      borderColor: '#BBB',
      height: 185,
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '70%',
    },
    header: {
      backgroundColor: '#2368A2',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    titleHeader: {
      color: '#FFFCF4',
      fontSize: 20,
      alignSelf: 'center',
      padding: 10,
    },

  headerTextTwo: {
    fontSize: 18,
    color: "#FFFCF4",
    marginLeft: 15,
  },
  nameInput: {
    backgroundColor: "#1a4971",
    color: "#fffcf4",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginTop: 2,
    width: '100%',
    height: 45,
    },

  searchBar: {
    width: '64%',
    height: 45,
    marginLeft: 65,
    marginTop: 4,
  },

  searchInput: {
    backgroundColor: "#1a4971",
    color: "#fffcf4",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },

  selectedContactsContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#F1F3F5",
    borderRadius: 15,
    marginVertical: -27,
    height: 140,
  },
  deleteButton: {
    marginLeft: 10,
  },

  selectedContactItem: {
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
    borderBottomColor: "black",
    //height: 30,
    width: 75,
  },

  selectedContactPhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },

  selectedContactText: {
    fontSize: 16,
    textAlign: "center",
  },

  container1: {
    flex: 1,
    backgroundColor: "#F1F3F5",
    paddingBottom: 10,
    borderTopColor: 'black',
    borderTopWidth: 2,
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

  alertContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 300,
    padding: 20,
    backgroundColor: '#AAD4F5',
    borderRadius: 10,
    transform: [{ translateX: -150 }, { translateY: -100 }],
    elevation: 5,
  },

  alertText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
    alignItems: 'center',
  },

  alertButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },

  alertButtonText: {
    color: 'white',
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



})