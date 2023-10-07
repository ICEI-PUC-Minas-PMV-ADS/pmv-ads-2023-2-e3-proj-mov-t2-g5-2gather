import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Login from './screens/Login';
import TestAfterLogin from './screens/TestAfterLogin';
import CreateUser from './screens/CreateUser';
import EditUser from './screens/EditUser';
import InactivateUser from './screens/InactivateUser';
import UserManagement from './screens/UserManagement';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TestAfterLogin" component={TestAfterLogin} />
      <Stack.Screen name="CreateUser" component={CreateUser} />
      <Stack.Screen name="EditUser" component={EditUser} />
      <Stack.Screen name="InactivateUser" component={InactivateUser} />
      <Stack.Screen name="UserManagement" component={UserManagement} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

UserManagement