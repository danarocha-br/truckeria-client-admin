import { darkTheme, styled } from '../../../stitches.config';

export const Container = styled('a', {
  $$bgColorOpacity: 'hsla(0, 0%, 100%, .9)',
  color: '$neutral500',

  bg: '$$bgColorOpacity',
  boxShadow: '$15',

  [`.${darkTheme} &`]: {
    color: '$neutral400',
  },

  borderRadius: '$sm',
  p: '$2',
  pb: '$4',

  d: 'flex',
  flexDirection: 'column',
  alignContent: 'start',
  justifyContent: 'space-between',
  gap: '$3',

  position: 'relative',
  cursor: 'pointer',
  transition: '$base',
  outline: 'none',
  textDecoration: 'none',

  '.card__actions': {
    opacity: 0,
    transitionDelay: '100ms',
    transitionDuration: '400ms',
  },

  '&:hover': {
    bg: '$white',

    transform: 'scale(1.01)',

    '.card__actions': {
      opacity: 1,
    },
  },

  '&:focus': {
    boxShadow: '$focus-highlight',

    bg: '$white',

    '.card__actions': {
      opacity: 1,
    },
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
  whiteSpace: 'nowrap',

  [`.${darkTheme} &`]: {
    bg: '$surface-base-default',
  },
});

export const Badge = styled('div', {
  color: '$text-onInteractive',
  fontSize: '$tiny',
  fontWeight: '$medium',

  bg: '$neutral800',
  borderRadius: '$xs',
  px: '$3',
  py: '$1',

  [`.${darkTheme} &`]: {
    bg: '$surface-base-default',
  },
});

export const ActiveBadge = styled('div', {
  color: '$text-onInteractive',
  fontSize: '$tiny',
  fontWeight: '$medium',

  bg: '$neutral600',
  borderRadius: '$xs',
  p: '$2',

  d: 'flex',
  verticalAlign: 'center',

  zIndex: 1,
});
