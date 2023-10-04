import React from 'react';
import { 
  View, 
  Image, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Keyboard } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Login() {
  
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    console.log("entrou")
    console.log(email)
    console.log(password)
  }
  
  return (
    <View style={styles.containerBody}>

      <Animatable.View animation="fadeInDown" delay={500} style={styles.containerLogo}>
        <Image
          source={require('../assets/logo.png')}
          style={{ width: '25%' }}
          resizeMode="contain"
        />
      </Animatable.View>
      
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Entre e conecte-se com a sua equipe de trabalho!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.loginLabel}>E-mail</Text>
        <TextInput
          placeholder="Digite seu e-mail..."
          style={styles.input}
          keyboardType="email-address"
          outoCorrect={false}
          onChangeText={() => { }}

        />

        <Text style={styles.loginLabel}>Senha</Text>
        <TextInput
          placeholder="Digite a senha"
          style={styles.input}
          keyboardType="numeric"
          outoCorrect={false}
          onChangeText={() => { }}


        />
        
        <TouchableOpacity style={styles.buttonForgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</ Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonIn}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
containerBody:{
  flex:1,
    backgroundColor: '#2368A2',
    justifyContent: 'center',
},

containerLogo:{
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-33%'
},


containerHeader:{
  marginTop: '5%',
  marginBotton: '8%',
  marginRight: '10%',
  paddingStart: '10%',
  justifyContent: 'center',
},

message:{
  fontSize: 22,
  color: "#FFFFFF",
},

containerForm:{
  backgroundColor: '#2368A2',
  width: '80%',
  margin: '10%',  
},


input: {
  borderbottomWidth: 1,
  height: 40,
  marginBotton: 12,
  fontSize: 16,
  backgroundColor: '#AAD4F5',
  borderRadius: 10,
  paddingStart: 10,
},

loginLabel: {
  color: '#FFFFFF',
  marginTop: 12,
},

buttonForgotPassword:{
  marginTop: 14,
  alignSelf: 'left',
},

forgotPasswordText:{
  color: '#FFFFFF'
}, 

buttonIn:{
  backgroundColor: "#1A4971",
  borderRadius: 10,
  paddingVertical: 8, 
  width: '100%',
  height: 50,
  alignSelf: 'center',
  marginTop: '5%',
  marginBottom: '15%',
  alignItems: 'center',
  justifyContent: 'center',
},

buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fonteWeight: 'bold',
  },

});