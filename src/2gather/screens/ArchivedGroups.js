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
import { GetListArchivedGroups } from '../services/group.services';
import { Appbar } from 'react-native-paper';

export default function ArchivedGroups ({ navigation }) {
  
    const [archivedGroups, setArchivedGroups] = useState([]);
 
  const getArchivedGroups = async () => {
    try {      
        const result = await GetListArchivedGroups() || [];
        setArchivedGroups(result)
    } catch (error) {
        console.log(error)
    } finally {  
        
    }
};

useEffect(() => {
  getArchivedGroups();
}, []);



const handleItemPress = (item) => {
  navigation.navigate('GroupConversation', { groupId: item.id });
};




  const defaultImage = require('../assets/group.png');
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('GroupInfo', { id: item.id })}>
      <View style={styles.contactItem}> 
      <Image style={styles.contactPhoto} source={{ uri: item.photo || null }} defaultSource={defaultImage} />     
      <Text style={styles.contactText}>{item.title}</Text>
    </View>
    </TouchableOpacity>
  );
    

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.navigate("Profile")} />
        <Text style={styles.titleHeader}>Comunicações Arquivadas</Text>
      </Appbar.Header>
      <View style={styles.container1}>
       
          <FlatList
            contentContainerStyle={styles.itemList}
            data={archivedGroups}
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

  header: {
    backgroundColor: '#2368A2',
    height: 85,
    marginBottom: 18,
    padding: 0,
  },

  titleHeader: {
    color: '#FFFCF4',
    fontSize: 20,
  },

  container1: {
    flex: 1,
    backgroundColor: "#F1F3F5",
    borderRadius: 15,
    marginVertical: -27,
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


 //Provisório
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
 //Provisório



});
