import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  h: '$full',
  w: 240,

  pt: '$7',
  pb: '$2',
  px: '$3',

  d: 'flex',
  flexDirection: 'column',
  gap: '$5',
  justifyContent: 'space-between',
  position: 'relative',
});

export const Anchor = styled('a', {
  color: '$text-default',
  textDecoration: 'none',
  fontWeight: '$regular',
  opacity: 0.6,

  d: 'flex',
  alignItems: 'center',
  gap: '$5',
  mb: '$3',

  position: 'relative',
  transition: 'all cubic-bezier(0.4, 0, 0.2, 1) 300ms',

  '&:after': {
    content: '',
    bg: '$brand',
    w: 0,
    h: 2,
    position: 'absolute',
    top: '$7',
    left: '2.8rem',
    borderRadius: '$pill',
    transition: 'all cubic-bezier(0.4, 0, 0.2, 1) 300ms',
  },

  '&:hover': {
    opacity: 1,

    '& svg': {
      color: '$brand',
    },

    '&:after': {
      w: '$6',
    },
  },

  variants: {
    isActive: {
      true: {
        fontWeight: '$medium',
        opacity: 1,

        '&:after': {
          content: '',
          bg: '$brand',
          w: '$6',
          h: 2,
          position: 'absolute',
          top: '$7',
          left: '2.8rem',
          borderRadius: '$pill',
        },

        '&:hover': {
          '&:after': {
            w: '$5',
          },
        },
      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
});
