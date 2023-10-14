import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Animated,
} from 'react-native';


export default function EditUser({ navigation }) {
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
        console.log('Usuário editado');
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
        <View style={styles.container}>
            {showNotification && (
                <Animated.View style={[styles.notification, { bottom: slideAnim }]}>
                    <Text style={styles.notificationText}>
                        Por favor, insira um endereço de e-mail válido.
                    </Text>
                </Animated.View>
            )}
            <Text style={styles.header} onPress={() => navigation.goBack()}>
                <Text>Editar usuário</Text>
            </Text>
            <View style={styles.container2}>
                <Text style={styles.headerInput}>Alterar dados do cadastro</Text>

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
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonSave} onPress={() => { handleSubmit() }}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCancel} onPress={() => navigation.navigate("UserManagement")}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerInput: {
        marginBottom: '25px',
        fontSize: 20
    },
    container: {
        flex: 1,
        padding: 0,
    },
    container2: {
        padding: 20,
        gap: 10,
        display: 'flex'

    },
    header: {
        gap: 10,
        color: '#FFFCF4',
        fontFamily: 'inter',
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
        fontFamily: 'inter',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 20,
        borderRadius: 10,
    },
    buttonSave: {
        backgroundColor: '#74D99F',
        padding: 10,
        borderRadius: 15,
        width: 120,
        alignItems: 'center'
    },
    buttonCancel: {
        backgroundColor: '#ADB5BD',
        padding: 10,
        borderRadius: 15,
        width: 120, 
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFCF4', 
        fontSize: 20,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        gap: 70
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
