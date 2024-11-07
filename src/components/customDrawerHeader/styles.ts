import { StyleSheet } from 'react-native';

import { fontSize, fontWeight } from '@constants';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    drawerContainer: {
      backgroundColor: colors.secondary,
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    openBtn: {
      margin: 10,
    },

    title: {
      color: colors.foreground,
      fontSize: fontSize.eighteen,
      fontWeight: fontWeight.regular,
    },
  });
}

export default getThemedStyles;
