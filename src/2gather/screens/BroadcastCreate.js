import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BroadcastCreate() {
  const navigation = useNavigation();

  const grupos = [
    { nome: 'Grupo 1', destinatarios: 10 },
    { nome: 'Grupo 2', destinatarios: 5 },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.navigate("BroadcastList")} />
        <Text style={styles.titleHeader}>Listas de transmissão</Text>
        <Appbar.Action icon="pencil" onPress={() => {
          console.log('Você clicou em um ícone de Editar, vou inserir a rota para a página Editar Lista de Transmissão assim que ela for criada');
        }} />
      </Appbar.Header>

      <View style={styles.containerMain}>
        {grupos.map((grupo, index) => (
          <View key={index} style={styles.grupoContainer}>
            <Text style={styles.grupoTitle}>Destinatários: {grupo.destinatarios}</Text>
            <TouchableOpacity
              style={styles.infoIconContainer}
              onPress={() => {
                console.log('Você clicou em um ícone de Informação, vou inserir a rota para a página Lista de transmissão informações assim que ela for criada');
              }}>
              <Icon name="info-circle" style={styles.infoIcon} />
            </TouchableOpacity>
          </View>
        ))}

        <TouchableHighlight
          style={styles.buttonContainer}
          underlayColor="transparent"
           onPress={() => navigation.navigate('NewList')}
            >
          <View style={styles.button}>
            <Icon name="plus" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Nova lista</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#2368A2',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleHeader: {
    color: '#FFFCF4',
    fontSize: 20,
    flex: 1,
  },
  editIcon: {
    color: '#FFFCF4',
    marginRight: 16,
  },
  containerMain: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 30,
  },
  grupoContainer: {
    backgroundColor: '#F1F3F5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  grupoTitle: {
    fontSize: 16,
  },
  infoIconContainer: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 8,
  },
  infoIcon: {
    fontSize: 20,
    color: '#000000',
  },
  buttonContainer: {
    backgroundColor: '#2368A2',
    padding: 16,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: '70%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 20,
    color: '#FFFCF4',
    marginRight: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFCF4',
  },
});
