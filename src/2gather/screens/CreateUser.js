import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,

    TouchableOpacity,
    Animated,
    Image
} from 'react-native';
import { Register } from '../services/auth.services'
import leftarrow from '../../2gather/assets/leftarrow.png'
import RNPickerSelect from 'react-native-picker-select';

export default function CreateUser({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState();

    const [showNotification, setShowNotification] = useState(false);
    const [roles, setRoles] = useState([]);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const slideAnim = useRef(new Animated.Value(-100)).current;

    const getRoles = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/role/list/');
            const data = await response.json(); // Parse the JSON response
            setRoles(data); // Update the state with the retrieved options
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    function isValidEmail(email) {
        return emailRegex.test(email);
    }

    const handleRegister = () => {
        if (!isValidEmail(email)) {
            showSlideNotification();
            return;
        }
        Register({ name: name, email: email, password: password, role: role }).then(res => {
            showSlideNotification();
            if(res.status === 201){
                //passar uma mensaegm de success pro user
                alert('Conta criada com sucesso')
                navigation.navigate('Login');
            }
            else {
                //passar uma msg de falha pro user
                console.log('fail')
            }
        });
    }


    useEffect(() => {
        getRoles();
    }, []);

    const showSlideNotification = () => { // sempre pensar em reutilização em formato de componenetes... isso seria bem mais util caso desse pra passar o texto & tipo e ser reutilizado em todos nossos templates.
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
                <Image source={require('../assets/leftarrow.png')}></Image>
                <Text>Criar Usuário</Text>
            </Text>
            <View style={styles.container2}>
                <Text style={styles.headerInput}>Informe os dados abaixo</Text>

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

                <RNPickerSelect
                    onValueChange={(value) => setRole(value)}
                    placeholder={{
                        label: 'Selecione um cargo',
                        value: '',
                    }}
                    items={roles.map(item => ({
                        label: item.name,
                        value: item.id
                    }))}
                />

                <TouchableOpacity style={styles.buttonCreate} onPress={() => { handleRegister() }}>
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
        borderColor: 'red',
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
