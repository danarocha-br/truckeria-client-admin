import { styled } from '../../../stitches.config';
import { Button } from 'reakit/Button';

export const Wrapper = styled(Button, {
  all: 'unset',
  position: 'relative',
  transition: '$slow',
});

export const Container = styled('svg', {
  transition: '$base',
  '& + svg': {
    transition: '$base',
    transform: 'scale(0.9)',
  },

  '&:hover': {
    transform: 'scale(1.1)',
  },

  '&:active': {
    transform: 'scale(1)',
    '& + svg': {
      transform: 'scale(.8)',
    },
  },

  '&:focus': {
    outline: 'blue',
    bg: '$action-primary-pressed',
  },

  variants: {
    variant: {
      primary: {
        color: '$action-primary-default',

        '&:hover': {
          color: '$action-primary-hover',
        },

        '&:focus, &:active': {
          color: '$action-primary-pressed',
        },
      },
      success: {
        color: '$action-success-default',

        '&:hover': {
          color: '$action-success-hover',
        },

        '&:focus, &:active': {
          color: '$action-success-pressed',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
