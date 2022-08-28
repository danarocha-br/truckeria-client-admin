import * as React from 'react';
import { styled } from '../../../stitches.config';

export type TextProps = React.ComponentProps<typeof Text>;

export const Text = styled('span', {
  margin: '0',
  fontWeight: '$regular',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      tiny: {
        fontSize: '$tiny',
        lineHeight: '1.1rem',
      },
      xs: {
        fontSize: '$xs',
        lineHeight: '1.2rem',
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '1.3rem',
      },
      base: {
        fontSize: '$base',
        lineHeight: '1.5rem',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '1.8rem',
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '2rem',
      },
      '2xl': {
        fontSize: '$2xl',
      },
      '3xl': {
        fontSize: '$3xl',
      },
    },

    color: {
      primary: {
        color: '$text-default',
      },
      subdued: {
        color: '$text-subdued',
      },
      lighter: {
        color: '$text-lighter',
      },
      success: {
        color: '$text-success',
      },
      danger: {
        color: '$text-danger',
      },
      warning: {
        color: '$text-warning',
      },
      onInteractive: {
        color: '$text-onInteractive',
      },
      contrast: {
        color: '$text-contrast',
      },
      'contrast-subdued': {
        color: '$neutral500',
      },
    },

    weight: {
      light: {
        fontWeight: '$light',
      },
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      semibold: {
        fontWeight: '$semibold',
      },
    },

    align: {
      center: {
        textAlign: 'center',
      },
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },

    leading: {
      1: {
        lineHeight: '$1',
      },
      2: {
        lineHeight: '$2',
      },
      3: {
        lineHeight: '$3',
      },
      4: {
        lineHeight: '$4',
      },
      5: {
        lineHeight: '$5',
      },
      6: {
        lineHeight: '$6',
      },
      7: {
        lineHeight: '$7',
      },
    },
  },

  defaultVariants: {
    align: 'left',
    size: 'base',
    color: 'default',
    leading: 3,
    weight: 'regular',
  },
});
