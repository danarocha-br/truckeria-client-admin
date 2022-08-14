import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  bg: '$background-default',
  color: '$text-default',

  w: '$full',
  h: '$full',

  d: 'block',

  pb: '$10',

  '@bp-md': {
    d: 'flex',
    flexDirection: 'row',
    p: '$4',
    pr: '$0',
    pb: '$4',
  },
});

export const Main = styled('main', {
  w: '$full',
  h: '$full',

  pb: '$0',
  py: '$5',

  '@bp-md': {
    borderTopLeftRadius: '$lg',
    borderBottomLeftRadius: '$lg',
    bg: '$background-subdued',
  },

  variants: {
    removePadding: {
      true: {
        py: '$0',
      },
    },
  },
});
