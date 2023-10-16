import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TestAfterLogin from '../screens/TestAfterLogin';
import EditUser from '../screens/EditUser';
import InactivateUser from '../screens/InactivateUser';
import UserManagement from '../screens/UserManagement';
import Homepage from '../screens/Homepage';
import CreateUser from '../screens/CreateUser';
import Profile from '../screens/Profile';
import Contatos from '../screens/Contatos';

const stack = createNativeStackNavigator();

const MainNav = () => {
    return (
        <stack.Navigator initialRouteName="Homepage">
            <stack.Screen
                name="Homepage"
                component={Homepage}
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
            <stack.Screen
                name="Profile"
                component={Profile}
            />
             <stack.Screen
                name="Contatos"
                component={Contatos}
            />
        </stack.Navigator>
    );
};

export default MainNav;