import { useContext, useMemo } from 'react';
import { View, ActivityIndicator, Platform, StyleSheet } from 'react-native';

import { ThemeContext } from '@config/contexts/ThemeContext';

import getThemedStyles from '@theme/globalStyles';
import getStyles from './styles';

function Loader() {
  const { colors } = useContext(ThemeContext);

  const globalStyles = useMemo(() => getThemedStyles(colors), [colors]);
  const localStyles = useMemo(() => getStyles(colors), [colors]);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.flexContainer,
        localStyles.loaderContainer,
      )}>
      <ActivityIndicator
        animating={true}
        color={colors.primary}
        size={Platform.OS === 'ios' ? 'small' : 60}
      />
    </View>
  );
}

export default Loader;
