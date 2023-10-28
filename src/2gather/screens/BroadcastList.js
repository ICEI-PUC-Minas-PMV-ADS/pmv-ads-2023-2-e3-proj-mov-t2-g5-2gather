import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function BroadcastList() {
  const navigation = useNavigation();

  const handleNavigation = (Route) => {
    navigation.navigate(Route)
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.navigate("Homepage")} />
        <Text style={styles.titleHeader}>Lista de transmissão</Text>
      </Appbar.Header>

      <View style={styles.containerMain}>
        <Text style={styles.titleMain}>
          Você pode usar listas de transmissão para enviar mensagens para várias pessoas ao mesmo tempo.
        </Text>
        <TouchableHighlight
            style={styles.buttonContainer}
            underlayColor="transparent"
            onPress={() => {
                console.log('Você clicou em Nova lista, ainda vou implementar o restante.');
                handleNavigation('');
            }}
            >
            <View style={styles.button}>
                <Icon name="user-plus" style={styles.buttonIcon} />
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
    backgroundColor: '#f1f3f5',
  },
  header: {
    backgroundColor: '#2368A2',
  },
  titleHeader: {
    color: '#FFFCF4',
    fontSize: 20,
  },
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  titleMain: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    backgroundColor: '#2368A2',
    padding: 16,
    borderRadius: 8,
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
