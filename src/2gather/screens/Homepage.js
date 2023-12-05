import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../contexts/UserContext";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Divider } from "react-native-paper";
import { GetListYourGroups, GetTransmissionList, GetGroupDetails, getOrCreatePrivateGroup } from "../services/group.services";
import socket from "../services/socket";
import { useFocusEffect } from "@react-navigation/native";
import { useSocket } from "../contexts/SocketContext";
import Toast from '../components/Toast';

export default function Homepage() {
  const navigation = useNavigation();
  const { name, id, privateE2eContext, isAdmin } = useUser();
  //Listagem dos grupos, listas e mensagens no qual participa e estão ativos.
  const [yourGroups, setYourGroups] = useState([]);
  const [yourLists, setYourLists] = useState([]);
  const [yourMessages, setYourMessages] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { notifications } = useSocket();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (notifications.length > 0) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notifications]);

  const getYourGroups = async () => {
    try {
      const result = await GetListYourGroups();
      setYourGroups(result || []);
    } catch (error) {
      console.log("Error fetching your groups:", error);
    }
  };

  const getYourLists = async () => {
    try {
      const result = await GetTransmissionList();
      setYourLists(result || []);
    } catch (error) {
      console.log("Error fetching your transmission lists:", error);
    }
  };

  useEffect(() => {
    getYourGroups();
    getYourLists();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getYourGroups();
      getYourLists();
    }, [])
  );

  const handleItemPress = async (group) => {
    try {
      if (group.isPrivate) {
        let partner;

        if (group.members[0].id === id) {
          partner = group.members[1];
        } else {
          partner = group.members[0];
        }
        const result = await getOrCreatePrivateGroup({
          idPartner: partner.id,
          idSelf: id,
        });
        socket.emit("createRoom", result.id, partner.name);
        navigation.navigate("Chat", {
          room: result,
          roomId: result.id,
          partner: partner,
        });
      } else {
        const result = (await GetGroupDetails({ idGroup: group.id })) || [];
        socket.emit("createRoom", result.id, group.title);
        navigation.navigate("Chat", {
          room: result,
          roomId: result.id,
        });
      }
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };

  const defaultImage = require("../assets/group.png");
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.contactItem}>
        <Image
          style={styles.contactPhoto}
          source={item.photo ? { uri: item.photo } : defaultImage}
        />
        <Text style={styles.contactText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredData = [...yourGroups, ...yourLists].filter(
    (item) => item.title.toLowerCase().includes(searchText.toLowerCase())
  );




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor="#aaa"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={styles.groupBroadcastContainer}>
        <Text style={styles.broadcastText} onPress={() => navigation.navigate("BroadcastCreate")}>
          Lista de Transmissão
        </Text>
        <Text style={styles.groupText} onPress={() => navigation.navigate("NewGroup")}>
          Novo Grupo
        </Text>
      </View>

      <View style={styles.container1}>
        <FlatList
          contentContainerStyle={styles.itemList}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <Divider style={{ height: 1, backgroundColor: "grey" }} />}
        />
      </View>

      <View style={styles.bottomBar}>
        {isAdmin === "true" && (
          <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate("UserManagement")}>
            <Icon name="users-cog" size={40} color="#FFFFFF" />
            <Text style={styles.buttonTextSmall}>Gerenciamento de Usuário</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate("Contacts")}>
          <Icon name="address-book" size={40} color="#FFFFFF" />
          <Text style={styles.buttonTextSmall}>Contatos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate("Profile")}>
          <Icon name="cog" size={40} color="#FFFFFF" />
          <Text style={styles.buttonTextSmall}>Configurações</Text>
        </TouchableOpacity>
      </View>

      {showToast && notifications.length > 0 && (
        <Toast
          visible={showToast}
          message={notifications[0].message}
          appName="2Gather"
          senderName={message.user}
          onPress={() => navigation.navigate('Chat'/*, { roomId: roomIdDaMensagem }*/)}
        //Achar o roomId para por no onPress
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2368A2",
  },
  searchBar: {
    padding: 10,
    borderBottomWidth: 0,
    borderBottomColor: "#ddd",
  },
  searchInput: {
    backgroundColor: "#1a4971",
    color: "#fffcf4",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  groupBroadcastContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#1a4971", // mesma cor de fundo
    borderRadius: 10,
    width: "95%",
    alignSelf: "center",
  },
  broadcastText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  groupText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: "#f1f3f5",
  },
  conversationList: {
    flex: 1,
  },
  bottomBar: {
    flexDirection: "row",
    height: 100, // altura fixa
    backgroundColor: "#2368A2",
  },
  bottomBarButton: {
    flex: 1, // 1/3
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 10,
  },
  buttonTextSmall: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },

  // Style do FlatList:
  container1: {
    flex: 1,
    backgroundColor: "#F1F3F5",
    //borderRadius: 15,
    marginVertical: 10,
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
