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

  variants: {
    variant: {
      primary: {
        color: '$action-primary-default',

        '&:hover': {
          color: '$action-primary-hover',
        },
      },
      success: {
        color: '$action-success-default',

        '&:hover': {
          color: '$action-success-hover',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
