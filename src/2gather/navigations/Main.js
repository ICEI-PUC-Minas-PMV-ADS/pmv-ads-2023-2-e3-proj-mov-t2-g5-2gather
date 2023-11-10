import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import TestAfterLogin from '../screens/TestAfterLogin';
import EditUser from '../screens/EditUser';
import InactivateUser from '../screens/InactivateUser';
import UserManagement from '../screens/UserManagement';
import Homepage from '../screens/Homepage';
import CreateUser from '../screens/CreateUser';
import Profile from '../screens/Profile';
import NewPassword from '../screens/NewPassword';
import BroadcastList from '../screens/BroadcastList';
import Chat from '../screens/Chat';
import BroadcastCreate from '../screens/BroadcastCreate';
import Contacts from '../screens/Contacts';
import ArchivedGroups from '../screens/ArchivedGroups';
import NewList from '../screens/NewList';
import CreateReceivers from '../screens/CreateReceivers';
import NewGroup from '../screens/NewGroup';
import CreateNewGroup from '../screens/CreateNewGroup';
import GroupConversation from '../screens/GroupConversation';
import GroupInfo from '../screens/GroupInfo';
import EditGroup from '../screens/EditGroup';

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
                options={{
                    header: () => null,
                }}
            />
             <stack.Screen
                name="NewPassword"
                component={NewPassword}
                options={{
                    header: () => null,
                }}
            />
            <stack.Screen
                name="BroadcastList"
                component={BroadcastList}
            />
            <stack.Screen
                name="BroadcastCreate"
                component={BroadcastCreate}
            />
            <stack.Screen
                name="Contacts"
                component={Contacts}
                options={{
                    header: () => null,
                }}
            />
            <stack.Screen
                name="ArchivedGroups"
                component={ArchivedGroups}
                options={{
                    header: () => null,
                }}
            />
            <stack.Screen
                name="NewList"
                component={NewList}
                options={{
                    header: () => null,
                }}
            />
            <stack.Screen
                name="CreateReceivers"
                component={CreateReceivers}
                options={{
                    header: () => null,
                }}
            />
            <stack.Screen
                name="Chat"
                component={Chat}
                options={{
                    header: () => null,
                }}
            />
            <stack.Screen
                name="NewGroup"
                component={NewGroup}
                options={{
                    header: () => null,
                }}
            />
            <stack.Screen
                name="CreateNewGroup"
                component={CreateNewGroup}
                options={{
                    header: () => null,
                }}
            />
            <stack.Screen
                name="GroupConversation"
                component={GroupConversation}
                options={{
                    header: () => null,
                }}
            />
            <stack.Screen
                name="GroupInfo"
                component={GroupInfo}
                options={{
                    header: () => null,
                }}
            />
            <stack.Screen
                name="EditGroup"
                component={EditGroup}
                options={{
                    header: () => null,
                }}
            />


        </stack.Navigator>
    );
};

export default MainNav;