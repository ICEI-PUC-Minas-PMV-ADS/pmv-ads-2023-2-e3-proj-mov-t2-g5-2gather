import React, { useState, useEffect, useRef } from "react";
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
  const [toastVisible, setToastVisible] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    userId: false,
    name: false,
    phone: false,
    role: false,
  });

  const validateFields = () => {
    let errors = {};
    if (!userId) errors.userId = true;
    if (!name) errors.name = true;
    if (!phone) errors.phone = true;
    if (!role) errors.role = true;

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

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
    if (!validateFields()) {
      return;
    }

    try {
      setLoading(true);
      const result = await UpdateUserDetails({
        id: userId,
        name,
        email,
        phone,
        idRole: role,
      });
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

  const handleToastClick = () => {
    setToastVisible(false);
    setTimeout(() => setToastVisible(false), 3000);
    //navigation.navigate('Homepage');
};

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <View style={styles.containerBody}>
 

            <Appbar.Header style={styles.header}>
              <Appbar.BackAction
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <View style={styles.rowContainer}>
                <Text style={styles.title}>Editar Usuário</Text>
              </View>
            </Appbar.Header>


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
          <TextInput
            style={[styles.input, fieldErrors.name && styles.errorInput]}
            value={name}
            onChangeText={setName}
            placeholder="Nome do Colaborador"
          />

          <Text>Telefone</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, fieldErrors.phone && styles.errorInput]}
            value={phone}
            onChangeText={setPhone}
            placeholder="Telefone"
          />

          <Text>Cargo</Text>
          <View
            style={[
              fieldErrors.role && styles.errorInput,
            ]}
          >
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
            onPress={() => navigation.navigate("CreatedBroadcastList")} //UserManagement
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {toastVisible && 
                <Toast 
                    visible={toastVisible} 
                    message={`Conta editada com sucesso!`} 
                    appName={'2Gather'} 
                    showSenderName={false}
                    style={{ zIndex: 9999, position: 'absolute', top: 0 }}
                    onPress={handleToastClick}
                />
            }
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
    backgroundColor: "#FFFCF4",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "black",
    marginBottom: 10,
  },
  errorInput: {
    borderColor: "red",
    borderWidth: 2,
  },
  title: {
    color: "#FFFCF4",
    fontSize: 20,
  },
    pickerContainer: {
    height: 40,
    borderColor: "#868E96",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 10,
  },
});
