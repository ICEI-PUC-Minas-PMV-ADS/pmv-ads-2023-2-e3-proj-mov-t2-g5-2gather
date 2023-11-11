import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Appbar, Avatar, Button, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useUser } from "../contexts/UserContext";
import socket from "../services/socket";
import { getOrCreatePrivateGroup } from '../services/group.services';
import { GetGroupDetails, ArchiveGroup } from '../services/group.services';
import { useFocusEffect } from '@react-navigation/native';

export default function GroupInfo({ route }) {
  const navigation = useNavigation();

  const { name, id, privateE2eContext  } = useUser();
  const item = route.params ? route.params : {};
  const [idGroup, setIdGroup] = useState("");
  const [title, setTitle] = useState("");
  const [participants, setParticipants] = useState([]);
  const [isArchived, setIsArchived] = useState(false);
  const [group, setGroup] = useState([]);
  let image = require('../assets/group.png')
  let isGroupAdmin = (group.idAdmin == id)

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

  useFocusEffect(
    React.useCallback(() => {
      if (item) {
        getGroup()
      }
    }, [])
  );

  useEffect(() => {
    if (item) {
      getGroup()
    }
  }, []);

  const handleOpenChatWithContact = async (partner) => {
    try { 
      const result = await getOrCreatePrivateGroup({ idPartner: partner.id, idSelf: id})
      socket.emit("createRoom", result.id, partner.name);
      navigation.navigate("Chat", {
        room: result,
        roomId: result.id,
        partner: partner,
      });

    } catch (error) {
      alert('error')
      console.log(error)
    }
  };

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
    <TouchableOpacity onPress={() => handleOpenChatWithContact(item)}>
      <View style={styles.contactItem}>
        <Image style={styles.contactPhoto} source={{ uri: item.photo || null }} defaultSource={defaultImage} />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction
          onPress={() =>
            navigation.navigate("Chat", {
              room: group,
              roomId: group.id,
            })
          }
        />
      </Appbar.Header>
      <View style={styles.groupHeader}>
        <Image style={styles.groupImage} source={image} />
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
          {isGroupAdmin ?
            <Button
              mode="contained"
              color={'#74D99F'}
              style={styles.button}
              icon="plus-circle-outline"
              onPress={() => navigation.navigate('EditGroup', { group: group })}>
              Editar
            </Button>
          :
          console.log("not admin")
          }
          <Button
            mode="contained"
            color={'#FAE29F'}
            style={styles.button}
            icon="minus-circle-outline"
            onPress={() => handleArchiveGroup()}>
            {isArchived == false ? 'Arquivar' : 'Desarquivar'}
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
  groupImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
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
    padding: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc', 
    flexDirection: "row",
    alignItems: "center", 
  },
  contactPhoto: {
    width: 20,
    height: 20,
    borderRadius: 17.5,
    marginRight: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5
  },
});
