import tokens from '../tokens';

export default {
  id: 'light',
  colors: {
    white: tokens.colors.white,
  },

  text: {
    main: tokens.colors.brand,
    secondary: tokens.colors.gray[100],
  },
} as const;
