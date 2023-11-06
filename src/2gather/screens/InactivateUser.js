import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Appbar } from 'react-native-paper';
import { GetUserList, UpdateUserStatus  } from '../services/user.services';

export default function InactivateUser({ navigation }) {
  const [userId, setUserId] = useState(''); 
  const [reason, setReason] = useState('');
  const [userList, setUserList] = useState([]); 

  useEffect(() => {
    async function fetchUserList() {
      try {
        const users = await GetUserList();
        setUserList(users);
      } catch (error) {
        console.error('Erro ao buscar a lista de usuários:', error);
      }
    }
    fetchUserList();
  }, []);

  const handleInactivateUser = async () => {
    if (userId && reason) {
      const success = await UpdateUserStatus({ userId: userId, reason: reason });
      if (success) {
        // inativação bem-sucedida
        alert('Usuário inativado com sucesso');
      } else {
        // tratar caso de falha na inativação
        console.log('Falha na inativação do usuário');
      }
    } else {
      // lidar com campos em branco ou validação
      console.log('Preencha todos os campos');
    }
  };

  return (
    <View style={styles.containerBody}>
      <View style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => navigation.navigate('UserManagement')} />
          <View style={styles.rowContainer}>
            <Text style={styles.title}>Inativar usuário</Text>
          </View>
        </Appbar.Header>
      </View>

      <View style={[styles.containerMain, { backgroundColor: '#F1F3F5' }]}>
        <Text style={styles.titleMain}>
          Seguindo os passos abaixo você irá INATIVAR o usuário
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Escolher usuário</Text>
          <Picker
            selectedValue={userId}
            onValueChange={(itemValue) => setUserId(itemValue)}
          >
            {userList.map((user) => (
              <Picker.Item
                key={user.id}
                label={user.email}
                value={user.id}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Motivo</Text>
          <TextInput
            style={[styles.input, { backgroundColor: 'white' }]}
            onChangeText={setReason}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#FAE29F', width: 89, height: 60 }]}
            onPress={handleInactivateUser}
          >
            <Text style={styles.buttonText}>Inativar</Text>
          </TouchableOpacity>

          <View style={{ width: 29 }}></View> 

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#ADB5BD', width: 104, height: 60 }]}
            onPress={() => {
              setUserId(''); 
              setReason(''); 
              navigation.navigate('UserManagement')
            }}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
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
  title: {
    color: '#FFFCF4',
  },
  containerMain: {
    margin: 20,
    padding: 20,
  },
  titleMain: {
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#BBB',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
