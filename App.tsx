import {SafeAreaView, StatusBar} from 'react-native';
import {useContext, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MyDrawerNavigator from '@navigation/Drawer';
import {
  ThemeContext,
  ThemeContextProvider,
} from '@config/contexts/ThemeContext';

import getThemedStyles from '@theme/globalStyles';

function App() {
  return (
    <ThemeContextProvider>
      <AppWrapper />
    </ThemeContextProvider>
  );
}

// to use theme inside `App` itself
function AppWrapper() {
  const {colors} = useContext(ThemeContext);

  const styles = useMemo(() => getThemedStyles(colors), [colors]);

  return (
    <>
      <StatusBar animated backgroundColor={colors.secondary} />
      <SafeAreaView style={styles.screen}>
        <NavigationContainer>
          <MyDrawerNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

export default App;
