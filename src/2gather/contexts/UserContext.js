import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dbGetE2e } from '../services/localDb/user.services';
export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [signed, setSigned] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [role, setRole] = useState('');
    const [photo, setPhoto] = useState('');
    const [id, setId] = useState('');
    const [privateE2eContext, setPrivateE2eContextContext] = useState('');
    const [publicE2eContext, setPublicE2eContextContext] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = await AsyncStorage.getItem('id');
                const storedSigned = await AsyncStorage.getItem('signed');
                const storedName = await AsyncStorage.getItem('name');
                const access = await AsyncStorage.getItem('access');
                const refresh = await AsyncStorage.getItem('refresh');
                const e2eKeys = await dbGetE2e(id)

                // vale fazer um request aqui pra ver se a access/refresh token estão validas, caso n, deslogar.
                if (storedSigned !== null && access !== null && refresh !== null && id != null) {
                    setSigned(true);
                    setId(id);
                } else {
                    AsyncStorage.clear()
                    setSigned(false);
                }
                if (storedName !== null) {
                    setName(storedName);
                }
                if(e2eKeys){
                    setPrivateE2eContextContext(e2eKeys.privateKey)
                    setPublicE2eContextContext(e2eKeys.publicKey)
                }
            } catch (error) {
                console.error('Error retrieving data from AsyncStorage:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const saveData = async () => {
            try {
                await AsyncStorage.setItem('signed', JSON.stringify(signed));
            } catch (error) {
                console.error('Error saving data to AsyncStorage:', error);
            }
        };

        saveData();
    }, [signed]);

    return (
        <UserContext.Provider
            value={{
                signed,
                setSigned,
                id,
                setId,
                name,
                setName,
                privateE2eContext,
                setPrivateE2eContextContext,
                publicE2eContext,
                setPublicE2eContextContext
            }}>
            {children}
        </UserContext.Provider>
    );
}

const checkKeys = async() =>{
    //gambiarra pra logout

    try {
        const access = await AsyncStorage.getItem('access');
        const refresh = await AsyncStorage.getItem('refresh');
    
        if (!access || !refresh) {
            const context = useContext(UserContext);
            const { signed, setSigned, id, setId, name, setName, privateE2eContext, setPrivateE2eContextContext, publicE2eContext, setPublicE2eContextContext } = context;
            setSigned(false);
            setId(null);
            setName(null);
        }
      } catch (error) {
        console.error('Error reading data from AsyncStorage:', error);
      }
}

export function useUser() {
    const context = useContext(UserContext);
    if(context.signed == true)
        checkKeys()

    const { signed, setSigned, id, setId, name, setName, privateE2eContext, setPrivateE2eContextContext, publicE2eContext, setPublicE2eContextContext } = context;
    return { signed, setSigned, id, setId, name, setName, privateE2eContext, setPrivateE2eContextContext, publicE2eContext, setPublicE2eContextContext };
}
