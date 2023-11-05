
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

export default function Profile({ route, navigation }) {
  const isSelf = route.params ? false : true;

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
  const [photo, setPhoto] = useState('');

  const defaultImage = require('../assets/profile.png');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const asyncEmail= await AsyncStorage.getItem('email');
        const asyncName= await AsyncStorage.getItem('name');
        const asyncPhone= await AsyncStorage.getItem('phone');
        const asyncRole= await AsyncStorage.getItem('role');
        const asyncPhoto= await AsyncStorage.getItem('photo');
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
        if (asyncPhoto !== null) {
          setPhoto(asyncPhoto);
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage: ', error);
      }
    }
    fetchData()
  }, []);


{/* 
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHaspermission(status === "granted");
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHaspermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (!hasPermission === null) {
    return <Text>Acesso negado!</Text>;
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturePhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }

  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(capturePhoto)
      .then(() => {
        alert("Salvo com sucesso!");
      })
      .catch((error) => {
        console.log("err", error);
      });
  }

*/}


  return (
    <SafeAreaView style={styles.container}>
      {isSelf ?
        <View style={styles.headerSelf}>

          <Text style={styles.headerTextSelf} onPress={() => navigation.goBack()}>
            Configurações básicas
          </Text>
          <TouchableOpacity
            onPress={() => {
              logout()
              setSigned(false);
            }}
          >
            <MaterialCommunityIcons name="logout" size={35} color="#FFFF" />
          </TouchableOpacity>
        </View>
        :
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => navigation.navigate("Contacts")} />
          <Text style={styles.headerText}>Informações básicas do usuário</Text>
        </Appbar.Header>
      }

      <View style={styles.container1}>
        <View>
          <View style={{ alignItems: "center", margin: 20 }}>
            <Image
              style={styles.photo}
              source={{ uri: isSelf ? photo : route.params.item.photo || null }}
              defaultSource={defaultImage}
            />
            {isSelf && 
              <TouchableOpacity onPress={() => setCameraVisible(true)}>      
                <FontAwesome name="camera" size={28} color="black" />
              </TouchableOpacity>
            }
            

{/*

            {cameraVisible ? (
              
              <Camera
              style={{ flex: 1, width: '100%', height: '100%', backgroundColor: 'white' }}
              type={type}
              ref={camRef}
            >
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                  }}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Text
                    style={{ fontSize: 20, marginBottom: 13, color: "#FFFFF" }}
                  >
                    Trocar
                  </Text>
                </TouchableOpacity>
            </Camera>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={()=> takePicture()}>
              <FontAwesome name="camera" size={23} color="white" />
            </TouchableOpacity>

            {capturePhoto && (
              <Modal animationType="slide" transparent={false} visible={open}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 20,
                  }}
                >
                  <View style={{ margin: 10, flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{ margin: 10 }}
                      onPress={() => setOpen(false)}
                    >
                      <FontAwesome
                        name="window-close"
                        size={30}
                        color="#FF0000"
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{ margin: 10 }}
                      onPress={savePicture}
                    >
                      <FontAwesome name="upload" size={30} color="#121212" />
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={{ width: "100%", height: 450, borderRadius: 50 }}
                    source={{ uri: capturePhoto }}
                  ></Image>
                </View>
              </Modal>
            )}

*/}

          </View>
        </View>

        {isSelf && 
          <View style={styles.lineArchivedGroups}>
            <Image
              source={require("../assets/arquivedGroups.png")}
              style={styles.archivedGroupsIcon}
            />
              <TouchableOpacity>
                  <Text style={styles.buttonArchivedGroups}
                  onPress={() => navigation.navigate('ArchivedGroups')}>Seus grupos arquivados</Text>
              </TouchableOpacity>
            
          </View>
          }

        <View style={styles.containerData}>
          <Text style={{ fontWeight: "bold" }}>Email Corporativo</Text>
          <Text style={styles.dynamicText}>{isSelf ? email : route.params.item.email}</Text>

          <Text style={{ fontWeight: "bold" }}>Nome do Colaborador(a)</Text>
          <Text style={styles.dynamicText}>{isSelf ? name : route.params.item.name}</Text>

          <Text style={{ fontWeight: "bold" }}>Telefone</Text>
          <Text style={styles.dynamicText}>{isSelf ? phone : route.params.item.phone}</Text>

          <Text style={{ fontWeight: "bold" }}>Cargo</Text>
          <Text style={styles.dynamicText}>{isSelf ? role : route.params.item.roleName}</Text>
        </View>

        {isSelf && 
          <View>
            <TouchableOpacity 
              style={styles.buttonChangePassword}
              onPress={() => navigation.navigate('NewPassword')}>
              <Text style={styles.buttonText1}>Trocar Senha</Text>
              <MaterialCommunityIcons name="lock" size={28} color="black" />
            </TouchableOpacity>

        
            <TouchableOpacity
              style={styles.buttonSave}
              onPress={() => {
                console.log("Sua foto deverá ser salva com sucesso!");
              }}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        }

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

  headerSelf: {
    padding: 10,
    height: 85,
    backgroundColor: "#2368A2",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTextSelf: {
    fontSize: 20,
    color: "#FFFCF4",
    marginTop: 7,
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

  buttonChangePassword: {
    backgroundColor: "#74D99F",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30,
    marginVertical: 10,
    alignItems: 'center',
  },


  buttonSave: {
    backgroundColor: "#2368A2",
    padding: 10,
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
    marginVertical: 10,
    marginBottom: 70,
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