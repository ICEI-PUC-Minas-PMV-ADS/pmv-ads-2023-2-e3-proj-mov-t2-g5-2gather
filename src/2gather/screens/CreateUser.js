import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Image
} from 'react-native';
import leftarrow from '../../2gather/assets/leftarrow.png'

export default function CreateUser({ navigation }) {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [sector, setSector] = useState('');
    const [role, setRole] = useState('');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const [showNotification, setShowNotification] = useState(false);
    const slideAnim = useRef(new Animated.Value(-100)).current;

    function isValidEmail(email) {
        return emailRegex.test(email);
    }


    const handleSubmit = () => {
        if (!isValidEmail(email)) {
            showSlideNotification();
            return;
        }
        console.log('Usuário criado');
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


    //console.log(id)
    //console.log(role)
    return (


        <View style={styles.container}>
            {showNotification && (
                <Animated.View style={[styles.notification, { bottom: slideAnim }]}>
                    <Text style={styles.notificationText}>
                        Por favor, insira um endereço de e-mail válido.
                    </Text>
                </Animated.View>
            )}
            <Text style={styles.header} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/leftarrow.png')}></Image>
                <Text>Criar Usuário</Text>
            </Text>
            <View style={styles.container2}>
                <Text style={styles.headerInput}>Informe os dados abaixo</Text>

                <Text>ID do Usuário</Text>
                <TextInput style={styles.input} value={id} onChangeText={setId} />

                <Text>Email Corporativo</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail} />

                <Text>Senha</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Text>Nome do Colaborador</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName} />

                <Text>Setor</Text>
                <TextInput
                    style={styles.input}
                    value={sector}
                    onChangeText={setSector}
                />

                <Text>Cargo</Text>
                <TextInput style={styles.input} value={role} onChangeText={setRole} />

                <TouchableOpacity style={styles.buttonCreate} onPress={() => { handleSubmit() }}>
                    <Text style={styles.buttonText}>Criar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    headerInput: {
        marginBottom: '10%',
        fontSize: 20
    },
    container: {
        flex: 1,
        padding: 0,
    },
    container2: {
        padding: 20,
        gap: 5,
        display: 'flex'

    },
    header: {
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
        paddingLeft: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 20,
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
    }
});
