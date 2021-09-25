import { darken, mode, whiten, transparentize } from '@chakra-ui/theme-tools';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Button = {
  baseStyle: {
    fontWeight: 'semibold',
    borderRadius: 'base',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 6,
      py: 6,
    },
    md: {
      fontSize: 'base',
      px: 10,
      py: 8,
    },
  },

  variants: {
    primary: (props: any) => ({
      color: 'white',
      bg: props.colorMode === 'light' ? 'brand.500' : 'brand.500',
      transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
      _hover: {
        bg: mode(darken('brand.500', 5), darken('brand.500', 5))(props),
        _disabled: {
          bg: mode(
            whiten('brand.500', 75),
            transparentize('brand.500', 0.6)
          )(props),
        },
      },
      _active: {
        border: '1px solid',
        borderColor: props.colorMode === 'light' ? 'brand.500' : 'brand.500',
        bg: mode(darken('brand.500', 8), darken('brand.500', 8))(props),
        transform: 'scale(1)',
      },
      _disabled: {
        opacity: 1,
        color: props.colorMode === 'light' ? 'brand.500' : 'white',
        bg: mode(
          whiten('brand.500', 75),
          transparentize('brand.500', 0.6)
        )(props),
      },
      _focus: {
        transform: 'scale(1)',
        border: '2px solid',
        borderColor: props.colorMode === 'light' ? 'base.light' : 'base.dark',
        boxShadow:
          '0 0 0 3px var(--chakra-colors-brand-500), 0 0 0 3px var(--chakra-colors-brand-100)',
      },
    }),

    transparent: (props: any) => ({
      color: props.colorMode === 'light' ? 'base.dark' : 'base.light',
      bg: 'transparent',
      transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
      _hover: {
        bg: props.colorMode === 'light' ? 'gray.100' : 'gray.700',
        _disabled: {
          bg: mode(
            whiten('gray.400', 80),
            transparentize('gray.600', 0.5)
          )(props),
        },
      },
      _active: {
        border: '1px solid',
        borderColor: props.colorMode === 'light' ? 'gray.100' : 'gray.700',
        bg: props.colorMode === 'light' ? 'gray.100' : 'gray.700',
        transform: 'scale(1)',
      },
      _disabled: {
        opacity: 1,
        bg: mode(
          whiten('gray.400', 80),
          transparentize('gray.600', 0.5)
        )(props),
      },
      _focus: {
        transform: 'scale(1)',
        border: '2px solid',
        borderColor: props.colorMode === 'light' ? 'base.light' : 'base.dark',
        boxShadow:
          props.colorMode === 'light'
            ? '0 0 0 3px var(--chakra-colors-gray-100)'
            : '0 0 0 3px var(--chakra-colors-gray-700)',
      },
    }),
  },

  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
