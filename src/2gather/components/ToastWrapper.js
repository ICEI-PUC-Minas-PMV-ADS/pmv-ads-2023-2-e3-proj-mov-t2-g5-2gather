import React from 'react';
import { useToast } from '../contexts/ToastContext';
import Toast from '../components/Toast';

const ToastWrapper = () => {
  const { toasts } = useToast();
  const handlePress = (toast) => {
    console.log("Toast pressionado:", toast);
  };

  return (
    <>
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          visible={toast.visible}
          message={toast.message}
          senderName={toast.senderName}
          appName={toast.appName}
          onPress={() => handlePress(toast)}
        />
      ))}
    </>
  );
};

export default ToastWrapper;