import {
  CLIENT_ID,
  CLIENT_SECRET,
  API_KEY,
  API_BASE_URL,
  API_SCOPES,
  LOGIN_API_BASE_URL,
} from '@env';

const redirectTo = 'calendar://login';

export const apiConstants = {
  BASE_URL: API_BASE_URL,
  LOGIN_API_BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  API_KEY,
};

export const apiEndpoints = {
  login: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=http://localhost:3000&response_type=code&scope=${API_SCOPES}&access_type=offline&prompt=consent`,
};
