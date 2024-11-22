import { StyleSheet } from 'react-native';

import { fontFamily, fontSize } from '@constants/fonts';
import {
  isLandscape,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    loginScreen: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: moderateScale(20),
    },

    btnStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: moderateScale(10),
      backgroundColor: colors.loginBtnBackground,
      width: '100%',
      marginTop: verticalScale(5),
    },

    btnContainer: {
      width: isLandscape() ? '40%' : '80%',
    },

    btnTextStyle: { color: colors.loginBtnText, fontSize: fontSize.eighteen },

    img: {
      width: 150,
      height: 150,
    },

    heading: {
      color: colors.loginHeading,
      fontSize: moderateScale(fontSize.twentyFour),
      fontFamily: fontFamily.MontserratMedium,
    },
  });
}

export default getThemedStyles;
