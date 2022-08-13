import { darkTheme, styled } from '../../../stitches.config';

export const Container = styled('div', {
  color: '$text-subdued',
  bg: '$white',
  boxShadow: '0 0 0 1px $colors$surface-base-subdued',

  w: '$full',
  maxWidth: '$full',
  px: '$4',
  py: '$2',

  d: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '$2',

  textDecoration: 'none',
  outline: 'none',
  opacity: 0.8,
  transition: '$slow',
  position: 'relative',

  // overflow: 'hidden',

  '& .product-list__actions': {
    // d: 'none',
    positition: 'absolute',
    right: 0,
  },

  '&:hover': {
    transform: 'scale(1.001)',
    opacity: 1,

    '& .product-list__actions': {
      d: 'flex',
    },
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
    gap: '$0',

    py: '$0',
    px: '$0',
    pr: '$4',
  },
});

export const TableItem = styled('div', {
  color: '$text-default',
  fontSize: '$sm',
  whiteSpace: 'nowrap',

  h: '$full',

  '@bp-md': {
    borderLeft: '2px solid $action-transparent-transparent',

    d: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    px: '$6',
  },
});

export const Tag = styled('div', {
  color: '$text-onInteractive',
  fontSize: '$sm',
  fontWeight: '$medium',

  bg: '$neutral900',
  borderRadius: '$xs',
  px: '$3',
  py: '$1',
  whiteSpace: 'nowrap',
  w: 'auto',

  [`.${darkTheme} &`]: {
    bg: '$surface-base-default',
  },
});
