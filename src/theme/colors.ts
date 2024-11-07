const commonColors = {
  warning: '#fff300',
  error: '#ff0000',
};

export const colors = {
  dark: {
    primary: '#434560',
    secondary: '#18222c',
    background: '#0c141a',
    foreground: '#bec7ce',

    accentBlue: '#a1c7ff',
    lightGreen: '#88d7ba',
    darkGreen: '#109c8f',
    ...commonColors,
  },

  light: {
    primary: '#dfe0ff',
    secondary: '#d9e8fc',
    background: '#f4faff',
    foreground: '#3e484e',

    accentBlue: '#0055d8',
    lightGreen: '#95e9ca',
    darkGreen: '#24ae9f',
    ...commonColors,
  },
};
