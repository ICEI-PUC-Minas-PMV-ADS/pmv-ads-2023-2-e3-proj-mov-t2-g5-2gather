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
import { GetListYourGroups } from '../services/group.services';

export default function YourGroups ({ navigation }) {
  
  const [yourGroups, setYourGroups] = useState([]);
 
  const getYourGroups = async () => {
    try {      
        const result = await GetListYourGroups() || [];
        setYourGroups(result);
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {  
        
    }
};

useEffect(() => {
  getYourGroups();
}, []);




{/* // Navegar para a tela de ABRIR O GRUPO ao pressionar (item).
const handleItemPress = (item) => {
  //o nome da Screen precisa ser confirmado, assim como a identificação do Grupo...
  navigation.navigate('Talks', { groupId: item.id });
};
*/}




  const defaultImage = require('../assets/group.png');
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log(item)}>{/*handleItemPress(item)}>*/}
      <View style={styles.contactItem}> 
      <Image style={styles.contactPhoto} source={{ uri: item.photo || null }} defaultSource={defaultImage} />     
      <Text style={styles.contactText}>{item.title}</Text>
    </View>
    </TouchableOpacity>
  );
    

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText} onPress={() => navigation.goBack()}>
          Seus Grupos
        </Text>
      </View>
      <View style={styles.container1}>
        <ScrollView>
        <FlatList
          contentContainerStyle={styles.itemList}
          data={yourGroups}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          inverted={false}
          ItemSeparatorComponent={() => (
            <Divider style={{ height: 1, backgroundColor: "grey" }} />
          )}
        />
        </ScrollView>
      </View>




     {/*Botão Provisório

  <TouchableOpacity style={styles.buttonForecast} onPress={() => navigation.navigate("NewList")}>
  <Text style={styles.buttonLoginText}>Go To NewList Screen</Text>
      </TouchableOpacity> */}

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
    height: 85,
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
    backgroundColor: "#2368A2",
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



});