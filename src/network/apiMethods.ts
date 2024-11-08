import { apiConstants } from './apiConstants';
import { _get, _post } from './axiosMethods';

const { LOGIN_API_BASE_URL, CLIENT_ID, CLIENT_SECRET } = apiConstants;

async function getTokens(code: string) {
  const data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    grant_type: 'authorization_code',
    redirect_uri: 'http://localhost:3000',
  };

  const config = {
    baseURL: LOGIN_API_BASE_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const res = await _post('', '', true, data, config);

  return { accessToken: res?.access_token, refreshToken: res?.refresh_token };
}

export { getTokens };
