import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dbGetE2e } from '../services/localDb/user.services';
import { isAvailableAsync } from 'expo-media-library';
export const UserContext = createContext();

export default function UserProvider({ children }) {
<<<<<<< HEAD
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [photo, setPhoto] = useState('');
  const [id, setId] = useState('');
  const [privateE2eContext, setPrivateE2eContext] = useState('');
  const [publicE2eContext, setPublicE2eContext] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedSigned = await AsyncStorage.getItem('signed');
        if (storedSigned == 'true' && signed == true) {
          const id = await AsyncStorage.getItem('id');
          const storedName = await AsyncStorage.getItem('name');
          const access = await AsyncStorage.getItem('access');
          const refresh = await AsyncStorage.getItem('refresh');
          const photo = await AsyncStorage.getItem('photo');
          const email = await AsyncStorage.getItem('email');
          const phone = await AsyncStorage.getItem('phone');
          const role = await AsyncStorage.getItem('role');
          const admin = await AsyncStorage.getItem('isAdmin');
          let e2eKeys = null;

=======
    const [signed, setSigned] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [photo, setPhoto] = useState('');
    const [id, setId] = useState('');
    const [privateE2eContext, setPrivateE2eContext] = useState('');
    const [publicE2eContext, setPublicE2eContext] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedSigned = await AsyncStorage.getItem('signed');
                if(storedSigned == 'true') {
                    setSigned(true)
                }
                if(storedSigned == 'true' && signed == true) {
                    const id = await AsyncStorage.getItem('id');
                    const storedName = await AsyncStorage.getItem('name');
                    const access = await AsyncStorage.getItem('access');
                    const refresh = await AsyncStorage.getItem('refresh');
                    const photo = await AsyncStorage.getItem('photo');
                    const email = await AsyncStorage.getItem('email');
                    const phone = await AsyncStorage.getItem('phone');
                    const role = await AsyncStorage.getItem('role');
                    const admin = await AsyncStorage.getItem('isAdmin');
                    let e2eKeys = null

                    try{
                        e2eKeys = await dbGetE2e(id)
                    }
                    catch{}

                    // vale fazer um request aqui pra ver se a access/refresh token estão validas, caso n, deslogar.
                    if (storedSigned !== null && access !== null && refresh !== null && id != null) {
                        setSigned(true);
                        setId(id);
                    } else {
                        AsyncStorage.clear()
                        setSigned(false);
                    }
                    setName(storedName);
                    setPhoto(photo)
                    setEmail(email)
                    setPhone(phone)
                    setRole(role)
                    setIsAdmin(admin);
                    if(e2eKeys){
                        setPrivateE2eContext(e2eKeys.privateKey)
                        setPublicE2eContext(e2eKeys.publicKey)
                    }else{
                        setPrivateE2eContext('KeyNotFound')
                        setPublicE2eContext('KeyNotFound')
                    }
                    
                }
            } catch (error) {
                console.error('Error retrieving data from AsyncStorage:', error);
            }
        };

        fetchData();
    }, [signed]);

    useEffect(() => {
        const checkKeys = async () => {
>>>>>>> 2fcb8d9da95547fc3ca73e69ab466ad4217b00cd
          try {
            e2eKeys = await dbGetE2e(id);
          } catch {}

          // vale fazer um request aqui pra ver se a access/refresh token estão validas, caso n, deslogar.
          if (
            storedSigned !== null &&
            access !== null &&
            refresh !== null &&
            id != null
          ) {
            setSigned(true);
            setId(id);
          } else {
            AsyncStorage.clear();
            setSigned(false);
          }
          setName(storedName);
          setPhoto(photo);
          setEmail(email);
          setPhone(phone);
          setRole(role);
          setIsAdmin(admin);
          if (e2eKeys) {
            setPrivateE2eContext(e2eKeys.privateKey);
            setPublicE2eContext(e2eKeys.publicKey);
          } else {
            setPrivateE2eContext('KeyNotFound');
            setPublicE2eContext('KeyNotFound');
          }
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, [signed]);

<<<<<<< HEAD
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

  useEffect(() => {
    const checkKeys = async () => {
      try {
        if (signed) {
          const access = await AsyncStorage.getItem('access');
          const refresh = await AsyncStorage.getItem('refresh');

          if (!access || !refresh) {
            if (signed == 'true') {
              setSigned(false);
              setId(null);
              setName(null);
            }
          }
        }
      } catch (error) {
        console.error('Error reading data from AsyncStorage:', error);
      }
    };

    checkKeys();

    const intervalId = setInterval(checkKeys, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [signed, setSigned]);

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        id,
        setId,
        name,
        setName,
        photo,
        setPhoto,
        email,
        setEmail,
        phone,
        setPhone,
        role,
        setRole,
        privateE2eContext,
        setPrivateE2eContext,
        publicE2eContext,
        setPublicE2eContext,
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
=======
    return (
        <UserContext.Provider
            value={{
                signed,
                setSigned,
                id,
                setId,
                name,
                setName,
                photo,
                setPhoto,
                email,
                setEmail,
                phone,
                setPhone,
                role,
                setRole,
                privateE2eContext,
                setPrivateE2eContext,
                publicE2eContext,
                setPublicE2eContext,
                isAdmin,
                setIsAdmin,
            }}>
            {children}
        </UserContext.Provider>
    );
>>>>>>> 2fcb8d9da95547fc3ca73e69ab466ad4217b00cd
}

export function useUser() {
  const context = useContext(UserContext);

<<<<<<< HEAD
  const {
    signed,
    setSigned,
    id,
    setId,
    name,
    setName,
    photo,
    setPhoto,
    email,
    setEmail,
    phone,
    setPhone,
    role,
    setRole,
    privateE2eContext,
    setPrivateE2eContext,
    publicE2eContext,
    setPublicE2eContext,
    isAdmin,
    setIsAdmin,
  } = context;

  return {
    signed,
    setSigned,
    id,
    setId,
    name,
    setName,
    photo,
    setPhoto,
    email,
    setEmail,
    phone,
    setPhone,
    role,
    setRole,
    privateE2eContext,
    setPrivateE2eContext,
    publicE2eContext,
    setPublicE2eContext,
    isAdmin,
    setIsAdmin,
  };
=======
    const { 
        signed, setSigned,
        id, setId,
        name, setName,
        photo, setPhoto,
        email, setEmail,
        phone, setPhone,
        role, setRole,
        privateE2eContext, setPrivateE2eContext,
        publicE2eContext, setPublicE2eContext,
        isAdmin,
        setIsAdmin,
    } = context;

    return { signed, setSigned, id, setId, name, setName, photo, setPhoto, email, setEmail, phone, setPhone, role, setRole, privateE2eContext, setPrivateE2eContext, publicE2eContext, setPublicE2eContext,  isAdmin, setIsAdmin };
>>>>>>> 2fcb8d9da95547fc3ca73e69ab466ad4217b00cd
}
