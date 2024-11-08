import React, { createContext, useCallback, useEffect, useState } from 'react';
import {
  getAccessToken,
  getRefreshToken,
  saveAccessToken,
  saveRefreshToken,
} from '@utility/asyncStorage';

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

  const setAccessTokenWrapper = useCallback(
    async (accessToken: string) => {
      const success = await saveAccessToken(accessToken);

      if (success) {
        setAccessToken(accessToken);
      }
    },
    [setAccessToken],
  );

  const setRefreshTokenWrapper = useCallback(
    async (refreshToken: string) => {
      const success = await saveRefreshToken(refreshToken);

      if (success) {
        setRefreshToken(refreshToken);
      }
    },
    [setRefreshToken],
  );

  const clearTokens = useCallback(async () => {
    setAccessTokenWrapper('');
    setRefreshTokenWrapper('');
  }, [setAccessTokenWrapper, setRefreshTokenWrapper]);

  useEffect(() => {
    (async () => {
      const accessToken = await getAccessToken();
      const refreshToken = await getRefreshToken();

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{
        accessToken,
        refreshToken,
        setAccessToken: setAccessTokenWrapper,
        setRefreshToken: setRefreshTokenWrapper,
        clearTokens,
      }}>
      {children}
    </UserContext.Provider>
  );
}
