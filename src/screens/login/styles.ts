import { StyleSheet } from 'react-native';

import { fontSize } from '@constants';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    loginScreen: {
      padding: 20,
      alignItems: 'center',
    },

    btnStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
      backgroundColor: colors.accentBlue,
      width: '80%',
    },

    btnTextStyle: { color: colors.secondary, fontSize: fontSize.eighteen },

    img: {
      width: 200,
      height: 200,
    },
  });
}

export default getThemedStyles;
