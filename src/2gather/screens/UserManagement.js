import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import CreateUser from '../screens/CreateUser';
import EditUser from '../screens/EditUser';
import InactivateUser from '../screens/InactivateUser';
import { useNavigation } from '@react-navigation/native';

export default function UserManagement() {
  const navigation = useNavigation();

  const handleNavigation = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.containerBody}>
      <View style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => {navigation.navigate("Homepage")}} />
          <View style={styles.rowContainer}>
            <Text style={styles.titleHeader}>Gerenciamento de usuários</Text>
          </View>
        </Appbar.Header>
      </View>

      <View style={styles.containerMain}>
        <Text style={styles.titleMain}>Selecione a opção desejada:</Text>
        <TouchableHighlight
          style={styles.optionContainer}
          underlayColor="transparent"
          onPress={() => {
            console.log('Botão "Criar usuário" pressionado');
            handleNavigation('CreateUser'); 
          }}
        >
          <View style={styles.optionContainer}>
            <Icon name="user-plus" style={styles.optionIcon} />
            <Text style={styles.optionText}>Criar usuário</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.optionContainer}
          underlayColor="transparent"
          onPress={() => {
            console.log('Botão "Editar usuário" pressionado');
            handleNavigation('EditUser'); 
          }}
        >
          <View style={styles.optionContainer}>
            <Icon name="edit" style={styles.optionIcon} />
            <Text style={styles.optionText}>Editar usuário</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.optionContainer}
          underlayColor="transparent"
          onPress={() => {
            console.log('Botão "Inativar usuário" pressionado');
            handleNavigation('InactivateUser'); 
          }}
        >
          <View style={styles.optionContainer}>
            <Icon name="ban" style={styles.optionIcon} />
            <Text style={styles.optionText}>Inativar usuário</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
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
  },
  containerMain: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f3f5',
  },
  titleMain: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
  },
});
