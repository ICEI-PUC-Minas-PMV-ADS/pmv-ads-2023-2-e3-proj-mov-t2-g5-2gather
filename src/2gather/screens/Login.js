import React from "react";
import React from "react";
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Login from "./screens/Login";
import Login from "./screens/Login";

const Login = () => {
    return (
      <View style={styles.body}>
        <Text style={styles.textGoodSeeYou}>
          Teste de navegação - LOGIN
        </Text>
  
        <View>
          <Image
            style={{
              width: 155,
              height: 175,
              borderRadius: 15,
            }}
            source={require('../assets/logo.png')}
          />
        </View>
  
        <View style={styles.buttonLogin}>
          <Button icon="login" mode="contained" onPress={() => console.log('Pressed')}>
            Entrar
          </Button>
        </View>
      </View>
    )
  };
  
  
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2368A2'   
    },
  
    textGoodSeeYou: {
      margin: 50,
      marginBottom: 150,
      fontSize: 30,
      color: '#FFFFFF'
    },
  
    buttonLogin: {
      marginTop: 150,
      width: '75%',
      buttonColor: '#1A4971',
      textColor: '#FFFFFF',
      marginBottom: 15,
      fontSize: 17,
      borderRadius: 10,
    }
  
  });
  
  export default Login;
export const App = () => {
  return (
    <Login />
  );


};
  