import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable'
import { useState } from 'react';
import { SignIn } from '../services/auth.services.js'
import { useUser } from '../contexts/UserContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { dbGetE2e, dbSetE2e } from '../services/localDb/user.services.js';
import { createE2E } from '../services/encryption.service.js';
import { UpdatePublicE2e } from '../services/user.services.js';


export default function Login(navigation) {
  const { setSigned, setId, setName, setPrivateE2eContextContext, privateE2eContext } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {

    SignIn({ email: email, password: password }).then(async (res) => {
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

        let e2eKeys = await dbGetE2e(res.id)
        if (!e2eKeys && !res.pke) {
          e2eKeys = await createE2E()

          if (e2eKeys) {
            await dbSetE2e(res.id, e2eKeys.privateKey, e2eKeys.publicKey)
            setPrivateE2eContextContext(e2eKeys.privateKey)
            await UpdatePublicE2e({ publicE2e: e2eKeys.publicKey })
            
          } else {
            console.log('Error creating e2e keys')
          }
        }else if(res.pke && !e2eKeys){
            alert('This account is not yours. you will not be able to read any message.')
        }
      } else {
        alert('Usuário ou senha inválidos!');
      }
    });
  }

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
            onPress={() => { console.log('On press acionado!') }}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonIn}
            onPress={() => { handleSignIn() }}>
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
})