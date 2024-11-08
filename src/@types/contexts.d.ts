interface ThemeContextValues {
  theme: ColorSchemeName;
  colors: Colors;
}

interface UserContextValues {
  accessToken: string | null;
  refreshToken: string | null;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  clearTokens: () => void;
}
