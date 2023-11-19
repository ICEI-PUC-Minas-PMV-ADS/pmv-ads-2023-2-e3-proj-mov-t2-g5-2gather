import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Appbar } from "react-native-paper";
import { GetRoles } from "../services/role.services";
import { GetUserList, UpdateUser } from "../services/user.services";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "../components/Toast";

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
  const [toastVisible, setToastVisible] = useState(false);
  const [toastVisibleError, setToastVisibleError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    userId: false,
    name: false,
    phone: false,
    role: false,
  });

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

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        setLoading(true);
        const result = await GetRoles();
        setRoles(result || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  const handleSubmit = async () => {
    setFieldErrors({
      userId: false,
      name: false,
      phone: false,
      role: false,
    });

    let errors = {};
    if (!userId) errors.userId = true;
    if (!name) errors.name = true;
    if (!phone) errors.phone = true;
    if (!role) errors.role = true;

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setToastVisibleError(true);
      setTimeout(() => setToastVisibleError(false), 3000);
      return;
    }

    try {
      await UpdateUser({
        userId,
        name,
        phone,
        idRole: role,
      });
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
      //navigation.navigate("Homepage");
    } catch (error) {
      setError(error.message);
    }
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
          <View style={styles.inputPicker}>
            <RNPickerSelect
              onValueChange={(value) => setUserId(value)}
              items={userList.map((user) => ({
                label: user.email,
                value: user.id,
              }))}
              placeholder={{ label: "Selecione um e-mail", value: null }}
              style={pickerSelectStyles}
            />
          </View>
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
          <View style={styles.inputPicker}>
            <RNPickerSelect
              onValueChange={(value) => setRole(value)}
              items={roles.map((role) => ({
                label: role.name,
                value: role.id,
              }))}
              placeholder={{ label: "Selecione um cargo", value: null }}
              style={pickerSelectStyles}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={() => navigation.goBack()} //UserManagement
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>

        {toastVisibleError && (
          <Toast
            visible={toastVisibleError}
            message={"Preencha todos os campos corretamente."}
            appName={"2Gather"}
            showSenderName={false}
            style={{ zIndex: 9999, position: "absolute", top: 0 }}
          />
        )}
        {toastVisible && (
          <Toast
            visible={toastVisible}
            message={"Conta editada com sucesso!"}
            appName={"2Gather"}
            showSenderName={false}
            style={{ zIndex: 9999, position: "absolute", top: 0 }}
          />
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
  emailInput: {
    backgroundColor: "#FFFCF4",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#868E96",
    height: 40,
    justifyContent: "center",
    marginBottom: 10,
  },
  inputPicker: {
    backgroundColor: '#FFFCF4',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // para garantir que o texto não fique escondido atrás do ícone
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // para garantir que o texto não fique escondido atrás do ícone
  },
});
