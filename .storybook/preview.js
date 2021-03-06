import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withThemesProvider } from 'storybook-styled-components-theme-selector';
import { withDesign } from 'storybook-addon-designs';
import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import './next-image.mock';
import '../tailwind.css';

import GlobalStyles from 'styles/global';
import { lightTheme, darkTheme } from 'styles/themes';
import tokens from '../tailwind.config.js';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    theme: themes.dark,
  },
  options: {
    storySort: {
      order: ['Intro', 'Foundation', 'Components', 'Navigation', 'Form Controls', 'Templates'],
    },
  },
  backgrounds: {
    default: 'dark',
    layout: 'fullscreen',
    values: [
      {
        name: 'light',
        value: tokens.theme.colors.neutral[100],
      },
      {
        name: 'dark',
        value: tokens.theme.colors.neutral[900],
      },
    ],
  },
}

const appThemes = [
  { ...lightTheme,
    id: 'light',
    name: 'Light'
  },
  { ...darkTheme,
    id: 'dark',
    name: 'Dark'
    }
]

addDecorator(withDesign());
addDecorator(
  withThemesProvider({
    themes: appThemes,
  }),
);

addParameters({
  a11y: {},
});

export const decorators = [
  (Story) => (

    <ThemeProvider theme={darkTheme}>

    <GlobalStyles removeBg />
        <Story />
    </ThemeProvider>
  ),
];
