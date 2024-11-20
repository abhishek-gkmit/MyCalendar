import { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import Login from '@screens/login';

import MyDrawerNavigator from '@navigation/Drawer';
import { ThemeContext } from '@config/contexts/ThemeContext';
import { UserContext } from '@config/contexts/UserContext';
import Loader from '@components/customLoader';
import useStyles from '@hooks/useStyles';

import getThemedStyles from '@theme/globalStyles';

function MainNavigator() {
  const [loading, setLoading] = useState(true);

  const { colors } = useContext(ThemeContext);
  const { accessToken } = useContext(UserContext);

  const styles = useStyles(getThemedStyles);

  useEffect(() => {
    setLoading(false);
  }, [accessToken]);

  useEffect(() => {
    setLoading(true);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <StatusBar animated backgroundColor={colors.secondary} />
      <SafeAreaView style={styles.screen}>
        {accessToken && accessToken !== 'no_token' ? (
          <NavigationContainer>
            <MyDrawerNavigator />
          </NavigationContainer>
        ) : (
          <Login />
        )}
        <Toast />
      </SafeAreaView>
    </>
  );
}

export default MainNavigator;
