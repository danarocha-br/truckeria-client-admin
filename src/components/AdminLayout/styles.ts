import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  bg: '$background-default',
  color: '$text-default',

  w: '$full',
  h: '$full',

  d: 'flex',

  p: '$4',
  pr: '$0',
});

export const Main = styled('main', {
  bg: '$background-subdued',

  w: '$full',
  h: '$full',
  py: '$5',
  px: '$6',

  borderTopLeftRadius: '$lg',
  borderBottomLeftRadius: '$lg',
});
