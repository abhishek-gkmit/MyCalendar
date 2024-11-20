import AsyncStorage from '@react-native-async-storage/async-storage';

import { storageKeys } from '@constants';

const { accessToken, refreshToken } = storageKeys;

// this object will be used to set the new `access_token` in `localStorage` and axios interceptor
const TOKENS: TokenValues = { access_token: null, refresh_token: null };

async function getToken(type: TokenType) {
  const token = await AsyncStorage.getItem(type);

  if (!token) {
    return null;
  }

  TOKENS[type] = token;

  return token;
}

async function saveToken(type: TokenType, value: string) {
  try {
    await AsyncStorage.setItem(type, value);
    return true;
  } catch (err) {
    console.error(err);
  }

  return false;
}

async function getAccessToken() {
  return await getToken(accessToken);
}

async function getRefreshToken() {
  return await getToken(refreshToken);
}

async function saveAccessToken(value: string) {
  return await saveToken(accessToken, value);
}

async function saveRefreshToken(value: string) {
  return await saveToken(refreshToken, value);
}

export {
  getAccessToken,
  getRefreshToken,
  saveAccessToken,
  saveRefreshToken,
  TOKENS,
};
