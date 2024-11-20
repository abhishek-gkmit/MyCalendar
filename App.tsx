import {useEffect} from 'react';
import {LogBox} from 'react-native';
import {ThemeContextProvider} from '@config/contexts/ThemeContext';
import {UserContextProvider} from '@config/contexts/UserContext';
import MainNavigator from '@config/MainNavigator';

function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <MainNavigator />
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;
