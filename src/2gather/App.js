import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ChatProvider } from './contexts/ChatContext';
import Route from './navigations/Route';
import UserProvider from './contexts/UserContext';
import { ToastProvider } from './contexts/ToastContext';
import ToastWrapper from './components/ToastWrapper';

const App = () => {
  return (
    <ToastProvider>
      <UserProvider>
        <ChatProvider>
          <NavigationContainer>
            <Route />
          </NavigationContainer>
        </ChatProvider>
      </UserProvider>
      <ToastWrapper />
    </ToastProvider>
  );
};

export default App;
