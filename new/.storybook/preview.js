import { RouterContext } from 'next/dist/shared/lib/router-context';
import { withDesign } from 'storybook-addon-designs';
import { themes } from '@storybook/theming';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { TabContainer } from 'storybook-addon-docs-tabs';
import { addDecorator, addParameters } from '@storybook/react';

import 'styles/reset.css';
import { lightTheme, darkTheme } from '../stitches.config';

addDecorator(withDesign());

addParameters({
  a11y: {},
});

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  actions: { argTypesRegex: '^on.*' },
  docs: {
    theme: themes.dark,
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <TabContainer context={context}>{children}</TabContainer>
      </DocsContainer>
    ),
  },
  options: {
    storySort: {
      order: [
        'Intro',
        'Foundation',
        'Primitives',
        'Components',
        'Navigation',
        'Form Controls',
        'Templates',
      ],
    },
  },

  backgrounds: {
    default: 'dark',
    layout: 'centered',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#20242A',
      },
    ],
  },

  multipleThemesStitches: {
    values: [
      {
        name: 'Light',
        theme: lightTheme,
      },
      {
        name: 'Dark',
        theme: darkTheme,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
];
