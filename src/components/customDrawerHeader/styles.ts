import { StyleSheet } from 'react-native';

import { fontSize } from '@constants/fonts';
import { moderateScale } from '@utility/scalingHelpers';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    drawerContainer: {
      backgroundColor: colors.secondary,
      flexDirection: 'row',
      gap: moderateScale(10),
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    openBtn: {
      margin: moderateScale(10),
    },

    title: {
      color: colors.foreground,
      fontSize: moderateScale(fontSize.eighteen),
    },
  });
}

export default getThemedStyles;
