const commonColors = {
  warning: '#fff300',
  error: '#ff0000',

  gunmetal: '#18222c',
  mauve: '#c9a0ff',
  tropicalIndigo: '#8b8eff',
  lightRed: '#dc3631',
  gray: 'gray',
  lightGray: '#f2f2f2',
  black: '#000000',
  lightBlack: '#090909',
  black0: 'rgba(0, 0, 0, 0.0)',
  black1: 'rgba(0, 0, 0, 0.1)',
  black2: 'rgba(0, 0, 0, 0.2)',
  black3: 'rgba(0, 0, 0, 0.3)',
  black4: 'rgba(0, 0, 0, 0.4)',
  black5: 'rgba(0, 0, 0, 0.5)',
  black6: 'rgba(0, 0, 0, 0.6)',
  black7: 'rgba(0, 0, 0, 0.7)',
  black8: 'rgba(0, 0, 0, 0.8)',
  black9: 'rgba(0, 0, 0, 0.9)',
  white: '#ffffff',
  white0: 'rgba(255, 255, 255, 0.0)',
  white1: 'rgba(255, 255, 255, 0.1)',
  white2: 'rgba(255, 255, 255, 0.2)',
  white3: 'rgba(255, 255, 255, 0.3)',
  white4: 'rgba(255, 255, 255, 0.4)',
  white5: 'rgba(255, 255, 255, 0.5)',
  white6: 'rgba(255, 255, 255, 0.6)',
  white7: 'rgba(255, 255, 255, 0.7)',
  white8: 'rgba(255, 255, 255, 0.8)',
  white9: 'rgba(255, 255, 255, 0.9)',
};

export const colors = {
  dark: {
    primary: '#434560',
    secondary: '#18222c',
    background: '#0c141a',
    foreground: '#bec7ce',
    backgroundLight: '#1c2432',
    drawerContentColor: '#18222c',

    accentBlue: '#a1c7ff',
    lightGreen: '#88d7ba',
    darkGreen: '#109c8f',
    agendaKnobColor: commonColors.white5,
    ...commonColors,
  },

  light: {
    primary: '#dfe0ff',
    secondary: '#41a1ff',
    background: '#f4faff',
    foreground: '#3e484e',
    backgroundLight: '#bbc0c5',
    drawerContentColor: '#f2f2f2',

    accentBlue: '#0055d8',
    lightGreen: '#95e9ca',
    darkGreen: '#24ae9f',
    agendaKnobColor: commonColors.black5,
    ...commonColors,
  },
};
