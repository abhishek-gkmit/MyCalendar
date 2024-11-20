import { useContext, useMemo } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { ThemeContext } from '@config/contexts/ThemeContext';

import getThemedStyles from '@theme/globalStyles';
import getStyles from './styles';

function Loader({ size }: CustomLoaderProps) {
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
        size={size || 'large'}
      />
    </View>
  );
}

export default Loader;
