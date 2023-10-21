import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import TestAfterLogin from '../screens/TestAfterLogin';
import EditUser from '../screens/EditUser';
import InactivateUser from '../screens/InactivateUser';
import UserManagement from '../screens/UserManagement';
import Homepage from '../screens/Homepage';
import CreateUser from '../screens/CreateUser';
import Profile from '../screens/Profile';
import BroadcastList from '../screens/BroadcastList';
import Contacts from '../screens/Contacts' ;
import Chat from '../screens/Chat';

const stack = createNativeStackNavigator();

const MainNav = () => {
    return (
        <stack.Navigator initialRouteName="Chat">
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
                name="BroadcastList"
                component={BroadcastList}
            />
             <stack.Screen
                name="Contacts"
                component={Contacts}
            />
            <stack.Screen
                name="Chat"
                component={Chat}
                options={{
                    header: () => null,
                }}
            />
        </stack.Navigator>
    );
};

export default MainNav;