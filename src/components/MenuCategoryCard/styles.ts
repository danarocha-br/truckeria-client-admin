import { darkTheme, styled } from '../../../stitches.config';

export const Container = styled('a', {
  $$bgColorOpacity: 'hsla(0, 0%, 100%, .9)',

  color: '$neutral500',
  borderRadius: '$sm',
  boxShadow: '$15',

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

  variants: {
    variant: {
      primary: {
        bg: '$$bgColorOpacity',

        [`.${darkTheme} &`]: {
          color: '$neutral400',
        },

        '&:hover': {
          bg: '$white',
        },
      },

      add: {
        bg: '$transparent',
        border: '3px dashed $loading-default',

        alignItems: 'center',
        justifyContent: 'center',

        px: '$6',

        '&:hover': {
          bg: '$action-transparent-transparent',
        },
      },
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
  w: 'auto',

  [`.${darkTheme} &`]: {
    bg: '$surface-base-default',
  },
});
