import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  bg: '$background-default',
  color: '$text-default',

  w: '$full',
  h: '$full',

  d: 'block',

  '@bp-md': {
    d: 'flex',
    flexDirection: 'row',
    p: '$4',
    pr: '$0',
  },
});

export const Main = styled('main', {
  w: '$full',
  h: '$full',
  py: '$5',
  px: '$6',

  '@bp-md': {
    borderTopLeftRadius: '$lg',
    borderBottomLeftRadius: '$lg',
    bg: '$background-subdued',
  },
});
