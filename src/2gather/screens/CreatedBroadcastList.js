import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

export default function CreatedBroadcastList({ navigation }) {
    const [inputFocused, setInputFocused] = useState(false);

    return (
        <View style={styles.chatcontainer}>

            <Text style={styles.header} onPress={() => navigation.goBack()}>
            <Image source={require("../assets/leftarrow.png")}></Image>
                <Text>Mensagens</Text>
            </Text>

            <View style={styles.date}>
            <Text style={styles.dateBroadcast}>
                Hoje
            </Text>
            </View>

            <Text style={styles.dateBroadcastMessage}>
                Você criou uma lista de transmissão com <Text style={styles.contactCount}>2</Text> destinatários. Só você pode enviar mensagem aqui.
            </Text>


            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputContainerInput}
                    placeholder={inputFocused ? '' : 'Comece a digitar'}
                    onFocus={() => setInputFocused(true)}
                />
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    chatcontainer: {
        flex: 1,
    },
    date:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
    },
    header: {
        gap: 10,
        color: "#FFFCF4",
        fontSize: '20px',
        fontWeight: "bold",
        marginBottom: 20,
        height: 65,
        backgroundColor: "#2368A2",
        padding: 0,
        display: "flex",
        alignItems: "center",
        paddingLeft: 10,
    },
    dateBroadcast: {
        backgroundColor: '#ADB5BD',
        borderRadius: 5,
        textAlign: 'center',
        margin: 10,
        padding: 5,
        width: '30%',
        fontSize: '16px',
    },
    dateBroadcastMessage: {
        backgroundColor: '#ADB5BD',
        borderRadius: 5,
        textAlign: 'center',
        margin: 10,
        padding: 40,
        fontSize: '20px',
        opacity: '0.9',
    
    },
    contactCount: {
        fontWeight: 'bold',
    },
    inputContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10,
    },
    inputContainerInput: {
        height: 40,
        borderColor: "#868E96",
        backgroundColor: "#FFFCF4",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    }
});
