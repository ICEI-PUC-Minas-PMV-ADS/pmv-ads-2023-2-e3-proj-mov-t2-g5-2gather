import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import socket from "../services/socket";
import { Decrypt } from "../services/encryption.service";
import { useUser } from "../contexts/UserContext";
import Toast from '../components/Toast'

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const { id, privateE2eContext } = useUser("");
    const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState({ appName: '', senderName: '', message: '' });
    const idRef = useRef(id);
    const pe2eRef = useRef(privateE2eContext);

    useEffect(() => {
		idRef.current = id;
        pe2eRef.current = privateE2eContext
	}, [id, privateE2eContext]);
    
    function decryptMessage(item, text) {
		let publicKey
		if (item.many == 'true') {
			publicKey = item.pkeSentBy
			try { text = JSON.parse(text); } catch {}
			text = idRef.current in text ? text[idRef.current] : "Couldn't decrypt the message"
		} else {
			publicKey = item.idSentBy == idRef.current ? item.pkeReceiver : item.pkeSentBy
		}
		const decryptedText = Decrypt(text, publicKey, pe2eRef.current).message;
		return {
			...item,
			text: decryptedText
		};
	}
    
    const handleRoomMessage = useCallback((message) => {
        if(idRef.current !== message.idSentBy){
            let decryptedMessage = decryptMessage(message, message.text);
            setToastMessage({ 
                appName: '2Gather',
                senderName: message.user, 
                message: decryptedMessage.text 
            });
            setShowToast(true);
        }
    }, [idRef, pe2eRef]);

    useEffect(() => {
        socket.on("roomMessage", handleRoomMessage);
    }, [socket]);

    useEffect(() => {
		if (showToast) {
			setTimeout(() => {
				setShowToast(false);
			}, 3000);
		}
	}, [showToast]);

    return (
        <SocketContext.Provider value={{ notifications, setNotifications }}>
        {children}
         
        {showToast && (
            <Toast
                appName={toastMessage.appName}
                senderName={toastMessage.senderName}
                message={toastMessage.message}
                visible={showToast}
            />
        )}
           
        </SocketContext.Provider>
    );
};