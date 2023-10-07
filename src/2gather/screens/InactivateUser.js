import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function InactivateUser({ navigation }) {
  return (
    <View style={styles.containerBody}>
      <View style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => {}} />
          <View style={styles.rowContainer}>
            <Text style={styles.title}>Inativar usuário</Text>
          </View>
        </Appbar.Header>
      </View>

      <View style={[styles.containerMain, { backgroundColor: '#F1F3F5' }]}>
        <Text style={styles.titleMain}>
          Seguindo os passos abaixo você irá INATIVAR o usuário
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>ID usuário</Text>
          <TextInput
            style={[styles.input, { backgroundColor: 'white' }]}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Email corporativo</Text>
          <TextInput
            style={[styles.input, { backgroundColor: 'white' }]}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Nome do colaborador</Text>
          <TextInput
            style={[styles.input, { backgroundColor: 'white' }]}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Motivo</Text>
          <TextInput
            style={[styles.input, { backgroundColor: 'white' }]}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#FAE29F', width: 89, height: 60 }]}
            onPress={() => {
             
            }}
          >
            <Text style={styles.buttonText}>Inativar</Text>
          </TouchableOpacity>

          <View style={{ width: 29 }}></View> 

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#ADB5BD', width: 104, height: 60 }]}
            onPress={() => {
      
            }}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    padding: 0,
    borderBottomWidth: 1,
    borderColor: '#BBB',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#2368A2',
    width: '100%',
  },
  title: {
    color: '#FFFCF4',
  },
  containerMain: {
    margin: 20,
    padding: 20,
  },
  titleMain: {
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#BBB',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
