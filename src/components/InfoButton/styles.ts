import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  w: '$7',
  h: '$7',

  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '$round',
  transition: '$base',

  '&:hover': {
    bg: '$surface-base-hover',
  },
});
