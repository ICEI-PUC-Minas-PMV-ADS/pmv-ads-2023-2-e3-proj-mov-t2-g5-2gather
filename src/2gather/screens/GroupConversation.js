import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import { Appbar, IconButton, Tooltip, Button, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { GetGroupDetails } from '../services/group.services';

export default function GroupConversation({ route }) {
  const navigation = useNavigation();
  const groupId = route.params ? route.params : {}
  const [idGroup, setIdGroup] = useState('');
  const [title, setTitle] = useState('');

  const getGroup = async () => {
    try {
      const result = await GetGroupDetails({ idGroup: groupId.id }) || [];
      setTitle(result.title)
      setIdGroup(result.id)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (groupId) {
      getGroup()
    }
    else {
      console.log('Missing group id')
    }
  }, []);

  return (
    
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('GroupInfo', {id: groupId.id})}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.navigate("Homepage")} />
        <Avatar.Icon size={24} icon="account-group" />
        <Text style={styles.titleHeader}>{title}</Text>
      </Appbar.Header>
    </TouchableOpacity>
      <View style={styles.containerMain}>
        <Text style={styles.titleMain}>
            Você criou este grupo.
        </Text>
      </View>
      <TextInput
      style={styles.input}
      placeholder="Comece a digitar"
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#2368A2',
  },
  titleHeader: {
    color: '#FFFCF4',
    fontSize: 20,
  },
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  titleMain: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
    backgroundColor: 'lightgrey',
    padding: 5,
  },
  buttonContainer: {
    backgroundColor: '#2368A2',
    padding: 16,
    borderRadius: 8,
    marginTop: '70%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    padding: 2,
    fontSize: 16,
    margin: 10,
  },
  buttonIcon: {
    fontSize: 20,
    color: '#F1F3F5',
    marginRight: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFCF4',
  },
  input:{
    backgroundColor: '#F1F3F5',
    margin: 10,
    padding: 10,
    color:'#868E96',
    borderRadius: 15,
    height: 40,
  },
});
