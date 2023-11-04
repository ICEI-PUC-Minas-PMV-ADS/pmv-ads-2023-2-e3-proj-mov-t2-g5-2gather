import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import { useState } from 'react';
import { SignIn } from '../services/auth.services.js';
import { useUser } from '../contexts/UserContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { sendPasswordRecoveryEmail } from '../services/auth.services.js';
import { GetUserPassword } from '../services/user.services.js';

export default function Login(navigation) {
  const { setSigned, setId ,setName } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSignIn = () => {

    SignIn({ email: email, password: password }).then((res) => {
      if (res.access && res.refresh) {
        setSigned(true);
        setName(res.name);
        setId(res.id);
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            if (res[key] !== null) {
              AsyncStorage.setItem(key, String(res[key])).then();
            }
          }
        }
      } else {
        //aviso para o usuario da falha
        alert('Usuário ou senha inválidos!');
      }
    });


     // Lógica de recuperação de senha
    if (isForgotPassword) {
      handleForgotPassword();
      setIsForgotPassword(false);
    } else {
      //Lógica de login normal?
    }
  };

  const handleForgotPassword = async () => {
    try {
      // Verifique se o email é válido (pode adicionar validações adicionais)
      if (!email) {
        alert('Por favor, insira um e-mail válido.');
        return;
      }
  
      // Chame uma função de serviço para enviar o e-mail de recuperação de senha
      const recoveryResponse = await GetUserPassword(email);
  
      // Verifique a resposta do serviço
      if (recoveryResponse) {
        // E-mail de recuperação enviado com sucesso
        alert('Um e-mail de recuperação de senha foi enviado para o seu endereço.');
        setIsModalVisible(false); // Feche o modal após o envio bem-sucedido
      } else {
        // Trate falhas no envio do e-mail
        alert('Falha ao enviar o e-mail de recuperação de senha. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao processar a recuperação de senha:', error);
      alert('Erro ao processar a recuperação de senha. Tente novamente mais tarde.');
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
          <Image style={styles.imageLogo}
            source={require('../assets/logo.png')}
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
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            selectTextOnFocus={true}
          />
          <Text style={styles.loginLabel}>Senha</Text>
          <View style={styles.inputPasswordContainer}>     
            <TextInput 
              style={styles.password}
              value={password}
              placeholder="Digite a senha..."
              keyboardType="email-address"
              secureTextEntry={!showPassword}
              autoCorrect={false}
              onChangeText={(text) => setPassword(text)}
              returnKeyType="send"
              onSubmitEditing={() => handleSignIn()}
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <MaterialCommunityIcons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#21252A"
              />
            </TouchableOpacity>
          </View>


          <TouchableOpacity style={styles.buttonForgotPassword}
            onPress={() => {
              if (!isForgotPassword) {
                setIsModalVisible(true);
              }
            }}
          >
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonIn}
            onPress={() => { handleSignIn() }}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          {/* Adicione o modal aqui */}
          <Modal visible={isModalVisible} transparent animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.label}>Digite seu e-mail para recuperar a senha</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  placeholder="Digite seu e-mail..."
                  keyboardType="email-address"
                  autoCorrect={false}
                  onChangeText={(text) => setEmail(text)}
                  returnKeyType="send"
                  onSubmitEditing={handleSignIn}
                />
                <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
                  <Text style={styles.buttonText}>Enviar E-mail de Recuperação</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

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
  containerBody: {
    flex: 1,
    backgroundColor: '#2368A2',
    justifyContent: 'space-between',
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageLogo: {
    width: 200,
    height: 200,
  },

  containerHeader: {
    marginRight: '10%',
    paddingStart: '10%',
    justifyContent: 'center',
  },

  message: {
    fontSize: 22,
    color: "#FFFFFF",
  },

  containerForm: {
    flex: 1,
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

  buttonForgotPassword: {
    marginTop: 2,
    marginBottom: 30,
  },

  forgotPasswordText: {
    color: '#FFFFFF',
    alignSelf: 'flex-end',
  },

  buttonIn: {
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
  password: {
    fontSize: 16,
    height: '100%',
    width: '80%',
    borderRadius: 10,
    paddingStart: 10,

  },
  icon: {
    marginRight: 15,
  },
  inputPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 20,
    backgroundColor: '#AAD4F5',
    borderRadius: 10,
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    //paddingStart: 10,
    width: '100%',
  },

/*Style - Form Rec.Senha*/
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Fundo escuro semi-transparente
},

modalContent: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  width: '80%',
  alignItems: 'center',
},

label: {
  fontSize: 18,
  marginBottom: 10,
},

input: {
  height: 40,
  width: '100%',
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 20,
  paddingLeft: 10,
  borderRadius: 5,
},

button: {
  backgroundColor: '#4CAF50',
  width: "80%",
  padding: 10,
  borderRadius: 5,
  marginBottom: 10,
},

buttonText: {
  color: 'white',
  textAlign: 'center',
},

closeButton: {
  backgroundColor: '#D9534F',
  width: "80%",
  padding: 10,
  borderRadius: 5,
},

closeButtonText: {
  color: 'white',
  textAlign: 'center',
},


})