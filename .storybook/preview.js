import { addDecorator, addParameters } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';
import { ThemeProvider } from 'styled-components';
import { withThemesProvider } from 'storybook-styled-components-theme-selector';
import { withDesign } from 'storybook-addon-designs';

import GlobalStyles from 'styles/global';
import { lightTheme, darkTheme } from 'styles/themes';
import tokens from 'styles/tokens';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: tokens.colors.gray[100],
      },
      {
        name: 'dark',
        value: tokens.colors.gray[900],
      },
    ],
  },
}

const themes = [
  { ...lightTheme,
    id: 'light',
    name: 'Light'
  },
  { ...darkTheme,
    id: 'dark',
    name: 'Dark'
    }
]

addDecorator(withNextRouter());
addDecorator(withDesign());
addDecorator(
  withThemesProvider({
    themes,
  }),
);

addParameters({
  a11y: {},
});

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
        <GlobalStyles removeBg />
        <Story />
    </ThemeProvider>
  ),
];
