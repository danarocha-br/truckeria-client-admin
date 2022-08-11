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
  py: '$5',
  pb: '$0',
  px: '$5',

  '@bp-md': {
    px: '$8',
    borderTopLeftRadius: '$lg',
    borderBottomLeftRadius: '$lg',
    bg: '$background-subdued',
  },
});
