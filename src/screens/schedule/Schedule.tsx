import { useContext, useEffect, useState, useCallback } from 'react';
import { Animated, View, Text } from 'react-native';
import {
  CalendarProvider,
  CalendarUtils,
  DateData,
  ExpandableCalendar,
} from 'react-native-calendars';
import XDate from 'xdate';

import Loader from '@components/customLoader';
import { ThemeContext } from '@config/contexts/ThemeContext';
import useStyles from '@hooks/useStyles';
import { getEventsForMonth } from '@network/apiMethods';
import { dateFormats } from '@constants';

import AgendaEvent from './AgendaEvent';
import getThemedStyles from '@theme/globalStyles';
import getStyles from './styles';
import getAgendaTheme from './agendaTheme';
import { colors } from '@theme/colors';

const { yearMonth, yearMonthDay } = dateFormats;

function NoEvents() {
  const localStyles = useStyles(getStyles);

  return <Text style={localStyles.noEventsText}>No Events for the day</Text>;
}

function Schedule() {
  const [loading, setLoading] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState<CustomAgendaSchedule>();
  const [currentDayEvents, setCurrentDayEvents] = useState<AgendaItem[]>();
  const [eventsLoading, setEventsLoading] = useState(false);

  const { theme } = useContext(ThemeContext);

  const globalStyles = useStyles(getThemedStyles);
  const localStyles = useStyles(getStyles);
  const agendaTheme = useStyles(getAgendaTheme);

  const loadEventsForMonth = useCallback(
    async (dateData?: DateData) => {
      const date = dateData?.dateString
        ? new XDate(dateData.dateString)
        : new XDate();

      const monthEvents = await getEventsForMonth('primary', date);

      setCalendarEvents(monthEvents);
      setCurrentDayEvents(monthEvents[date.toString(yearMonth + '-01')]);
    },
    [setCalendarEvents, setCurrentDayEvents],
  );

  const setEventsForCurrentDay = useCallback(
    (dateData?: DateData) => {
      const date = new XDate(dateData?.dateString as string).toString(
        yearMonthDay,
      );

      setCurrentDayEvents(calendarEvents && calendarEvents[date]);
    },
    [setCurrentDayEvents, calendarEvents],
  );

  useEffect(() => {
    setEventsLoading(true);
    loadEventsForMonth().then(() => setEventsLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={globalStyles.screen}>
      <CalendarProvider date={CalendarUtils.getCalendarDateString(new Date())}>
        <ExpandableCalendar
          key={theme}
          enableSwipeMonths={true}
          theme={agendaTheme}
          onMonthChange={dateData => loadEventsForMonth(dateData)}
          onDayPress={dateData => setEventsForCurrentDay(dateData)}
          maxToRenderPerBatch={2}
        />

        <Animated.FlatList
          data={currentDayEvents}
          keyExtractor={(item, index) => item.id! + index}
          renderItem={({ item }) => {
            return <AgendaEvent item={item} />;
          }}
          contentContainerStyle={localStyles.agendaEventsList}
          ListEmptyComponent={
            eventsLoading ? (
              <Loader size="small" backgroundColor={colors.light.white0} />
            ) : (
              <NoEvents />
            )
          }
        />
      </CalendarProvider>
    </View>
  );
}

export default Schedule;
