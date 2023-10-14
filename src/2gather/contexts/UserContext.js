import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [signed, setSigned] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedSigned = await AsyncStorage.getItem('signed');
                const storedName = await AsyncStorage.getItem('name');
                const access = await AsyncStorage.getItem('access');
                const refresh = await AsyncStorage.getItem('refresh');

                if (storedSigned !== null && access !== null && refresh !== null) {
                    setSigned(JSON.parse(storedSigned));
                } else {
                    AsyncStorage.clear()
                    setSigned(false);
                }
                if (storedName !== null) {
                    setName(storedName);
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
                await AsyncStorage.setItem('name', name);
            } catch (error) {
                console.error('Error saving data to AsyncStorage:', error);
            }
        };

        saveData();
    }, [signed, name]);

    return (
        <UserContext.Provider
            value={{
                signed,
                setSigned,
                name,
                setName,
            }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);

    const { signed, setSigned, name, setName } = context;
    return { signed, setSigned, name, setName };
}
