import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { colors, fontSizes, fonts, radii } from './tokens';
import { Button } from 'components/Button';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const components = {
  Button,
};

const overrides = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'light' ? 'base.light' : 'base.dark',
      color: props.colorMode === 'light' ? 'base.dark' : 'base.light',
    },
  }),
  colors,
  fontSizes,
  fonts,
  radii,
  config,
  components,
};

export const theme = extendTheme(overrides);
