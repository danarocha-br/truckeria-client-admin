import { styled } from '../../../stitches.config';

export const Container = styled('aside', {
  h: '$full',
  w: 260,

  pt: '$5',
  pb: '$2',
  pr: '$4',

  d: 'none',
  flexDirection: 'column',
  gap: '$5',
  justifyContent: 'space-between',
  position: 'relative',

  '@bp-md': {
    d: 'flex',
  },
});

export const Anchor = styled('a', {
  color: '$text-default',
  textDecoration: 'none',
  fontWeight: '$regular',
  opacity: 0.6,
  border: '2px dashed $transparent',
  borderRadius: '$xs',

  d: 'flex',
  alignItems: 'center',
  gap: '$5',
  mb: '$1',
  ml: '$1',
  p: '$2',

  w: '$full',

  position: 'relative',
  transition: 'all cubic-bezier(0.4, 0, 0.2, 1) 300ms',

  '&:after': {
    content: '',
    bg: '$brand',
    w: 0,
    h: 2,
    position: 'absolute',
    top: '$8',
    left: '3.4rem',
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

  '&:focus': {
    outline: 'none',
    opacity: 1,
    borderColor: '$action-transparent-transparent',
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
          top: '$8',
          left: '3.4rem',
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

export const AnchorMobile = styled('a', {
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

  // '&:after': {
  //   content: '',
  //   bg: '$brand',
  //   w: 0,
  //   h: 2,
  //   position: 'absolute',
  //   top: '$7',
  //   borderRadius: '$pill',
  //   transition: 'all cubic-bezier(0.4, 0, 0.2, 1) 300ms',
  // },

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

        // '&:after': {
        //   content: '',
        //   bg: '$brand',
        //   w: '$6',
        //   h: 2,
        //   position: 'absolute',
        //   top: '$7',
        //   borderRadius: '$pill',
        // },

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

export const ContainerMob = styled('nav', {
  position: 'fixed',
  bottom: 0,
  zIndex: 10,

  bg: '$background-subdued',
  h: '$11',
  w: '$full',

  borderTopRightRadius: '$lg',
  borderTopLeftRadius: '$lg',

  p: '$5',

  d: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  '@bp-md': {
    d: 'none',
  },
});
