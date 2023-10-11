import React from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  } from 'react-native';
import { useUser } from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


function clearStorage(){
  AsyncStorage.clear()
}
  
export default function TestAfterLogin( { navigation }  ) {
  const {signed, name} = useUser();

  return (
    <View>
        <Text>Seja bem vindo {name}</Text>

        <TouchableOpacity style={styles.buttonIn} 
          onPress={() => {clearStorage()}}>
          <Text style={styles.forgotPasswordText}>Clear Storage</Text>
        </TouchableOpacity>
    </View>
    
  )
};

const styles = StyleSheet.create({
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
containerBody:{
  flex:1,
    backgroundColor: '#2368A2',
    justifyContent: 'center',
}});
