
import React, { useState, useRef, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Camera, CameraType } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { useUser } from '../contexts/UserContext';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '../services/auth.services';
import { Appbar } from 'react-native-paper';

export default function ProfileConsult({ navigation }) {

  const { setSigned } = useUser();

  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHaspermission] = useState(null);
  const [capturePhoto, setCapturePhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const asyncEmail= await AsyncStorage.getItem('email');
        const asyncName= await AsyncStorage.getItem('name');
        const asyncPhone= await AsyncStorage.getItem('phone');
        const asyncRole= await AsyncStorage.getItem('role');
        if (asyncEmail!== null) {
          setEmail(asyncEmail);   
        }
        if (asyncName!== null) {
          setName(asyncName);        
        }
        if (asyncPhone!== null) {
          setPhone(asyncPhone);        
        }
        if (asyncRole!== null) {
          setRole(asyncRole);
        
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage: ', error);
      }
    }
    fetchData()
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.navigate("Contacts")} />
        <Text style={styles.headerText}>Informações básicas do usuário</Text>
      </Appbar.Header>

      <View style={styles.container1}>
        <View>
          <Text style={styles.perfilText}>Foto do perfil</Text>

          <View style={{ alignItems: "center", margin: 20 }}>
            <Image
              style={styles.photo}
              source={require("../assets/profile.png")}
            />
          </View>
        </View>

        <View style={styles.containerData}>
          <Text style={{ fontWeight: "bold" }}>Email Corporativo</Text>
          <Text style={styles.dynamicText}>{email}</Text>

          <Text style={{ fontWeight: "bold" }}>Nome do Colaborador(a)</Text>
          <Text style={styles.dynamicText}>{name}</Text>

          <Text style={{ fontWeight: "bold" }}>Telefone</Text>
          <Text style={styles.dynamicText}>{phone}</Text>

          <Text style={{ fontWeight: "bold" }}>Cargo</Text>
          <Text style={styles.dynamicText}>{role}</Text>
        </View>
      </View>
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
    paddingBottom: 22,
    height: 85,
    backgroundColor: "#2368A2",
    flexDirection: "row",
    //alignSelf: 'center',
    //justifyContent: "space-between",
  },

  headerText: {
    fontSize: 20,
    color: "#FFFCF4",
    //marginTop: 7,
  },

  container1: {
    flex: 1,
    backgroundColor: "#F1F3F5",
    borderRadius: 15,
    marginVertical: -25,
  },

  perfilText: {
    alignSelf: "center",
    fontSize: 20,
    flexDirection: "row",
    marginTop: 25,
  },

  containerCamera: {
    flex: 1,
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },

  photo: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    width: 115,
    height: 115,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  lineArchivedGroups: {
    flexDirection: "row",
    gap: 10,
    marginStart: 30,
    marginTop: 15,
  },

  archivedGroupsIcon: {
    width: 35,
    height: 35,
    alignSelf: "flex-start",
    fontSize: 18,
  },

  buttonArchivedGroups: {
    fontSize: 17,
    fontWeight: "bold",

  },

  containerData: {
    flex: 1,
    gap: 5,
    marginStart: 30,
    marginTop: 40,
  },

  dynamicText: {
    marginBottom: 20,
  },

  buttonSave: {
    backgroundColor: "#2368A2",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 150,
    alignSelf: "center",
    marginVertical: 40,
  },

  buttonText: {
    color: "#FFFCF4",
    fontSize: 20,
  },
});