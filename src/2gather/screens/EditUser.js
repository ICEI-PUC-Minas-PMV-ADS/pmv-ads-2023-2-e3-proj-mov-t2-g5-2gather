import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Appbar } from "react-native-paper";
import { GetRoles } from "../services/role.services";
import { GetUserList, UpdateUserDetails } from "../services/user.services";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import  Notification  from "../components/Notification";

export default function EditUser({ navigation }) {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const [userId, setUserId] = useState("");
  const [userList, setUserList] = useState([]);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [role, setRole] = useState();
  const [roles, setRoles] = useState([]);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const [showNotification, setShowNotification] = useState(false);
  const slideAnim = useRef(new Animated.Value(-100)).current;


  useEffect(() => {
    async function fetchUserList() {
      try {
        const users = await GetUserList();
        setUserList(users);
      } catch (error) {
        console.error("Erro ao buscar a lista de usuários:", error);
      }
    }
    fetchUserList();
  }, []);

  const handleSubmit = async () => {

    try {
      setLoading(true);
      const result = await UpdateUserDetails({
        id,
        name,
        email,
        phone,
        idRole: role,
      });
      //notif sucesso
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      navigation.navigate("UserManagement");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getRoles = async () => {
    try {
      setLoading(true);
      const result = (await GetRoles()) || [];
      setRoles(result);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <View style={styles.containerBody}>
        <View style={styles.container}>
          <View style={styles.container}>
            <Appbar.Header style={styles.header}>
              <Appbar.BackAction
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <View style={styles.rowContainer}>
                <Text style={styles.titleHeader}>Editar Usuário</Text>
              </View>
            </Appbar.Header>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.headerInput}>Alterar dados do cadastro</Text>

          <Text>Email Corporativo</Text>
          <Picker
            selectedValue={userId}
            onValueChange={(itemValue) => setUserId(itemValue)}
            style={styles.inputPicker}
          >
            {userList.map((user) => (
              <Picker.Item key={user.id} label={user.email} value={user.id} />
            ))}
          </Picker>

          <Text>Nome do Colaborador</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />

          <Text>Telefone</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />

          <Text>Cargo</Text>

          <Picker
            selectedValue={role}
            onValueChange={(value) => setRole(value)}
            style={styles.inputPicker}
          >
            <Picker.Item label="Click e selecione um cargo" value="" />
            {roles.map((item) => (
              <Picker.Item key={item.id} label={item.name} value={item.id} />
            ))}
          </Picker>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonSave}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={() => navigation.navigate("CreatedBroadcastList")}//UserManagement
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
        {showNotification && (
          <Notification message="Usuário editado com sucesso!" />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
  },
  headerInput: {
    marginBottom: "10%",
    fontSize: 20,
  },
  container: {
    paddingTop: 5,
    padding: 0,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container2: {
    padding: 20,
    gap: 2,
    display: "flex",
  },
  header: {
    backgroundColor: "#2368A2",
    width: "100%",
  },
  titleHeader: {
    color: "#FFFCF4",
  },
  input: {
    height: 40,
    borderColor: "#868E96",
    backgroundColor: "#FFFCF4",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  buttonCreate: {
    backgroundColor: "#2368A2",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFFCF4",
    fontSize: 20,
  },
  notification: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "white",
    fontSize: 16,
  },
  buttonSave: {
    backgroundColor: "#74D99F",
    paddingVertical: 10,
    paddingHorizontal: 20, 
    borderRadius: 15,
    alignItems: "center",
    flex: 1, 
    margin: 5, 
  },
  buttonCancel: {
    backgroundColor: "#ADB5BD",
    paddingVertical: 10,
    paddingHorizontal: 20, 
    borderRadius: 15,
    alignItems: "center",
    flex: 1, 
    margin: 5,
  },

  buttonText: {
    color: "#FFFCF4",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30, 
    marginTop: 20,
  },
  inputPicker: {
    height: 40,
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "black",
    marginBottom: 10,
  },
});
