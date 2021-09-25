import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { colors, fontSizes, fonts } from './tokens';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const overrides = {
  colors,
  fontSizes,
  fonts,
  config,
};

export const theme = extendTheme(overrides);
