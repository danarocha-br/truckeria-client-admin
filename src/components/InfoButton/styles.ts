import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '$round',
  transition: '$base',

  '&:hover': {
    bg: '$surface-base-subdued',
  },

  variants: {
    size: {
      sm: {
        w: '$6',
        h: '$6',
        p: 1,
      },
      md: {
        w: '1.72rem',
        h: '1.72rem',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
