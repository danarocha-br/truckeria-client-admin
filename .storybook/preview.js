import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
// import { withNextRouter } from 'storybook-addon-next-router';
import {
  ChakraProvider,
  Flex,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';

import { theme } from "styles/theme";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
SunIcon
const Nav = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex p="0.5rem" justifyContent="space-between" align="center">
      {children}
        <IconButton
          variant='transparent'
          aria-label='Toogle theme'
          position="absolute"
          top="1rem"
          right="1rem"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />  }
        >
        </IconButton>
    </Flex>
  );
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

// addDecorator(withNextRouter());

addParameters({
  a11y: {},
});

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Nav>
      <Story />
      </Nav>
    </ChakraProvider>
  ),
];
