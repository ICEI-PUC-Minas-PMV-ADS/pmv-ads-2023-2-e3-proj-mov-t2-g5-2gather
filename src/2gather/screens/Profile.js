
import React, { useState, useRef, useEffect } from 'react';
import { Text, TextInput, StyleSheet, View, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { useUser } from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '../services/auth.services';
import { Appbar } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { updateUserPhoto } from '../services/user.services';

export default function Profile({ route, navigation }) {
  
  const isSelf = route.params ? false : true;

  const { setSigned, name, photo, setPhoto, email, phone, role } = useUser();
  const [title, setTitle] = useState('');
  const [newPhoto, setNewPhoto] = useState("");
  const [showSaveButton, setShowSaveButton] = useState(false);

  const defaultImage = require('../assets/profile.png');
  let image = isSelf ? photo : route.params.item.photo

  const handleCameraPress = () => {
    setTitle(!title);
    setShowSaveButton(!showSaveButton); 
  }
  
  const handleSaveImage = async () => {
     
    try {
      await updateUserPhoto({ newPhoto });
      alert('Sua imagem foi alterada com sucesso!');
      setPhoto(newPhoto);
    } catch (error) {
      alert('Ocorreu um erro ao atualizar a imagem. Por favor, tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      {isSelf ? (
        <Appbar.Header style={styles.headerSelf}>
          <Appbar.BackAction onPress={() => navigation.navigate("Homepage")} />
          <Text style={styles.headerText}>Informações básicas do usuário</Text>

          <TouchableOpacity
            onPress={() => {
              logout();
              setSigned(false);
            }}
          >
            <MaterialCommunityIcons name="logout" size={35} color="#FFFF" />
          </TouchableOpacity>
        </Appbar.Header>
      ) : (
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() =>  navigation.goBack()} />
          <Text style={styles.headerText}>Informações básicas do usuário</Text>
        </Appbar.Header>
      )}

      <View style={styles.container1}>
        <View>
          <Image
            style={styles.photo}
            source={image ? { uri: image } : defaultImage}
            defaultSource={defaultImage}
          />
          {isSelf && (
            <View style={styles.urlPhoto}>
              <Animatable.View
                style={
                  title
                    ? styles.buttonContainerWithInput
                    : styles.buttonContainer
                }
                animation={title ? "slideInLeft" : "fadeIn"}
                duration={500}
              >
                <TouchableOpacity onPress={handleCameraPress}>
                  <FontAwesome name="camera" size={28} color="black" />
                </TouchableOpacity>

                {title && (
                  <TextInput
                    style={styles.inputUrlImage}
                    onChangeText={(text) => setNewPhoto(text)}
                    placeholder="Inclua a URL da sua Foto em png"
                    placeholderTextColor="#aaa"
                  />
                )}
              </Animatable.View>
            </View>
          )}

        </View>

        {isSelf && (
          <View style={styles.lineArchivedGroups}>
            <Image
              source={require("../assets/arquivedGroups.png")}
              style={styles.archivedGroupsIcon}
            />
            <TouchableOpacity>
              <Text
                style={styles.buttonArchivedGroups}
                onPress={() => navigation.navigate("ArchivedGroups")}
              >
                Veja seus conteúdos arquivados
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.containerData}>
          <Text style={{ fontWeight: "bold" }}>Email Corporativo</Text>
          <Text style={styles.dynamicText}>
            {isSelf ? email : route.params.item.email}
          </Text>

          <Text style={{ fontWeight: "bold" }}>Nome do Colaborador(a)</Text>
          <Text style={styles.dynamicText}>
            {isSelf ? name : route.params.item.name}
          </Text>

          <Text style={{ fontWeight: "bold" }}>Telefone</Text>
          <Text style={styles.dynamicText}>
            {isSelf ? phone : route.params.item.phone}
          </Text>

          <Text style={{ fontWeight: "bold" }}>Cargo</Text>
          <Text style={styles.dynamicText}>
            {isSelf ? role : route.params.item.roleName}
          </Text>
        </View>

        {isSelf && (
          <View style={styles.containerButtons}>
            <TouchableOpacity
              style={styles.buttonChangePassword}
              onPress={() => navigation.navigate("NewPassword")}
            >
              <Text style={styles.buttonText1}>Trocar Senha</Text>
              <MaterialCommunityIcons name="lock" size={28} color="black" />
            </TouchableOpacity>

            {showSaveButton && (
              <TouchableOpacity
                style={styles.buttonSave}
                onPress={handleSaveImage}              
              >
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },

  headerSelf: {
    padding: 0,
    height: 85,
    backgroundColor: "#2368A2",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  headerTextSelf: {
    fontSize: 20,
    color: "#FFFCF4",
    gap: 5,
  },

  header: {
    paddingBottom: 22,
    height: 85,
    backgroundColor: "#2368A2",
    flexDirection: "row",
  },

  headerText: {
    fontSize: 20,
    color: "#FFFCF4",
  },

  container1: {
    flex: 1,
    backgroundColor: "#F1F3F5",
    borderRadius: 15,
    marginVertical: -25,
    paddingHorizontal: 10,
  },


  photo: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "black",
    margin: 20,
    width: 115,
    height: 115,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  urlPhoto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  buttonContainerWithInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },

  inputUrlImage: {
    marginLeft: 10,
    height: 35,
    borderColor: "#868E96",
    backgroundColor: "#FFFCF4",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    maxWidth: 250, 

  },
  
  lineArchivedGroups: {
    flexDirection: "row",
    gap: 10,
    marginStart: 30,
    marginTop: 0,
  },

  archivedGroupsIcon: {
    width: 35,
    height: 35,
    alignContent: "center",
  },

  buttonArchivedGroups: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#2368A2",
  },

  containerData: {
    flex: 1,
    gap: 5,
    marginStart: 30,
    marginTop: 20,
  },

  dynamicText: {
    marginBottom: 20,
  },

  containerButtons: {
    flex: 1,
  },

  buttonChangePassword: {
    backgroundColor: "#74D99F",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30,
    marginTop: '15%',
    alignItems: 'center',
  },

  buttonSave: {
    backgroundColor: "#2368A2",
    padding: 10,
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
    marginVertical: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText1: {
    color: "black",
    fontSize: 20,
  },

  buttonText: {
    color: "#FFFCF4",
    fontSize: 20,
  },

  button: {
    backgroundColor: '#2368A2',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  
  buttonText: {
    color: '#FFFCF4',
    fontSize: 20,
  },
});