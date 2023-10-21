import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export default function BroadcastList() {
  const navigation = useNavigation();

  return (
    <View >
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.navigate("Contacts")} />
        <TouchableOpacity onPress={() => {console.log("Deverá abrir a tela de detalhes?")}}>
        <View style={styles.contentContainer}>
          <Image style={styles.contactPhoto} source={require('../assets/profile.png')}/>
          <Text style={styles.contactName}>Carlos</Text>
        </View>
        </TouchableOpacity>
      </Appbar.Header>

      <View style={styles.containerMain}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2368A2',
  },

  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginLeft: 16,
  },

  contactName: {
    color: 'white',
    fontSize: 18,
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

  contactPhoto: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
});

