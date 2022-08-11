import { styled } from '../../../stitches.config';
import { Button } from 'reakit/Button';

export const Container = styled(Button, {
  $$bgColorOpacity: 'rgb(225, 225, 225, 0.995)',

  color: '$neutral400',
  bg: '$$bgColorOpacity',
  borderRadius: '$sm',
  p: '$2',
  pb: '$4',

  d: 'flex',
  flexDirection: 'column',
  alignContent: 'start',
  justifyContent: 'space-between',
  gap: '$3',

  position: 'relative',
  cursor: 'pointer',
  transition: '$base',

  '&:hover': {
    transform: 'scale(1.01)',
  },

  '&:focus': {
    boxShadow: '$focus',
    bg: '$white',
  },

  variants: {
    variant: {
      primary: {
        bg: '$$bgColorOpacity',

        '&:hover': {
          bg: '$white',
        },
      },

      add: {
        bg: '$transparent',
        border: '3px dashed $loading-default',

        alignItems: 'center',
        justifyContent: 'center',

        px: '$6',

        '&:hover': {
          bg: '$action-transparent-transparent',
        },
      },
    },
  },
});

export const Tag = styled('div', {
  color: '$text-onInteractive',
  fontSize: '$tiny',
  fontWeight: '$medium',

  bg: '$surface-base-default',
  borderRadius: '$xs',
  px: '$3',
  py: '$1',
  w: 'auto',
});
