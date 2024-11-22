import { StyleSheet } from 'react-native';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    loaderContainer: {
      backgroundColor: colors.loaderBackground,
    },
  });
}

export default getThemedStyles;
