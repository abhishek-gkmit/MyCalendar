import React, { createContext, useCallback, useEffect, useState } from 'react';
import {
  getAccessToken,
  getRefreshToken,
  saveAccessToken,
  saveRefreshToken,
} from '@utility/asyncStorage';
import { setRequestInterceptor } from '@utility/helpers';

export const UserContext = createContext<UserContextValues>({
  accessToken: '',
  refreshToken: '',
  setAccessToken: () => { },
  setRefreshToken: () => { },
  clearTokens: () => { },
});

export function UserContextProvider({ children }: React.PropsWithChildren) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  const setAndSaveAccessToken = useCallback(
    async (accessToken: string) => {
      const success = await saveAccessToken(accessToken);

      if (success) {
        setAccessToken(accessToken);
      }
    },
    [setAccessToken],
  );

  const setAndSaveRefreshToken = useCallback(
    async (refreshToken: string) => {
      const success = await saveRefreshToken(refreshToken);

      if (success) {
        setRefreshToken(refreshToken);
      }
    },
    [setRefreshToken],
  );

  const clearTokens = useCallback(async () => {
    setAndSaveAccessToken('');
    setAndSaveRefreshToken('');
  }, [setAndSaveAccessToken, setAndSaveRefreshToken]);

  useEffect(() => {
    (async () => {
      const accessToken = await getAccessToken();
      const refreshToken = await getRefreshToken();

      if (accessToken) {
        setRequestInterceptor(accessToken);
      }

      setAccessToken(accessToken || 'no_token');
      setRefreshToken(refreshToken);
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{
        accessToken,
        refreshToken,
        setAccessToken: setAndSaveAccessToken,
        setRefreshToken: setAndSaveRefreshToken,
        clearTokens,
      }}>
      {children}
    </UserContext.Provider>
  );
}
