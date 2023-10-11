import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  View, 
  Image, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Keyboard } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useState } from 'react';
import { SignIn } from '../services/auth.services.js'
import { useUser } from '../contexts/UserContext';

export default function Login( navigation ) {
  const {setSigned, setName} = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignIn = () => {

    SignIn({ email: email, password: password }).then(res => {
      if (res.access && res.refresh) {
        setSigned(true);
        setName(res.name);
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            AsyncStorage.setItem(key, res[key]).then();
          }
        }
      } else {
        //aviso para o usuario da falha
        alert('Usuário ou senha inválidos!');
      }
    });
  }

  return (
    <View style={styles.containerBody}>

      <Animatable.View animation="fadeInDown" delay={500} style={styles.containerLogo}>
        <Image
          source={require('../assets/logo.png')}
          style={{width:'40%'}}
          resizeMode="contain"
        />
      </Animatable.View>
      
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Entre e conecte-se com a sua equipe de trabalho!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.loginLabel}>E-mail</Text>
        <TextInput
          value={email}
          placeholder="Digite seu e-mail..."
          style={styles.input}
          keyboardType="email-address"
          outoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.loginLabel}>Senha</Text>
        <TextInput
          value={password}
          placeholder="Digite a senha"
          style={styles.input}
          keyboardType="email-address"
          secureTextEntry
          outoCorrect={false}
          onChangeText={(text) => setPassword(text)}
        />
    

        <TouchableOpacity style={styles.buttonForgotPassword} 
          onPress={() => {console.log('On press acionado!')}}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonIn}
          onPress={() => {handleSignIn()}}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    //fontFamily: 'Inter', // Use o nome da fonte exato aqui
    fontSize: 16,
  },
  containerBody:{
    flex:1,
    backgroundColor: '#2368A2',
    justifyContent: 'space-between',
},

containerLogo:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: -130,
  marginBottom: -130,
 },

 
containerHeader:{
  marginRight: '10%',
  paddingStart: '10%',
  justifyContent: 'center',
},

message:{
  fontSize: 22,
  color: "#FFFFFF",
},

containerForm:{
  flex:1,
  backgroundColor: '#2368A2',
  width: '80%',
  marginLeft: '10%',
  marginRight: '10%',
  marginBottom: 5,
  marginTop: 15,  
},


input: {
  borderBottomWidth: 1,
  marginBottom: 12,
  fontSize: 16,
  backgroundColor: '#AAD4F5',
  borderRadius: 10,
  paddingStart: 10,
  width: '100%',
  height: 50,
},

loginLabel: {
  color: '#FFFFFF',
  marginTop: 12,
},

buttonForgotPassword:{
  marginTop: 8,
},

forgotPasswordText:{
  color: '#FFFFFF',
}, 

buttonIn:{
  backgroundColor: "#1A4971",
  borderRadius: 10,
  paddingVertical: 8, 
  width: '100%',
  height: 50,
  marginTop: '5%',
  marginBottom: '15%',
  alignItems: 'center',
  justifyContent: 'center',
},

buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

}
);