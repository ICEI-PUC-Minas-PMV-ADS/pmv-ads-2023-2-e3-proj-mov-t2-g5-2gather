import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TestAfterLogin from '../screens/TestAfterLogin';
import EditUser from '../screens/EditUser';
import InactivateUser from '../screens/InactivateUser';
import UserManagement from '../screens/UserManagement';
import CreateUser from '../screens/CreateUser';

const stack = createNativeStackNavigator();

const MainNav = () => {
    return (
        <stack.Navigator initialRouteName="TestAfterLogin">
            <stack.Screen
                name="TestAfterLogin"
                component={TestAfterLogin}
                options={{
                    header: () => null,
                }}
            />
            <stack.Screen
                name="CreateUser"
                component={CreateUser}
            />
            <stack.Screen
                name="EditUser"
                component={EditUser}
            />
            <stack.Screen
                name="InactivateUser"
                component={InactivateUser}

            />
            <stack.Screen
                name="UserManagement"
                component={UserManagement}
            />


        </stack.Navigator>
    );
};

export default MainNav;