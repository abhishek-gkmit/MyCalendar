import { StyleSheet } from 'react-native';

import { fontSize } from '@constants/fonts';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    loginScreen: {
      alignItems: 'center',
    },

    btnStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      backgroundColor: colors.accentBlue,
      width: '80%',
    },

    btnTextStyle: { color: colors.secondary, fontSize: fontSize.eighteen },

    img: {
      width: 200,
      height: 200,
    },

    heading: {
      color: colors.foreground,
      fontSize: fontSize.twentyFour,
      marginTop: 35,
    },
  });
}

export default getThemedStyles;
