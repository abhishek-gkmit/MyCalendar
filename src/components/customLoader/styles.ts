import { StyleSheet } from 'react-native';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    loaderContainer: {
      backgroundColor: colors.black4,
    },
  });
}

export default getThemedStyles;
