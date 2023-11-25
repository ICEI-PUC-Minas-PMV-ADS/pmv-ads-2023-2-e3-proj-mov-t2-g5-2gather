import React, { createContext, useContext, useEffect, useState } from 'react';
import socket from "../services/socket";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        socket.on("newMessage", (message) => {
            setNotifications((prevNotifications) => [...prevNotifications, message]);
        });

        return () => {
            socket.off("newMessage");
        };
    }, []);

    return (
        <SocketContext.Provider value={{ notifications, setNotifications }}>
            {children}
        </SocketContext.Provider>
    );
};