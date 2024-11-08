import { StyleSheet } from 'react-native';

import { fontSize, fontWeight } from '@constants';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    drawerContentContainer: {
      backgroundColor: colors.drawerContentColor,
    },

    drawerItemContainer: {
      backgroundColor: colors.secondary,
      padding: 10,
      marginRight: 10,
      borderTopRightRadius: 200,
      borderBottomRightRadius: 200,
    },

    drawerItemContainerFocused: {
      backgroundColor: colors.primary,
    },

    drawerItemLabel: {
      color: colors.foreground,
      fontSize: fontSize.sixteen,
      fontWeight: fontWeight.regular,
      paddingLeft: 10,
    },

    logoutBtn: {
      backgroundColor: colors.lightRed,
      marginTop: 10,
    },

    btnText: {
      color: colors.foreground,
    },
  });
}

export default getThemedStyles;
