import { Platform } from 'react-native';

const storageKeys = {
  accessToken: 'access_token',
  refreshToken: 'refresh_token',
} as const;

const dateFormats = {
  yearMonth: 'yyyyMM',
  yearMonthDay: 'yyyyMMdd',
} as const;

const isIOS = Platform.OS === 'ios';

export { storageKeys, isIOS, dateFormats };
