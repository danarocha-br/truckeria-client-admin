export default {
  screens: {
    xxl: 'var(--container-xxl)',
    xl: 'var(--container-xl)',
    lg: 'var(--container-lg)',
    md: 'var(--container-md)',
    sm: 'var(--container-sm)',
    gutter: 'var(--container-gutter)',
  },
  radii: {
    xs: 'var(--radii-xs)',
    sm: 'var(--radii-sm)',
    md: 'var(--radii-md)',
    lg: 'var(--radii-lg)',
    rounded: 'var(--radii-rounded)',
  },
  font: {
    family:
      "-apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      xxs: '1.0rem',
      xs: '1.2rem',
      sm: '1.4rem',
      base: '1.6rem',
      md: '2.0rem',
      lg: '2.4rem',
      xl: '3.2rem',
      xxl: '4.4rem',
    },
    weight: {
      reg: 400,
      md: 500,
      bold: 700,
    },
  },

  colors: {
    brand: 'var(--color-brand)',
    white: 'var(--color-white)',
    blue: {
      900: 'var(--color-blue900)',
      500: 'var(--color-blue500)',
      400: 'var(--color-blue400)',
      300: 'var(--color-blue300)',
      200: 'var(--color-blue200)',
      100: 'var(--color-blue100)',
    },
    green: {
      900: 'var(--color-green900)',
    },
    gray: {
      900: 'var(--color-gray900)',
      800: 'var(--color-gray800)',
      700: 'var(--color-gray700)',
      600: 'var(--color-gray600)',
      500: 'var(--color-gray500)',
      400: 'var(--color-gray400)',
      300: 'var(--color-gray300)',
      200: 'var(--color-gray200)',
      100: 'var(--color-gray100)',
    },
  },
  spacings: {
    xs: '0.4rem',
    base: '0.8rem',
    sm: '1.6rem',
    md: '2.4rem',
    lg: '3.2rem',
    xl: '6.4rem',
    xxl: '12.8rem',
  },
  transition: {
    base: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
    fast: '0.15s ease-in-out',
  },
  elevation: {
    10: 'var(--elevation-10)',
    30: 'var(--elevation-30)',
  },
} as const;
