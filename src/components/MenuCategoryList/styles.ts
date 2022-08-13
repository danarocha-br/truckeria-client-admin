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
    // boxShadow:
    //   '$colors$surface-base-default 0px 0px 0px 2px, 0px 0px 0px 2.5px $colors$surface-base-transparent',
  },

  '&:focus': {
    boxShadow: '$focus-sm',
    bg: '$surface-base-lighter',
    opacity: 1,
  },

  [`.dark-theme &`]: {
    bg: '$surface-base-disabled',
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
