import { storageKeys } from '@constants';

declare global {
  type TokenType = (typeof storageKeys)[keyof typeof storageKeys];
}
