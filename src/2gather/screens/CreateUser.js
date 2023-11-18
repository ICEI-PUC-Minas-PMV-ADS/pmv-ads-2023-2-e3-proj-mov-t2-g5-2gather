import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Register } from "../services/auth.services";
import { Appbar } from "react-native-paper";
import { GetRoles } from "../services/role.services";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "../components/Toast";

export default function CreateUser({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastVisibleError, setToastVisibleError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    password: false,
    name: false,
    phone: false,
    role: false,
  });

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

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

  const isValidEmail = (email) => emailRegex.test(email);

  const handleRegister = async () => {
    setFieldErrors({
      email: false,
      password: false,
      name: false,
      phone: false,
      role: false,
    });

    let errors = {};
    if (!email || !isValidEmail(email)) errors.email = true;
    if (!password) errors.password = true;
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
      await Register({
        name,
        email,
        phone,
        password,
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
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <View style={styles.rowContainer}>
            <Text style={styles.title}>Criar Usuário</Text>
          </View>
        </Appbar.Header>

        <View style={styles.container2}>
          <Text style={styles.headerInput}>Informe os dados abaixo</Text>

          <Text>Email Corporativo</Text>
          <TextInput
            style={[styles.input, fieldErrors.email && styles.errorInput]}
            value={email}
            onChangeText={setEmail}
            placeholder="Email Corporativo"
          />

          <Text>Telefone</Text>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, fieldErrors.phone && styles.errorInput]}
            value={phone}
            onChangeText={setPhone}
            placeholder="Telefone"
          />

          <Text>Senha</Text>
          <TextInput
            style={[styles.input, fieldErrors.password && styles.errorInput]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Senha"
          />

          <Text>Nome do Colaborador</Text>
          <TextInput
            style={[styles.input, fieldErrors.name && styles.errorInput]}
            value={name}
            onChangeText={setName}
            placeholder="Nome do Colaborador"
          />

          <Text>Cargo</Text>
          <View>
            <Picker
              selectedValue={role}
              onValueChange={(itemValue) => setRole(itemValue)}
              // style={styles.inputPicker}
              style={[
                styles.inputPicker, fieldErrors.role && styles.errorInput,
              ]}
            >
              <Picker.Item label="Selecione um cargo" value="" />
              {roles.map((role) => (
                <Picker.Item key={role.id} label={role.name} value={role.id} />
              ))}
            </Picker>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonCreate} onPress={handleRegister}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>

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
            message={"Conta criada com sucesso!"}
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
  container: {
    paddingTop: 5,
    padding: 0,
    borderBottomWidth: 1,
    borderColor: "#BBB",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#2368A2",
    width: "100%",
  },
  titleHeader: {
    color: "#FFFCF4",
  },
  container2: {
    padding: 20,
    gap: 2,
    display: "flex",
  },
  headerInput: {
    marginBottom: "10%",
    fontSize: 20,
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
    marginTop: 10,
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
  errorInput: {
    borderColor: "red",
    borderWidth: 2,
  },
  pickerContainer: {
    height: 40,
    borderColor: "#868E96",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 10,
  },
  picker: {
    width: "100%",
    backgroundColor: "transparent",
  },
  title: {
    color: "#FFFCF4",
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
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
});