import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, Linking, Image, Text } from 'react-native';

import ButtonWithIcon from '@components/buttonWithIcon';
import Loader from '@components/customLoader';

import { ThemeContext } from '@config/contexts/ThemeContext';
import { UserContext } from '@config/contexts/UserContext';

import images from '@constants/images';
import { fontSize } from '@constants/fonts';

import { apiEndpoints } from '@network/apiConstants';
import { getTokensFromApi } from '@network/apiMethods';

import { setRequestInterceptor } from '@utility/helpers';
import { moderateScale } from '@utility/scalingHelpers';

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
      const code = url.slice(url.indexOf('=') + 1);

      const tokens = await getTokensFromApi(code);

      setRequestInterceptor(tokens.accessToken);

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
      <Text style={localStyles.heading}>My Calendar</Text>
      <Image source={images.calendarLogo} style={localStyles.img} />
      <ButtonWithIcon
        text="Sign-In with Google"
        icon={{
          name: 'google',
          color: colors.secondary,
          size: moderateScale(fontSize.twentyFour),
        }}
        textStyle={localStyles.btnTextStyle}
        iconPosition="start"
        style={localStyles.btnStyle}
        activeOpacity={0.9}
        onPress={redirectToLogin}
      />
    </View>
  );
}

export default Login;
