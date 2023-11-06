import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
  ScrollView,
} from "react-native";
import { Register } from "../services/auth.services";
import { Appbar } from "react-native-paper";
import { GetRoles } from "../services/role.services";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "../components/Toast"; // Assuming Toast component is in the same folder

export default function CreateUser({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const [toastVisible, setToastVisible] = useState(false);

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

  function isValidEmail(email) {
    return emailRegex.test(email);
  }

  const handleRegister = async () => {
    if (!isValidEmail(email)) {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
      return;
    }
    try {
      const result = await Register({
        name: name,
        email: email,
        phone: phone,
        password: password,
        idRole: role,
      });
      alert("Conta criada com sucesso");
      navigation.navigate("Login");
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
          <Appbar.Header style={styles.header}>
            <Appbar.BackAction
              onPress={() => {
                navigation.goBack();
              }}
            />
            <View style={styles.rowContainer}>
              <Text style={styles.titleHeader}>Criar Usuário</Text>
            </View>
          </Appbar.Header>
        </View>

        <View style={styles.container2}>
          <Text style={styles.headerInput}>Informe os dados abaixo</Text>

          <Text>Email Corporativo</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text>Telefone</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />

          <Text>Senha</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text>Nome do Colaborador</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />

          <Text>Cargo</Text>

          <Picker
            selectedValue={role}
            onValueChange={(value) => setRole(value)}
            style={{
              height: 40,
              backgroundColor: "#ecf0f1",
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 8,
              color: "black",
            }}
          >
            <Picker.Item label="Click e selecione um cargo" value="" />
            {roles.map((item) => (
              <Picker.Item key={item.id} label={item.name} value={item.id} />
            ))}
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={() => {
            handleRegister();//navigation.navigate("CreatedBroadcastList"); handleRegister();
          }}
        >
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
        {toastVisible && (
          <Toast
            appName="2Gather"
            senderName="CreateUser"
            message="Por favor, insira um endereço de e-mail válido."
            visible={toastVisible}
            showSenderName={false}
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
});
