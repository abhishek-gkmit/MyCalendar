import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, Linking, Image } from 'react-native';

import ButtonWithIcon from '@components/buttonWithIcon';
import Loader from '@components/customLoader';
import { ThemeContext } from '@config/contexts/ThemeContext';
import { UserContext } from '@config/contexts/UserContext';

import { axiosInstance } from '@network/axiosInstance';
import { apiEndpoints } from '@network/apiConstants';
import { getTokens } from '@network/apiMethods';

import { fontSize, images } from '@constants';

import getThemedStyles from '@theme/globalStyles';
import getThemedStylesLocal from './styles';

function Login() {
  const [loading, setLoading] = useState(false);

  const { setAccessToken, setRefreshToken } = useContext(UserContext);
  const { colors } = useContext(ThemeContext);

  const globalStyles = useMemo(() => getThemedStyles(colors), [colors]);
  const localStyles = useMemo(() => getThemedStylesLocal(colors), [colors]);

  const redirectToLogin = useCallback(async () => {
    setLoading(true);
    Linking.openURL(apiEndpoints.login);
  }, []);

  const setTokensAndInterceptor = useCallback(
    async (url: string) => {
      const code = url.slice(url.indexOf('?') + 1);

      const tokens = await getTokens(code);

      // setting interceptors so we don't have to pass the `Authorization` token everytime
      axiosInstance.interceptors.request.clear();
      axiosInstance.interceptors.request.use(function onFulfilled(config) {
        config.headers.Authorization = `Bearer ${tokens.accessToken}`;
        return config;
      });

      setAccessToken(tokens.accessToken);
      setRefreshToken(tokens.refreshToken);
    },
    [setAccessToken, setRefreshToken],
  );

  useEffect(() => {
    Linking.addEventListener('url', ({ url }) => setTokensAndInterceptor(url));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <View
      style={StyleSheet.compose(globalStyles.screen, localStyles.loginScreen)}>
      <Image source={images.calendarLogo} style={localStyles.img} />
      <ButtonWithIcon
        text="SignIn with"
        icon={{
          name: 'google',
          color: colors.secondary,
          size: fontSize.twentyFour,
        }}
        textStyle={localStyles.btnTextStyle}
        style={localStyles.btnStyle}
        activeOpacity={0.9}
        onPress={redirectToLogin}
      />
    </View>
  );
}

export default Login;
