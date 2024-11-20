import { StyleSheet } from 'react-native';

import { fontFamily, fontSize } from '@constants/fonts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    drawerContentContainer: {
      backgroundColor: colors.drawerContentColor,
    },

    drawerItemContainer: {
      backgroundColor: colors.secondary,
      marginRight: horizontalScale(10),
      borderTopRightRadius: moderateScale(200),
      borderBottomRightRadius: moderateScale(200),
      paddingLeft: horizontalScale(20),
      gap: moderateScale(10),
      alignItems: 'center',
    },

    drawerItemContainerFocused: {
      backgroundColor: colors.primary,
    },

    drawerItemLabel: {
      color: colors.foreground,
      fontSize: moderateScale(fontSize.sixteen),
    },

    logoutBtn: {
      backgroundColor: colors.lightRed,
      marginTop: verticalScale(10),
      alignItems: 'center',
      paddingLeft: horizontalScale(20),
      gap: moderateScale(10),
    },

    btnText: {
      color: colors.foreground,
    },

    appName: {
      color: colors.foreground,
      fontSize: moderateScale(fontSize.twentyFour),
      fontFamily: fontFamily.NunitoSansMedium,
      paddingLeft: horizontalScale(20),
      marginBottom: verticalScale(20),
      paddingBottom: verticalScale(10),
      borderColor: colors.black2,
      borderBottomWidth: 1,
    },
  });
}

export default getThemedStyles;
