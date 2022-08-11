import { styled } from '../../../stitches.config';

export const SVG = styled('svg', {
  fill: 'currentColor',

  variants: {
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
      danger: {
        color: '$text-danger',
      },
      success: {
        color: '$text-success',
      },
      warning: {
        color: '$text-warning',
      },
      onInteractive: {
        color: '$text-onInteractive',
      },
      brand: {
        color: '$brand',
      },
      current: {
        color: 'currentColor',
      },
    },

    size: {
      xs: {
        width: '$4',
      },
      sm: {
        width: '$5',
      },
      base: {
        width: '$6',
      },
      lg: {
        width: '$7',
      },
      xl: {
        width: '$8',
      },
    },
  },
});
