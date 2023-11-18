import React from 'react';
import { useToast } from '../contexts/ToastContext';
import Toast from '../components/Toast';

const ToastWrapper = () => {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          visible={toast.visible}
          message={toast.message}
          senderName={toast.senderName}
          appName={toast.appName}
        />
      ))}
    </>
  );
};

export default ToastWrapper;
