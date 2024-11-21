export function formatEvents(rawEvents: any) {
  const formattedEvents: CustomAgendaSchedule = {};
  rawEvents?.items?.forEach(
    ({ summary, start, end, hangoutLink, id }: CalendarEvent) => {
      const date = start.dateTime.split('T')[0];

      if (formattedEvents[date]) {
        formattedEvents[date].push({
          name: summary,
          height: 50,
          day: '',
          hangoutLink,
        });
      } else {
        formattedEvents[date] = [
          { name: summary, height: 50, day: '', hangoutLink, start, end, id },
        ];
      }
    },
  );

  return formattedEvents;
}
