import React, { createContext, useState, useContext } from 'react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  
  const showToast = (message, senderName, appName) => {
    // Adiciona uma nova notificação à fila
    const newToast = { visible: true, message, senderName, appName };
    setToasts([...toasts, newToast]);
    // Inicia um temporizador para remover a notificação após 3 segundos
    setTimeout(() => removeToast(newToast), 3000);
  };

  const removeToast = (toastToRemove) => {
    setToasts(currentToasts => currentToasts.filter(toast => toast !== toastToRemove));
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContext;