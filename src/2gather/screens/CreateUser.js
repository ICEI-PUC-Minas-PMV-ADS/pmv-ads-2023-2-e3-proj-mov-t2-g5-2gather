import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,

    TouchableOpacity,
    Animated,
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function CreateUser({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState();
    const [id, setId] = useState('');
    const [sector, setSector] = useState('');

    const [showNotification, setShowNotification] = useState(false);
    const [roles, setRoles] = useState([]);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const slideAnim = useRef(new Animated.Value(-100)).current;

    const getRoles = async () => {
        GetRoles().then(r => {
            if (r !== null) {
                setRoles(r)
            } else {
                //erro pro user
            }
        })
    };

    function isValidEmail(email) {
        return emailRegex.test(email);
    }

    const handleRegister = () => {
        if (!isValidEmail(email)) {
            showSlideNotification();
            return;
        }
        //console.log('Usuário criado');

    };


    const showSlideNotification = () => {
        setShowNotification(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
        }).start(() => {
            setTimeout(() => {
                Animated.timing(slideAnim, {
                    toValue: -100,
                    duration: 500,
                    useNativeDriver: false,
                }).start(() => {
                    setShowNotification(false);
                });
            }, 3000);  //3 segundos
        });
    }

    return (
            <SafeAreaView style={styles.container}>
                {showNotification && (
                    <Animated.View style={[styles.notification, { bottom: slideAnim }]}>
                        <Text style={styles.notificationText}>
                            Por favor, insira um endereço de e-mail válido.
                        </Text>
                    </Animated.View>
                )}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text>
                            <Animatable.Image
                                source={require('../assets/leftarrow.png')}
                                resizeMode="contain"
                                style={{ marginRight: 10 }}
                            />
                            <Text style={styles.textHeader}> Criar Usuário</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container2}>
                    <Text style={styles.headerInput}>Informe os dados abaixo</Text>

                    <Text>ID do Usuário</Text>
                    <TextInput style={styles.input} value={id} onChangeText={(text) => setId(text)} />

                    <Text>Email Corporativo</Text>
                    <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />

                    <Text>Senha</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />

                    <Text>Nome do Colaborador</Text>
                    <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} />

                    <Text>Setor</Text>
                    <TextInput
                        style={styles.input}
                        value={sector}
                        onChangeText={setSector}
                    />

                    <Text>Cargo</Text>
                    <TextInput style={styles.input} value={role} onChangeText={(text) => setRole(text)} />

                    <TouchableOpacity style={styles.buttonCreate} onPress={() => { handleRegister() }}>
                        <Text style={styles.buttonText}>Criar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({

    headerInput: {
        marginBottom: 10,
        fontSize: 20
    },
    container: {
        flex: 1,
        padding: 0,
    },
    container2: {
        padding: 20,
        gap: 2,
        display: 'flex'

    },
    header: {
        flexDirection: 'row',
        gap: 10,
        color: '#FFFCF4',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        height: 65,
        backgroundColor: '#2368A2',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10,
    },
    input: {
        height: 40,
        borderColor: 'red',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10
    },
    buttonCreate: {
        backgroundColor: '#2368A2',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#FFFCF4',
        fontSize: 20,
    },
    notification: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationText: {
        color: 'white',
        fontSize: 16,
    },
    textHeader: {
        color: '#FFFCF4',  // Defini a cor para o texto
        fontSize: 20,
        fontWeight: 'bold',
    },

});
