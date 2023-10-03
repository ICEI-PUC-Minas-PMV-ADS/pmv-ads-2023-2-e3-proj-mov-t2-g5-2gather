import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Button } from 'react-native-paper';


const Home = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.textGoodSeeYou}>
        Olá, bom te ver!
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
          Fazer login
        </Button>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  body: {
    flex: 1,
    fontFamily: 'Inter-Medium',
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

export default Home;
