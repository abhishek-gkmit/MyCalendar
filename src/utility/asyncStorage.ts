import AsyncStorage from '@react-native-async-storage/async-storage';

import { storageKeys } from '@constants';

const { accessToken, refreshToken } = storageKeys;

async function getToken(type: TokenType) {
  const token = await AsyncStorage.getItem(type);

  if (!token) {
    return null;
  }

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

export { getAccessToken, getRefreshToken, saveAccessToken, saveRefreshToken };
