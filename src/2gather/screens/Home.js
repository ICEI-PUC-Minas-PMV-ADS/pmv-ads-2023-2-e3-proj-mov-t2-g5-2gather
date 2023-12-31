import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
   } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Home({ navigation }) {

  return (
    <View style={styles.containerBody}> 
      
      <Animatable.View animation="fadeInDown" style={styles.containerWellCome}>
        <Text style={styles.titleWellCome}>Olá, bom te ver!</Text>
      </Animatable.View>
      
      <View style={styles.containerLogo}>
        <Animatable.Image
          //animation="flipInY"
          source={require('../assets/logo.png')}
          style={styles.imageLogo}
          resizeMode="contain"
        />
      </View>

    <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Login")}>
    <Text style={styles.buttonLoginText}>Fazer login</Text>
    <MaterialCommunityIcons name="login" size={35} color="#FFFF" />
    </TouchableOpacity> 

  </View>
  )
}

const styles = StyleSheet.create({
  containerBody:{
    flex:1,
    backgroundColor: '#2368A2',
    justifyContent: 'center',
    padding: '5%',
  },

  containerWellCome: {
    alignItems: 'center',
    marginTop: '10%',  
  },

  titleWellCome:{
    fontSize: 22,
    color: '#FFFFFF',
    margin: '10%',
  },

  containerLogo:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageLogo: {
    marginTop: '-10%',
    width: 400,
    height: 400,
  },

  buttonLogin: {
    backgroundColor: "#1A4971",
    borderRadius: 10,
    paddingVertical: 8, 
    width: '80%',
    height: 50,
    alignSelf: 'center',
    marginBottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    gap: 20,
  },

  buttonLoginText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
})
