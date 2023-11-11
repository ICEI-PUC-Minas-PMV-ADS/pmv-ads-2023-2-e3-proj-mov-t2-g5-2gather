import React, { createContext, useState, useContext } from 'react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ visible: false, message: '', senderName: '', appName: '' });

  const showToast = (message, senderName, appName) => {
    setToast({ visible: true, message, senderName, appName });
    setTimeout(() => setToast({ ...toast, visible: false }), 3000);
  };

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContext;