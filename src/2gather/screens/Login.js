import React from 'react';
import React, { /*useState,*/ useEffect } from 'react';
import {
  //View,
  //Keyboard,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated
} from 'react-native';

import { Button } from 'react-native-paper';

const Login = () => {

  //const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  //const [opacity] = useState(new Animated.Value(0));
  //const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }));


  useEffect(() => {
    KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      })
    ]).start();

  },
  );

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 100,
      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100,
      })
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: 75,
            height: 85,
          }}
          source={require('../assets/logo.png')}
        />
      </View>
      <View>
        <Text style={styles.textWellCome}>
          Entre e conecte-se com a sua equipe de trabalho!
        </Text>
      </View>

      <Animated.View
        style={[
          styles.containerLogin,
          {
            opacity: opacity,
            transform: [
              { translatey: offset.y }
            ]
          }
        ]
        }>
        <View>
         <Text style={styles.labelLogin}>E-mail</Text>
        <TextInput
          style={styles.inputLogin}
          outoCorrect={false}
          onChangeText={() => { }}
        />
        </View>


        <View>
          <Text icon="login" style={styles.labelLogin}>Senha</Text>
          <TextInput
            style={styles.inputLogin}
            outoCorrect={false}
            onChangeText={() => { }}
          />
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={{color: "#FFFFFF", fontSize: 15, marginTop: -35 }}>Esqueceu a senha?</Text>
        </TouchableOpacity>


        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Entrar
        </Button>



      </Animated.View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2368A2'
  },

  containerLogo: {
    marginTop: 50,
  },

  textWellCome: {
    margin: 50,
    marginBottom: 50,
    fontSize: 22,
    color: '#FFFFFF',
  },

  containerLogin: {
    justifyContent: 'center',
    width: '75%',
  },

  inputLogin: {
    backgroundColor: '#AAD4F5',
    height: 40,
    marginBottom: 15,
    fontSize: 17,
    borderRadius: 10,
    marginBottom: 50,
  },

  forgotPassword: {
  //  alignItems: 'left',
  //  color: "#FFFFFF",
    marginBottom: 50,
  },

  labelLogin: {
    color: "#FFFFFF",
    fontSize: 17
  }


});

export default Login;