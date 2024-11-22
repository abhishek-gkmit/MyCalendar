import { StyleSheet } from 'react-native';

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';

function scheduleStyles(colors: Colors) {
  return StyleSheet.create({
    agendaEventsList: {
      gap: moderateScale(20),
      paddingVertical: verticalScale(20),
      paddingHorizontal: horizontalScale(20),
      backgroundColor: colors.background,
    },

    agendaEventBtn: {
      flex: 1,
      backgroundColor: colors.black0,
      borderColor: colors.accentBlue,
      borderWidth: moderateScale(1),
      padding: moderateScale(10),
      borderRadius: moderateScale(10),
    },

    agendaEventSummary: {
      color: colors.accentBlue,
    },

    noEventsText: {
      color: colors.foreground,
      textAlign: 'center',
    },
  });
}

export default scheduleStyles;
