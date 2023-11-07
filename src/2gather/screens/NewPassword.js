import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView
} from "react-native";
import { updatePassword } from '../services/auth.services';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Appbar, Button } from 'react-native-paper';

export default function NewPassword({ navigation }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChangePassword = async () => {
    // Adicione sua lógica para a troca de senha aqui
    if (newPassword !== confirmNewPassword) {
      Alert.alert("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }

    try {
      await updatePassword({
        userId: "userId",
        currentPassword,
        newPassword,
      });

      navigation.goBack();
    } catch (error) {
      console.error("Erro ao atualizar a senha:", error);
      Alert.alert(
        "Ocorreu um erro ao atualizar a senha. Por favor, tente novamente."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <View style={styles.container1}>
          <Appbar.Header style={styles.header}>
            <Appbar.BackAction onPress={() => navigation.navigate("Profile")} />
            <Text style={styles.titleHeader}>Trocar Senha</Text>
          </Appbar.Header>

          <View style={styles.container2}>
            <Text style={styles.headerNewPassword}>Nova Senha</Text>

            <View style={styles.form}>
              <Text style={styles.textLabel}>Entre com a senha atual</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={currentPassword}
                onChangeText={setCurrentPassword}
              />

              <Text style={styles.textLabel}>Digite a Nova Senha</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
              />

              <Text style={styles.textLabel}>Confirme a Nova Senha</Text>
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
   },

  
  header: {
    backgroundColor: '#2368A2',
    height: 85,
    marginBottom: 18,
    //padding: 0,
  },

  titleHeader: {
    color: '#FFFCF4',
    fontSize: 20,
  },

  container2: {
    flex: 1,
    backgroundColor: "#F1F3F5",
    borderRadius: 15,
    marginVertical: -25,
    paddingLeft: 30,
    paddingRight: 30,
  },

  textLabel: {
    fontSize: 15,
    color: "black",
  },

  headerNewPassword: {
    marginBottom: "10%",
    marginTop: "10%",
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
    width: '100%',
    alignSelf: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFFCF4",
    fontSize: 20,
  },
});
