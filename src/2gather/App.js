import { NavigationContainer } from '@react-navigation/native';

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