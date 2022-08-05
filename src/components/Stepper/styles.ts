import { styled } from '../../../stitches.config';

export const Container = styled('nav', {
  w: '$full',
});

export const List = styled('ol', {
  d: 'flex',
  alignItems: 'center',
  justify: 'space-between',
  w: '$full',
  p: 0,

  '&:hover li:not(:hover) span': {
    opacity: 0,
  },
});

export const Item = styled('li', {
  color: '$text-lighter',
  textAlign: 'center',
  position: 'relative',
  whiteSpace: 'nowrap',
  minWidth: 0,
  borderBottom: '3px solid $surface-base-default',
  pb: '$6',
  overflow: 'visible',
  listStyle: 'none',
  flex: 2,

  '&:before': {
    content: '',
    bg: '$surface-base-subdued',
    d: 'block',
    w: 18,
    h: 18,
    borderRadius: '$round',
    border: '3px solid',
    borderColor: '$background-default',
    position: 'absolute',
    bottom: -9,
    left: 'calc(50% - 6px)',
    zIndex: 3,
    transitionPoperty: 'all',
    transitionTimingDunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
  },

  '&:first-child, &:last-child': {
    flex: 1,
  },

  '&:first-child': {
    textAlign: 'left',

    '&:before': {
      left: -1,
    },
  },

  '&:last-child': {
    textAlign: 'right',

    '&:before': {
      right: '$-1',
      left: 'auto',
    },

    '&:after': {
      w: 'inherit',
      left: 'inherit',
    },
  },

  '& span': {
    transition: 'opacity cubic-bezier(0.4, 0, 0.2, 1) 300ms',
    opacity: 0,
  },

  '&:not(:first-child):after': {},

  '&:hover': {
    '&:before': {
      transform: 'scale(1.2)',
    },
    '& span': {
      opacity: 0.5,
    },
  },

  variants: {
    isActive: {
      true: {
        '&:before': {
          bg: '$background-default',
          borderColor: '$action-success-default',
        },

        '&:last-child:after': {
          w: '200%',
          left: '-100%',
        },

        '& span': {
          opacity: 1,
        },

        '&:not(:first-child):after': {
          content: '',
          d: 'block',
          w: '$full',
          position: 'absolute',
          left: '-50%',
          bottom: '-2px',
          borderBottom: '3px solid $action-success-default',
        },

        '&:hover:before': {
          bg: '$background-default',
          borderColor: '$action-success-default',
        },
      },
    },
    isCompleted: {
      true: {
        '&:before': {
          bg: '$action-success-default',
        },

        '&:last-child:after': {
          w: '200%',
          left: '-100%',
        },

        '&:not(:first-child):after': {
          content: '',
          d: 'block',
          w: '$full',
          position: 'absolute',
          left: '-50%',
          bottom: '$-1',
          borderBottom: '2px solid $action-success-default',
        },
      },
    },
  },
});
