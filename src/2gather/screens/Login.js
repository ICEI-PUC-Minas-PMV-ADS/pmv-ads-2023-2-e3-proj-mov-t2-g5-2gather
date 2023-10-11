import React from 'react';
import { 
  View, 
  Image, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity,
  ScrollView } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable'
import { useState } from 'react';
//import { useUser } from '../contexts/UserContext';

export default function Login( navigation ) {
  //const {setSigned} = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
      const handleSignIn = async () => {
    try {
      // Envia as credenciais para a API Django
      const response = await fetch('https://hamtaro.cloud/admin/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      
/*

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, lança um erro
        throw new Error('Credenciais inválidas');
      }*/

      // Se a resposta for bem-sucedida, obtém o token
      //const data = await response.json();
      const token = "testando";

      // Execute a lógica de armazenamento do token, talvez usando o contexto ou AsyncStorage
      // ...

      // Indique que o usuário está autenticado
      setSigned(true);

      // Navegue para a próxima tela
      navigation.navigate('TestAfterLogin');
    } catch (error) {
      console.error('Erro no login:', error);
      console.log('Email ou senha incorretos');
    }
  };
 
  return (
    <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
    <View style={styles.containerBody}>

      <Animatable.View animation="fadeInDown" delay={500} style={styles.containerLogo}>
        <Image
          source={require('../assets/logo.png')}
          style={{width:'60%'}}
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
          //onPress={() => setSigned()}

          
          > 
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
    </KeyboardAwareScrollView>
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
  marginTop: -90,
  marginBottom: -90,
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
  marginBottom: 20,
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
  marginTop: 2,
  marginBottom: 30,
},

forgotPasswordText:{
  color: '#FFFFFF',
  alignSelf: 'flex-end',
}, 

buttonIn:{
  backgroundColor: "#1A4971",
  borderRadius: 10,
  paddingVertical: 8, 
  width: '100%',
  height: 50,
  marginTop: '5%',
  marginBottom: 10,
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