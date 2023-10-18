import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Image,
    ScrollView
} from 'react-native';
import { Register } from '../services/auth.services'
import { GetRoles } from '../services/role.services'
import leftarrow from '../../2gather/assets/leftarrow.png'
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function CreateUser({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState();

    const [showNotification, setShowNotification] = useState(false);
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const slideAnim = useRef(new Animated.Value(-100)).current;

    const getRoles = async () => {
        try {
            setLoading(true);
            const result = await GetRoles() || [];
            setRoles(result);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    function isValidEmail(email) {
        return emailRegex.test(email);
    }

    const handleRegister = async () => {
        if (!isValidEmail(email)) {
            showSlideNotification();
            return;
        }
        try {
            const result = await Register({ name: name, email: email, phone: phone, password: password, role: role })
            console.log(result);
            alert('Conta criada com sucesso')
            navigation.navigate('Login');
        } catch (error) {
            console.log(error)
            setError(error.message);
        } finally {
            setLoading(false);
        }
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
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
        >


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

                    <Text>Telefone</Text>
                    <TextInput style={styles.input} value={phone} onChangeText={setPhone} />

                    <Text>Senha</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <Text>Nome do Colaborador</Text>
                    <TextInput style={styles.input} value={name} onChangeText={setName} />
                    
                    <Text>Cargo</Text>
                    <View style={styles.input}>
                    <RNPickerSelect      
                        onValueChange={(value) => setRole(value)}
                        placeholder={{
                            label: 'Click e selecione um cargo',
                            value: '',
                        }}
                        items={roles.map(item => ({
                            label: item.name,
                            value: item.id
                        }))}
                        style={{ 
                            inputIOS: {backgroundColor: '#ecf0f1', borderRadius: 0, paddingHorizontal: 50, color: 'black', },
                            inputAndroid: {backgroundColor: '#ecf0f1', borderRadius: 0, paddingHorizontal: 50, color: 'black', },
                            imputWeb: {backgroundColor: '#ecf0f1', borderRadius: 0, paddingHorizontal: 50, color: 'black', },
                        }}

                    />
                    </View>
                    <TouchableOpacity style={styles.buttonCreate} onPress={() => { handleRegister() }}>
                        <Text style={styles.buttonText}>Criar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
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
        gap: 2,
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
    }
});
