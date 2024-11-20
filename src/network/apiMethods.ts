import { formatEvents } from '@utility/dataFormatters';
import { apiConstants, apiEndpoints } from './apiConstants';
import { _get, _post, _postForLogin } from './axiosMethods';

const {
  LOGIN_API_BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  GRANT_TYPE_REFRESH_TOKEN,
  GRANT_TYPE_AUTHORIZATION_CODE,
} = apiConstants;

const { events } = apiEndpoints;

// gets the `accessToken` and `refreshToken` from different API endpoint
// called after user login successfull
async function getTokensFromApi(code: string) {
  const data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    grant_type: GRANT_TYPE_AUTHORIZATION_CODE,
    redirect_uri: REDIRECT_URI,
  };

  const config = {
    baseURL: LOGIN_API_BASE_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const res = await _postForLogin(data, config);

  return { accessToken: res?.access_token, refreshToken: res?.refresh_token };
}

// get's the `accessToken` from the api through `refreshToken`
async function getAccessTokenFromApi(refreshToken: string | null) {
  if (!refreshToken) {
    return null;
  }

  const data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    refresh_token: refreshToken,
    grant_type: GRANT_TYPE_REFRESH_TOKEN,
  };

  const config = {
    baseURL: LOGIN_API_BASE_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const res = await _postForLogin(data, config);

  return res?.access_token as string;
}

async function getEvents(calendarId: string = 'primary', pageToken?: string) {
  const url = events(calendarId);
  const res = await _get(url, {
    pageToken,
    singleEvents: true,
    orderBy: 'startTime',
  });

  return formatEvents(res);
}

export { getTokensFromApi, getEvents, getAccessTokenFromApi };
