import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function EditArchiveList() {
  const navigation = useNavigation();

  const handleArchive = () => {
    console.log("Lista arquivada");
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text style={styles.titleHeader}>Listas de transmissão</Text>
      </Appbar.Header>
      <View style={styles.containerMain}>
        <ScrollView>
          <View style={styles.listItem}>
            <View style={styles.listInfo}>
              <Text style={styles.destinatarios}>Destinatários: 2</Text>
              <Text style={styles.names}>Eduardo, Felipe, Você</Text>
            </View>
            <TouchableOpacity
              onPress={handleArchive}
              style={styles.archiveButton}
            >
              <Text style={styles.archiveText}>Arquivar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("NewList")}
        >
          <View style={styles.button}>
            <Icon name="user-plus" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Nova lista</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f3f5",
  },
  header: {
    backgroundColor: "#2368A2",
  },
  titleHeader: {
    color: "#FFFCF4",
    fontSize: 20,
  },
  containerMain: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    marginTop: 50,
  },
  listInfo: {
    flex: 1,
  },
  destinatarios: {
    fontSize: 16,
    fontWeight: "bold",
  },
  names: {
    fontSize: 14,
    marginTop: 5,
  },
  archiveButton: {
    padding: 10,
  },
  archiveText: {
    color: "#007AFF",
  },
  buttonContainer: {
    backgroundColor: "#2368A2",
    padding: 16,
    borderRadius: 8,
    position: 'absolute', 
    bottom: 80,           
    alignSelf: 'center',  
    flexDirection: 'row', 
    alignItems: 'center',
  },
  newListText: {
    color: "#FFF",
    fontSize: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonIcon: {
    fontSize: 20,
    color: "#FFFCF4",
    marginRight: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFCF4",
  },
});
