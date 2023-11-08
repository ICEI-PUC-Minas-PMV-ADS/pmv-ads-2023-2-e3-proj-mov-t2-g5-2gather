import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Divider } from "react-native-paper";
import { GetListYourGroups } from '../services/group.services';
import { GetTransmissionList } from '../services/group.services';
import { GetMessages } from '../services/message.service';

export default function Homepage() {
  const navigation = useNavigation();

//Listagem dos grupos, listas e mensagens no qual participa e estão ativos.
const [yourGroups, setYourGroups] = useState([]);
const [yourLists, setYourLists] = useState([]);
const [yourMessages, setYourMessages] = useState([]);

//Buscar Grupos ativos 
const getYourGroups = async () => {
  try {      
      const result = await GetListYourGroups() || [];
      setYourGroups(result);
  } catch (error) {
      console.log(error)
  } finally {  
      
  }
};

useEffect(() => {
getYourGroups();
}, []);


//Buscar Listas de Transmissão ativas
const getYourLists = async () => {
  try {      
      const result = await GetTransmissionList() || [];
      setYourLists(result);
  } catch (error) {
      console.log(error)
  } finally {  
      
  }
};

useEffect(() => {
getYourLists();
}, []);

//Buscar Mensagens ativas
const getYourMessages = async () => {
  try {      
      const result = await GetMessages() || [];
      setYourMessages(result);
      console.log(result)
  } catch (error) {
      console.log(error)
  } finally {  
      
  }
};

useEffect(() => {
getYourMessages();
}, []);



const defaultImage = require('../assets/group.png');
const renderItem = ({ item }) => (
  <TouchableOpacity onPress={() => navigation.navigate('GroupConversation', {id: item.id})}>{/*handleItemPress(item)}>*/}
    <View style={styles.contactItem}> 
    <Image style={styles.contactPhoto} source={{ uri: item.photo || null }} defaultSource={defaultImage} />     
    <Text style={styles.contactText}>{item.title}</Text>
  </View>
  </TouchableOpacity>
);



//Listagem das Listas de Transmissão que participa e estão ativas.




return (
  <View style={styles.container}>
    {/* Barra de Pesquisa */}
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar"
        placeholderTextColor="#aaa"
      />
    </View>

    {/* View para Novo Grupo e Lista de Transmissão */}
    <View style={styles.groupBroadcastContainer}>
      <Text 
        style={styles.broadcastText}
        onPress={() => navigation.navigate('BroadcastCreate')}
      >
        Lista de Transmissão
      </Text>
      <Text 
        style={styles.groupText}
        onPress={() => navigation.navigate('NewGroup')}
      >
        Novo Grupo
      </Text>
    </View>

    {/* View para Lista de Conversas
    <View style={styles.whiteContainer}>
      <FlatList
        // renderItem={/* render function for conversations
        // keyExtractor={/* key extractor for conversations 
        style={styles.conversationList}
      />
    </View>*/}

    <View style={styles.container1}>
      <ScrollView>
      <FlatList
        contentContainerStyle={styles.itemList}
        data={[...yourGroups, ...yourLists, ...yourMessages]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        inverted={false}
        ItemSeparatorComponent={() => (
          <Divider style={{ height: 1, backgroundColor: "grey" }} />
        )}
      />
      </ScrollView>
    </View>

    {/* Barra Inferior */}
    <View style={styles.bottomBar}>
<TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate('UserManagement')}>
  <Icon name="user" size={30} color="#FFFFFF" />
  <Text style={styles.buttonTextSmall}>
    Gerenciamento de Usuário</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate('Contacts')}>
  <Icon name="address-book" size={30} color="#FFFFFF"/>
  <Text style={styles.buttonTextSmall}>
    Contatos
    </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate('Profile')}>
  <Icon name="cog" size={30} color="#FFFFFF" />
  <Text style={styles.buttonTextSmall}>
    Configurações
  </Text>
</TouchableOpacity>
</View>
  </View>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2368A2",
    },
    searchBar: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
    },
    searchInput: {
      backgroundColor: "#1a4971",
      color: "#fffcf4",
      borderRadius: 10,
      padding: 10,
      fontSize: 16,
    },
    groupBroadcastContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
      backgroundColor: "#2368A2", // mesma cor de fundo
    },
    broadcastText: {
      fontSize: 18,
      color: "#FFFFFF",
    },
    groupText: {
      fontSize: 18,
      color: "#FFFFFF",
    },
    whiteContainer: {
      flex: 1,
      backgroundColor: "#f1f3f5",
    },
    conversationList: {
      flex: 1,
    },
    bottomBar: {
      flexDirection: "row",
      height: 100, // altura fixa
      backgroundColor: "#2368A2",
    },
    bottomBarButton: {
      flex: 1, // 1/3
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
      borderRadius: 10,
    },
    buttonTextSmall: {
      fontSize: 12,
      color: "#FFFFFF",
      fontWeight: "bold",
      textAlign: "center",
    },

    // Style do FlatList:
    container1: {
      flex: 1,
      backgroundColor: "#F1F3F5",
      //borderRadius: 15,
      marginVertical: 10,
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
