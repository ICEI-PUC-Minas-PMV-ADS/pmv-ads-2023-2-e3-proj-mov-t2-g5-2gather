import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { updatePassword } from "../services/auth.services";

export default function NewPassword({ navigation }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = async () => {
    // Adicione sua lógica para a troca de senha aqui
    if (newPassword !== confirmNewPassword) {
      Alert.alert("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }

    try {
      await updatePassword({
        email: "email",
        currentPassword,
        newPassword,
      }),
        
        navigation.goBack();

    } catch (error) {
      console.error("Erro ao atualizar a senha:", error);
      Alert.alert(
        "Ocorreu um erro ao atualizar a senha. Por favor, tente novamente."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trocar Senha</Text>
      <View style={styles.container2}>
        <Text style={styles.headerInput}>Nova Senha</Text>

        <View style={styles.form}>
          <Text>Entre com a senha atual</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />

          <Text>Digite a Nova Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />

          <Text>Confirme a Nova Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleChangePassword}
          >
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },

  container2: {
    padding: 20,
    gap: 2,
    display: "flex",
  },

  header: {
    gap: 10,
    color: "#FFFCF4",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    height: 65,
    backgroundColor: "#2368A2",
    padding: 0,
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
  },

  form: {
    flex: 1,
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

  button: {
    backgroundColor: "#2368A2",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFFCF4",
    fontSize: 20,
  },
});
