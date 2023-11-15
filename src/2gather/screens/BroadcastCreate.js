import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { showListData } from '../services/group.services';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function BroadcastCreate() {
  const navigation = useNavigation();
  
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [listCount, setListCount] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('id').then((userId) => {
      if (userId) {
        showListData(userId)
          .then((result) => {
            setListCount(result.length);
            setData(result);
          })
          .catch((err) => {
            setError(err.message);
          });
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.navigate("Homepage")} />
        <Text style={styles.titleHeader}>Listas de transmissão</Text>
      </Appbar.Header>

      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.listCountText}>Você possui: {listCount} lista(s)</Text>

        {data.length > 0 ? (
          <View style={styles.containerMain}>
            {data.map((grupo, index) => (
              <TouchableOpacity
                key={index} style={styles.grupoContainer}
                onPress={() => {
                  navigation.navigate('GroupConversation', { id: grupo.id });
                }}>
                <Text style={styles.grupoTitle}>{grupo.title}</Text>
                <TouchableOpacity
                  style={styles.infoIconContainer}
                  onPress={() => {
                    navigation.navigate('GroupInfo', { id: grupo.id }); 
                  }}>
                  <Icon name="info-circle" style={styles.infoIcon} />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.containerMain}>
            <Text style={styles.titleMain}>
              Você pode usar listas de transmissão para enviar mensagens para várias pessoas ao mesmo tempo.
            </Text>
          </View>
        )}
      </ScrollView>

      <TouchableHighlight
        style={styles.fixedButtonContainer}
        underlayColor="transparent"
        onPress={() => navigation.navigate('NewList')}
      >
        <View style={styles.button}>
          <Icon name="user-plus" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Nova lista</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#2368A2',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleHeader: {
    color: '#FFFCF4',
    fontSize: 20,
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  listCountText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#2368A2',
  },
  containerMain: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 30,
    paddingBottom: 30,
    flexGrow: 1,
  },
  grupoContainer: {
    backgroundColor: '#F1F3F5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  grupoTitle: {
    fontSize: 16,
  },
  infoIconContainer: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 8,
  },
  infoIcon: {
    fontSize: 20,
    color: '#000000',
  },
  titleMain: {
    fontSize: 16,
    textAlign: 'center',
  },
  fixedButtonContainer: {
    backgroundColor: '#2368A2',
    padding: 16,
    borderRadius: 8,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 20,
    color: '#FFFCF4',
    marginRight: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFCF4',
  },
});