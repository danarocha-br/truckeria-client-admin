import { styled } from '../../../stitches.config';

export const Container = styled('nav', {
  '& ol': {
    listStyle: 'none',
    padding: 0,

    d: 'inline-flex',
  },
});

export const ListItem = styled('li', {
  d: 'inline-flex',
  alignItems: 'center',

  '&:last-child span': {
    d: 'none',
  },
});

export const Anchor = styled('a', {
  color: '$text-default',
  opacity: 0.5,
  textDecoration: 'none',
  // outline: 'none',
  position: 'relative',

  transition: 'all cubic-bezier(0, 0, 0.2, 1) 700ms',
  transform: 'scale(1)',
  border: '2px dashed $transparent',
  px: '$1',
  whiteSpace: 'nowrap',

  '&:before, &:after': {
    content: '',
    bg: '$action-primary-default',
    d: 'inline-block',
    w: '$0',
    h: '1.3px',
    position: 'absolute',
    top: 11,
    transition: 'all cubic-bezier(0, 0, 0.2, 1) 700ms',
  },

  '&:before': {
    left: '$-2',
  },
  '&:after': {
    right: '$-2',
  },

  '&:hover': {
    color: '$interactive-hover',
    opacity: 1,

    '&:before, &:after': {
      h: '1px',
      w: '$1',
      transition: 'all cubic-bezier(0, 0, 0.2, 1) 700ms',
    },
  },

  '&:focus': {
    outline: 'none',
    opacity: 1,
    borderColor: '$action-transparent-transparent',
  },

  variants: {
    isActive: {
      true: {
        opacity: 1,
      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
});

export const Separator = styled('span', {
  w: 1,
  h: '$4',
  bg: '$text-lighter',
  opacity: 0.4,
  mx: '$5',
});
