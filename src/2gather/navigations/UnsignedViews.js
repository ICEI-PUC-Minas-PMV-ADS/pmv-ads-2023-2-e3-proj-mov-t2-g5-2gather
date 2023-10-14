import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import CreateUser from '../screens/CreateUser';

const stack = createNativeStackNavigator();

const UnsignedViews = () => {
    return (
        <stack.Navigator initialRouteName="Home">
            <stack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => null,
                }}
            />
            <stack.Screen
                name="Login"
                component={Login}
            />
            {/* <stack.Screen
                name="CreateUser"
                component={CreateUser}
            /> */}

        </stack.Navigator>
    );
};

export default UnsignedViews;