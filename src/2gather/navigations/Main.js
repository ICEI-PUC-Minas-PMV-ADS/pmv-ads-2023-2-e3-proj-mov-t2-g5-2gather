/*import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TestAfterLogin from '../screens/TestAfterLogin';
import EditUser from '../screens/EditUser';
import InactivateUser from '../screens/InactivateUser';
import UserManagement from '../screens/UserManagement';

const Stack = createNativeStackNavigator();

const MainNav = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => null,
                }}
                />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    header: () => null,
                }}
                />
            <Stack.Screen
                name="CreateUser"
                component={CreateUser}
                options={{
                    headerShown: false,
                }}
                />
            <Stack.Screen
                name="NewScreenTest"
                component={NewScreenTest}
                options={{
                    header: () => null,
                }}
                />

        </Stack.Navigator>
    );
};

export default MainNav;