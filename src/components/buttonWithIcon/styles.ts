import { moderateScale } from '@utility/scalingHelpers';
import { StyleSheet } from 'react-native';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    button: {
      flexDirection: 'row',
      backgroundColor: colors.primary,
      borderRadius: moderateScale(10),
      padding: moderateScale(10),
    },

    buttonText: {
      color: colors.foreground,
    },
  });
}

export default getThemedStyles;
