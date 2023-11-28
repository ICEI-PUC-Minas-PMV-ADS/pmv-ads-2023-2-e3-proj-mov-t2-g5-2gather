import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Route from "./navigations/Route";
import UserProvider from "./contexts/UserContext";
import { ToastProvider } from "./contexts/ToastContext";
import ToastWrapper from "./components/ToastWrapper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SocketProvider } from "./contexts/SocketContext";

const App = () => {
  return (
    <SafeAreaProvider>
      <ToastProvider>
        <UserProvider>
          <SocketProvider>
            <NavigationContainer>
              <Route />
            </NavigationContainer>
          </SocketProvider>
        </UserProvider>
        <ToastWrapper />
      </ToastProvider>
    </SafeAreaProvider>
  );
};

export default App;
