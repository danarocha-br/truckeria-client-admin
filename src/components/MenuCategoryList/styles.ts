import { styled } from '../../../stitches.config';

export const Container = styled('a', {
  bg: '$surface-base-disabled',
  borderRadius: '$sm',
  boxShadow: '0 0 0 1px $colors$surface-base-hover',

  w: '$full',
  py: '$3',
  px: '$4',

  d: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '$3',

  textDecoration: 'none',
  outline: 'none',
  opacity: 0.8,
  transition: '$slow',

  '&:hover': {
    transform: 'scale(1.01)',
    opacity: 1,
  },

  '&:focus': {
    boxShadow: '$focus-sm',
    bg: '$surface-base-lighter',
    opacity: 1,
  },

  '@bp-md': {
    flexDirection: 'row',
    gap: '$8',

    h: '$11',
    px: '$0',
    py: '$0',
    pr: '$4',
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
