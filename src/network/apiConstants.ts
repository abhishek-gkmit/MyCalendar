import {
  CLIENT_ID,
  CLIENT_SECRET,
  API_KEY,
  API_BASE_URL,
  API_SCOPES,
  LOGIN_API_BASE_URL,
  REDIRECT_URI,
} from '@env';

export const apiConstants = {
  BASE_URL: API_BASE_URL,
  LOGIN_API_BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  API_KEY,
  REDIRECT_URI,
  GRANT_TYPE_REFRESH_TOKEN: 'refresh_token',
  GRANT_TYPE_AUTHORIZATION_CODE: 'authorization_code',
};

export const apiEndpoints = {
  login: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${API_SCOPES}&access_type=offline&prompt=consent`,
  events: (calendarId: string) => `calendars/${calendarId}/events`,
};
