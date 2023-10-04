import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
   } from 'react-native';

import * as Animatable from 'react-native-animatable'

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
          style={{ width: '90%' }}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Login")}>
      <Text style={styles.buttonLoginText}>Fazer login</Text>
      </TouchableOpacity> 

    </View>
  )
}

const styles = StyleSheet.create({
  containerBody:{
    flex:1,
    backgroundColor: '#2368A2',
    justifyContent: 'center',
  },

  containerLogo:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-10%'
  },

  containerWellCome: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',  
  },

  titleWellCome:{
    fontSize: 22,
    color: '#FFFFFF',
    margin: 30,
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
  },

  buttonLoginText: {
    fontSize: 18,
    color: '#FFFFFF',
  }
})
