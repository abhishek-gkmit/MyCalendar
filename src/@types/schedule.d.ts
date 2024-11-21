import { AgendaEntry } from 'react-native-calendars';

declare global {
  interface AgendaItem extends AgendaEntry, Partial<CalendarEvent> { }

  interface CustomAgendaSchedule extends AgendaSchedule {
    [date: string]: AgendaItem[];
  }

  interface AgendaComponentProps {
    item?: AgendaItem;
    isFirst?: boolean;
  }

  interface AgendaEventDateProps {
    day?: any;
  }
}
