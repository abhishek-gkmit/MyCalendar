interface Attendee {
  id: string;
  email: string;
  displayName: string;
  organizer: boolean;
  self: boolean;
  resource: boolean;
  optional: boolean;
  responseStatus: string;
  comment: string;
  additionalGuests: number;
}

interface EventOrganizer {
  id: string;
  email: string;
  displayName: string;
  self: boolean;
}

interface CalendarEvent {
  kind: 'calendar#event';
  id: string;
  status: string;
  htmlLink: string;
  summary: string;
  description: string;
  location: string;
  organizer: EventOrganizer;
  start: {
    date: string;
    dateTime: string;
    timeZone: string;
  };
  end: {
    date: string;
    dateTime: string;
    timeZone: string;
  };
  attendees: Attendee[];
  attendeesOmitted: boolean;
  hangoutLink: string;
}

interface Reminder {
  method: string;
  minutes: number;
}

interface CalendarEventList {
  kind: 'calendar#events';
  etag: string;
  summary: string;
  description: string;
  updated: string;
  timeZone: string;
  accessRole: string;
  defaultReminders: Reminder[];
  nextPageToken: string;
  nextSyncToken: string;
  items: CalendarEvent[];
}

interface TokenValues {
  access_token: string | null;
  refresh_token: string | null;
}
