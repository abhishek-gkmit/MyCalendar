const commonColors = {
  warning: '#fff300',
  error: '#ff0000',

  lightRed: '#ff3c36',
  gray: 'gray',
  lightGray: '#f2f2f2',
  black1: 'rgba(0, 0, 0, 0.1)',
  black2: 'rgba(0, 0, 0, 0.2)',
  black3: 'rgba(0, 0, 0, 0.3)',
  black4: 'rgba(0, 0, 0, 0.4)',
  black5: 'rgba(0, 0, 0, 0.5)',
  black6: 'rgba(0, 0, 0, 0.6)',
  black7: 'rgba(0, 0, 0, 0.7)',
  black8: 'rgba(0, 0, 0, 0.8)',
};

export const colors = {
  dark: {
    primary: '#434560',
    secondary: '#18222c',
    background: '#0c141a',
    foreground: '#bec7ce',
    drawerContentColor: '#18222c',

    accentBlue: '#a1c7ff',
    lightGreen: '#88d7ba',
    darkGreen: '#109c8f',
    ...commonColors,
  },

  light: {
    primary: '#dfe0ff',
    secondary: '#41a1ff',
    background: '#f4faff',
    foreground: '#3e484e',
    drawerContentColor: '#f2f2f2',

    accentBlue: '#0055d8',
    lightGreen: '#95e9ca',
    darkGreen: '#24ae9f',
    ...commonColors,
  },
};
