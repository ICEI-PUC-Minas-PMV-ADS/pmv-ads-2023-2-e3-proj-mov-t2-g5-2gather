import React from 'react';
import { useToast } from '../contexts/ToastContext';
import Toast from '../components/Toast';

const ToastWrapper = () => {
  const { toast } = useToast();

  return (
    toast.visible && (
    <Toast
      visible={false}
      message={toast.message}
      senderName={toast.senderName}
      appName={toast.appName}
    />
    )
  );
};

export default ToastWrapper;