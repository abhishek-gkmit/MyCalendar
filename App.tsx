import { useContext, useMemo } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import Login from '@screens/login';
import MyDrawerNavigator from '@navigation/Drawer';
import {
  ThemeContext,
  ThemeContextProvider,
} from '@config/contexts/ThemeContext';
import { UserContext, UserContextProvider } from '@config/contexts/UserContext';

import getThemedStyles from '@theme/globalStyles';

function App() {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <AppWrapper />
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

// to use theme inside `App` itself
function AppWrapper() {
  const { colors } = useContext(ThemeContext);
  const { accessToken } = useContext(UserContext);

  const styles = useMemo(() => getThemedStyles(colors), [colors]);

  return (
    <>
      <StatusBar animated backgroundColor={colors.secondary} />
      <SafeAreaView style={styles.screen}>
        {accessToken ? (
          <NavigationContainer>
            <MyDrawerNavigator />
          </NavigationContainer>
        ) : (
          <>
            <Login />
          </>
        )}
        <Toast />
      </SafeAreaView>
    </>
  );
}

export default App;
