import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../contexts/UserContext";
import { Divider } from "react-native-paper";

export default function Contatos({ navigation }) {
  const { signed, photo, name } = useUser();

  const data = [
    { key: "1", photo: "photo", text: "Name" },
    { key: "2", photo: "photo", text: "Name" },
    { key: "3", photo: "photo", text: "Name" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      {/*<Image style={styles.contactPhoto} source={{ uri: item.photo }} />*/}
      <Image
        style={styles.contactPhoto}
        source={require("../assets/profile.png")}
      />
      <Text style={styles.contactText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText} onPress={() => navigation.goBack()}>
          Nova Conversa
        </Text>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>
      <View style={styles.container1}>
      <ScrollView>
        <FlatList
          contentContainerStyle={styles.itemList}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          inverted={false}
          ItemSeparatorComponent={() => (
            <Divider style={{ height: 1, backgroundColor: "grey" }} />
          )}
        />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },

  header: {
    padding: 10,
    height: 135,
    backgroundColor: "#2368A2",
    //flexDirection: "row",
    justifyContent: "space-between",
  },

  headerText: {
    fontSize: 20,
    color: "#FFFCF4",
    marginTop: 7,
  },
  searchBar: {
    padding: 10,
    //borderBottomWidth: 1,
    //borderBottomColor: "#ddd",
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: "#1a4971",
    color: "#fffcf4",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },

  container1: {
    flex: 1,
    backgroundColor: "#F1F3F5",
    borderRadius: 15,
    marginVertical: -25,
  },

  itemList: {
    margin: 25,
    gap: 25,
  },

  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  contactPhoto: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },

  contactText: {
    fontSize: 16,
  },
});
