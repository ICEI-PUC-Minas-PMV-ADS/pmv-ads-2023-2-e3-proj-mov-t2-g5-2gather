import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Login from './screens/Login';
import TestAfterLogin from './screens/TestAfterLogin';
import CreateUser from './screens/CreateUser';
import EditUser from './screens/EditUser';
import InactivateUser from './screens/InactivateUser';
import UserManagement from './screens/UserManagement';
import Profile from './screens/Profile';
import Route from './navigations/Route';
import UserProvider from './contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;