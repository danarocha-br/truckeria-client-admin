import type * as Stitches from '@stitches/react';

import { colors, font, spacing, radii, shadow } from './src/styles/tokens';
import { dark, light } from './src/styles/themes';
import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
} = createStitches({
  theme: {
    colors: {
      transparent: 'transparent',
      brand: colors.brand,
      white: colors.white,
      green500: colors.green[500],
      green300: colors.green[300],
      green100: colors.green[100],
      blue500: colors.blue[500],
      blue300: colors.blue[300],
      blue100: colors.blue[100],
      yellow500: colors.yellow[500],
      yellow300: colors.yellow[300],
      yellow100: colors.yellow[100],
      red500: colors.red[500],
      red300: colors.red[300],
      red100: colors.red[100],
      neutral900: colors.neutral[900],
      neutral800: colors.neutral[800],
      neutral700: colors.neutral[700],
      neutral600: colors.neutral[600],
      neutral500: colors.neutral[500],
      neutral400: colors.neutral[400],
      neutral300: colors.neutral[300],
      neutral200: colors.neutral[200],
      neutral100: colors.neutral[100],

      ...dark,

      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)',
    },
    fonts: {
      sans: font.family.sans,
    },
    fontWeights: {
      ...font.weight,
    },
    space: {
      ...spacing,
    },
    sizes: {
      ...spacing,
    },

    fontSizes: {
      ...font.size,
    },
    radii: {
      ...radii,
    },
    zIndices: {
      1: '1',
      2: '2',
      3: '3',
      100: '100',
      max: '999',
    },
    borderWidths: {
      1: '1px',
      2: '2px',
      4: '4px',
    },
    shadows: {
      10: '0px 4px 10px rgba(0, 0, 0, 0.05)',
      15: '0px 1px 15px rgba(0, 0, 0, 0.04)',
      30: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      focus:
        '$colors$surface-base-default 0px 0px 0px 5px, $colors$loading-default 0px 0px 0px 9px',
      'focus-sm':
        '$colors$surface-base-default 0px 0px 0px 3px, $colors$loading-default 0px 0px 0px 6px',
      'focus-highlight':
        '$colors$surface-base-default 0px 0px 0px 5px, $colors$yellow500 0px 0px 0px 9px',
      none: 'none',
    },
    transitions: {
      slow: 'all cubic-bezier(0.4, 0, 0.2, 1) 400ms',
      base: 'all cubic-bezier(0.4, 0, 0.2, 1) 300ms',
      fast: 'all cubic-bezier(0.4, 0, 0.2, 1) 150ms',
    },
  },
  media: {
    'bp-sm': '(min-width: 520px)',
    'bp-md': '(min-width: 900px)',
    'bp-lg': '(min-width: 1200px)',
    'bp-xl': '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    d: (value: Stitches.PropertyValue<'display'>) => ({
      display: value,
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    spaceY: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: `calc(${value} * calc(1 - 0))`,
      marginBottom: `calc(${value} * 0)`,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    w: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
    }),

    h: (value: Stitches.PropertyValue<'height'>) => ({
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const lightTheme = createTheme('light-theme', {
  colors: {
    ...light,
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...dark,
  },
});

export const globalStyles = globalCss({
  '@import': 'url("https://use.typekit.net/jll4squ.css")',

  '*, *::before, *::after': {
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    margin: 0,
    color: '$text-default',
    backgroundColor: '$surface-base-default',
  },

  button: {
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  },

  'body, button': {
    color: '$forest',
    fontFamily: '$sans',
    fontSize: '$base',
  },

  '[disabled]': {
    cursor: 'not-allowed',
  },

  'html, body, #root, #__next, #__next > div': {
    height: '100%',
    zIndex: 0,

    '@bp-md': {
      height: 'auto',
    },
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'button, input, textarea': {
    fontFamily: '$sans',
    fontDisplay: 'swap',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$900',
  },

  'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus':
    {
      boxShadow: '0 0 0px 4px hsla(21, 100%, 91%, 1) inset !important',
      transition: 'background-color 5000s ease-in-out 0s',
      filter: 'none',
    },
});
