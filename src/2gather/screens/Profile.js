
import React, { useState, useRef, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Camera, CameraType } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { useUser } from '../contexts/UserContext';
import { useNavigation } from '@react-navigation/native';
//import { BackHandler } from 'react-native';

export default function Profile({ navigation }) {
  
  //const navigation = useNavigation();
  //const handleLogout = () => {
    //BackHandler.exitApp();
    //navigation.navigate('Login');
    

  const { signed, email, name, telefone, role } = useUser();
  

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText} onPress={() => navigation.goBack()}>
          Configurações básicas
        </Text>
        <TouchableOpacity 
             onPress={() => {
              console.log("Teste de Logout.");
             }}>
            
             {/*onPress={() => navigation.navigate("Login")}>*/}  

          <MaterialCommunityIcons name="logout" size={35} color="#FFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <View>
          <Text style={styles.perfilText}>Foto do perfil</Text>

          <View style={{ alignItems: "center", margin: 20 }}>
            <Image
              style={styles.photo}
              source={require("../assets/profile.png")}
            />
            <TouchableOpacity
              onPress={() => {
                console.log("A câmera deverá abrir...");
                //takePicture();
              }}
            >
              <FontAwesome name="camera" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.lineArchivedGroups}>
          <Image
            source={require("../assets/arquivedGroups.png")}
            style={styles.archivedGroupsIcon}
          />
          <TouchableOpacity
            style={styles.buttonArchivedGroups}
            onPress={() => {
              console.log("Suas mensagens arquivadas deverão aparecer em uma nova screen.");
            }}
          >
            <Text style={styles.archivedGroupsText}>
              Seus grupos arquivados
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerData}>
          <Text style={{ fontWeight: "bold" }}>Email Corporativo</Text>
          <Text style={styles.dynamicText}>{email}</Text>

          <Text style={{ fontWeight: "bold" }}>Nome do Colaborador(a)</Text>
          <Text style={styles.dynamicText}>{name}</Text>

          <Text style={{ fontWeight: "bold" }}>Telefone</Text>
          <Text style={styles.dynamicText}>{telefone}</Text>

          <Text style={{ fontWeight: "bold" }}>Cargo</Text>
          <Text style={styles.dynamicText}>{role}</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonSave}
            onPress={() => {
              console.log("Sua foto deverá ser salva com sucesso!");
            }}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
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
    padding: 10,
    height: 85,
    backgroundColor: "#2368A2",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerText: {
    fontSize: 20,
    color: "#FFFCF4",
    marginTop: 7,
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
    alignSelf: "right",
    fontSize: 18,
  },

  archivedGroupsText: {
    fontSize: 18,
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