import { darken, mode } from '@chakra-ui/theme-tools';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Link = {
  baseStyle: {
    fontWeight: 'medium',
    borderRadius: 'sm',
  },

  variants: {
    primary: (props: any) => ({
      color: mode(darken('yellow.900', 10), darken('yellow.900', 0))(props),
      position: 'relative',
      transition: 'all 0.5s ease',
      px: 2,
      py: 2,

      _hover: {
        textDecoration: 'none',
        color: props.colorMode === 'light' ? 'brand.500' : 'white',

        _after: {
          width: 2,
          right: -4,
        },

        _before: {
          width: 2,
          left: -4,
        },
      },

      _after: {
        content: `""`,
        position: 'absolute',
        width: 3,
        height: '1px',
        bg: 'red.500',
        right: -4,
        top: '50%',
        transition: 'all 0.5s ease',
      },

      _before: {
        content: `""`,
        position: 'absolute',
        width: 3,
        height: '1px',
        bg: 'red.500',
        left: -4,
        top: '50%',
        transition: 'all 0.5s ease',
      },

      _active: {
        color: mode(darken('yellow.900', 20), darken('yellow.900', 10))(props),
        boxShadow:
          props.colorMode === 'light'
            ? '0 0 0 1px var(--chakra-colors-gray-100)'
            : '0 0 0 1px var(--chakra-colors-gray-700)',
      },

      _focus: {
        boxShadow:
          props.colorMode === 'light'
            ? '0 0 0 1px var(--chakra-colors-base.light)'
            : '0 0 0 1px var(--chakra-colors-base.dark)',
      },
    }),
  },

  defaultProps: {
    variant: 'primary',
  },
};
