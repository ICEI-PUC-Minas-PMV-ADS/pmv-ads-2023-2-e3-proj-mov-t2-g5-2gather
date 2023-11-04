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
import { UpdateUserPassword } from '../services/user.services';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Appbar, Button } from 'react-native-paper';

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
      await UpdateUserPassword ({
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
    <SafeAreaView style={styles.container}>
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.navigate('Profile')} />
        <Text style={styles.header}>Trocar Senha</Text>
      </Appbar.Header>
  
      <View style={styles.container2}>
        <Text style={styles.headerInput}>Nova Senha</Text>

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
    //padding: 8,
  },

  container2: {
    flex: 1,
    padding: 20,
    gap: 2,
    display: "flex",
  },

  header: {
    color: "#FFFCF4",
    fontSize: 20,
    height: 65,
    backgroundColor: "#2368A2",
    display: "flex",
    //paddingLeft: 10,
    alignItems: "center",
  },

  form: {
    flex: 1,
  },

  textLabel: {
    fontSize: 15,
    color: "black",
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
    width: '100%',
    alignSelf: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFFCF4",
    fontSize: 20,
  },
});
