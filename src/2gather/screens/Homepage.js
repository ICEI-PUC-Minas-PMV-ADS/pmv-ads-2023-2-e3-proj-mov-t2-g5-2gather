import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Homepage() {
  const navigation = useNavigation();

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
          // onPress={}
        >
          Lista de Transmissão
        </Text>
        <Text 
          style={styles.groupText}
          // onPress={}
        >
          Novo Grupo
        </Text>
      </View>

      {/* View para Lista de Conversas*/}
      <View style={styles.whiteContainer}>
        <FlatList
          // renderItem={/* render function for conversations */}
          // keyExtractor={/* key extractor for conversations */}
          style={styles.conversationList}
        />
      </View>

      {/* Barra Inferior */}
      <View style={styles.bottomBar}>
  <TouchableOpacity style={styles.bottomBarButton}>
    <Icon name="user" size={30} color="#FFFFFF" />
    <Text style={styles.buttonTextSmall}
    onPress={() => navigation.navigate('UserManagement')}>
      Gerenciamento de Usuário</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.bottomBarButton}>
    <Icon name="address-book" size={30} color="#FFFFFF" />
    <Text style={styles.buttonTextSmall}>Contatos</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.bottomBarButton}>
    <Icon name="cog" size={30} color="#FFFFFF" />
    <Text style={styles.buttonTextSmall}>Configurações</Text>
  </TouchableOpacity>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2368A2',
  },
  searchBar: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    backgroundColor: '#1a4971',
    color: '#fffcf4',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  groupBroadcastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#2368A2',  // mesma cor de fundo
  },
  broadcastText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  groupText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: '#f1f3f5',  
  },
  conversationList: {
    flex: 1,
  },
  bottomBar: {
    flexDirection: 'row',
    height: 100,  // altura fixa
    backgroundColor: '#2368A2',
  },
  bottomBarButton: {
    flex: 1,  // 1/3
    alignItems: 'center',  
    justifyContent: 'center',  
    margin: 10, 
    borderRadius: 10,  
  },
  buttonTextSmall: {
    fontSize: 12,  
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',  
  },
});
