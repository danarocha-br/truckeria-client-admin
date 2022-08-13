import { darkTheme, styled } from '../../../stitches.config';

export const Container = styled('a', {
  bg: '$white',
  borderRadius: '$sm',
  boxShadow: '0 0 0 1px $colors$surface-base-subdued',

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

  [`.${darkTheme} &`]: {
    bg: '$surface-base-disabled',
    boxShadow: '0 0 0 1px $colors$surface-base-hover',
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

  bg: '$neutral800',
  borderRadius: '$xs',
  px: '$3',
  py: '$1',
  w: 'auto',

  [`.${darkTheme} &`]: {
    bg: '$surface-base-default',
  },
});
