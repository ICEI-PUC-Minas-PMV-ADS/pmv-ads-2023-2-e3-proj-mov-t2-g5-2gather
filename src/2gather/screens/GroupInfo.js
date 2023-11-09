import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Appbar, Avatar, Button, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { GetUserList } from '../services/user.services';
import { GetGroupDetails, ArchiveGroup } from '../services/group.services';

export default function GroupInfo({ route }) {
  const navigation = useNavigation();

  const item = route.params ? route.params : {};
  const [idGroup, setIdGroup] = useState("");
  const [title, setTitle] = useState("");
  const [participants, setParticipants] = useState([]);
  const [isArchived, setIsArchived] = useState(false);
  const [group, setGroup] = useState([]);

  const getGroup = async () => {
    try {
      const result = await GetGroupDetails({ idGroup: item.id }) || [];
      setTitle(result.title)
      setIdGroup(result.id)
      setGroup(result)
      setIsArchived(result.archive)

      setParticipants([
        ...participants,
        ...result.members
      ]);

    } catch (error) {
      console.log(error)
    }
  };


  useEffect(() => {
    if (item) {
      getGroup()
    }
  }, []);

  const handleArchiveGroup = () => {
    const archiveGroup = async () => {
      try {
        if (isArchived) {
          const result = await ArchiveGroup({ group: group, archive: false }) || [];
        } else {
          const result = await ArchiveGroup({ group: group, archive: true }) || [];
        }
        navigation.navigate('Homepage')
      } catch (error) {
        console.log(error)
      }
    };
    archiveGroup()
  };

  const defaultImage = require('../assets/profile.png');
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Chat', { roomId: item.id })}>
      <View style={styles.contactItem}>
        <Image style={styles.contactPhoto} source={{ uri: item.photo || null }} defaultSource={defaultImage} />
        <Text style={styles.contactText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction
          onPress={() => navigation.navigate('GroupConversation', { id: idGroup })}
        />
      </Appbar.Header>
      <View style={styles.groupHeader}>
        <Avatar.Icon size={100} icon="account-group" />
        <Text style={styles.titleHeader}>{title}</Text>
      </View>
      <View style={styles.containerMain}>
        <View style={styles.containerParticipants}>
          <Text style={styles.titleMain}>
            Participantes
          </Text>
          <Divider></Divider>
         
            <FlatList
              data={participants}
              renderItem={renderItem}
              keyExtractor={(item) => item}
            />
        
        </View>
        <View styles={styles.containerButtons}>
          <Button
            mode="contained"
            color={'#74D99F'}
            style={styles.button}
            icon="plus-circle-outline"
            onPress={() => navigation.navigate('EditGroup', { group: group })}>
            Editar
          </Button>

          <Button
            mode="contained"
            color={'#FAE29F'}
            style={styles.button}
            icon="minus-circle-outline"
            onPress={() => handleArchiveGroup()}>
            {isArchived == false ? 'Arquivar grupo' : 'Desarquivar grupo'}
          </Button>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f5',
  },
  header: {
    backgroundColor: '#2368A2',
  },
  groupHeader: {
    alignItems: 'center',
    backgroundColor: '#2368A2',
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  titleHeader: {
    color: '#FFFCF4',
    fontSize: 20,
  },
  containerMain: {
    flex: 1,
    padding: 10,
  },
  titleMain: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 10,
  },
  containerParticipants: {
    marginBottom: 15,
    height: 500,
  },
  containerButtons: {
    flex: 1,
  },
  contactItem: {
    padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5
  },
});
