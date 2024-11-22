import { useContext, useMemo } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { ThemeContext } from '@config/contexts/ThemeContext';
import useStyles from '@hooks/useStyles';

import getThemedStyles from '@theme/globalStyles';
import getStyles from './styles';

function Loader({ size, backgroundColor }: CustomLoaderProps) {
  const { colors } = useContext(ThemeContext);

  const globalStyles = useStyles(getThemedStyles);
  const localStyles = useStyles(getStyles);

  const loaderContainerStyles = useMemo(() => {
    return StyleSheet.compose(
      globalStyles.flexContainer,
      backgroundColor
        ? { ...localStyles.loaderContainer, backgroundColor }
        : localStyles.loaderContainer,
    );
  }, [globalStyles, localStyles]);

  return (
    <View style={loaderContainerStyles}>
      <ActivityIndicator
        animating={true}
        color={colors.secondary}
        size={size || 'large'}
      />
    </View>
  );
}

export default Loader;
