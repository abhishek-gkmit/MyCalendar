import { Theme } from 'react-native-calendars/src/types';

function getAgendaTheme(colors: Colors): Theme {
  return {
    agendaKnobColor: colors.agendaKnobColor,
    dotColor: colors.accentBlue,
    selectedDotColor: colors.accentBlue,
    todayTextColor: colors.foreground,
    textSectionTitleColor: colors.accentBlue,
    monthTextColor: colors.foreground,
    dayTextColor: colors.foreground,
    selectedDayTextColor: colors.primary,
    selectedDayBackgroundColor: colors.accentBlue,
    arrowColor: colors.accentBlue,
    calendarBackground: colors.secondary,
    reservationsBackgroundColor: colors.background,
    textInactiveColor: colors.lightGray,
  };
}

export default getAgendaTheme;
