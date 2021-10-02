module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxl: '153.6rem',
      xl: '128rem',
      lg: '102.4rem',
      md: '76.8rem',
      sm: '64rem',
      gutter: '3.2rem',
    },
    colors: {
      brand: '#FF8D4D',
      white: '#FFFFFF',
      red: {
        500: '#E85A7C',
        100: '#F7D5D5',
      },
      yellow: {
        500: '#F7C063',
        300: '#CCAF81',
        100: '#E8D6CB',
      },
      green: {
        500: '#76C248',
        300: '#a4d685',
        100: '#e4f3da',
      },
      neutral: {
        900: '#20242A',
        800: '#2B3038',
        700: '#3D444F',
        600: '#505660',
        500: '#636F73',
        400: '#7C8A90',
        300: '#95A6AD',
        200: '#B8C4C8',
        100: '#ECEFF4',
      },
    },
    fontFamily: {
      sans: [
        "graphie, -apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      ],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      tiny: '1.0rem',
      xs: '1.2rem',
      sm: '1.4rem',
      base: '1.6rem',
      lg: '2.0rem',
      xl: '2.4rem',
      '2xl': '3.2rem',
      '3xl': '4.4rem',
    },
    borderRadius: {
      xs: '0.4rem',
      sm: '0.8rem',
      md: '1.2rem',
      lg: '1.6rem',
      rounded: '50%',
    },
    boxShadow: {
      10: '0px 4px 10px rgba(0, 0, 0, 0.05)',
      30: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      none: 'none',
    },
  },
  extend: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
