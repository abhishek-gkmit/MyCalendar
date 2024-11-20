import React, { createContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { colors } from '@theme/colors';

const ThemeContext = createContext<ThemeContextValues>({
  theme: 'light',
  colors: colors.light,
});

function ThemeContextProvider({ children }: React.PropsWithChildren) {
  const theme = useColorScheme();

  const colorsByTheme = useMemo(() => {
    return colors[theme || 'light'];
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, colors: colorsByTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
