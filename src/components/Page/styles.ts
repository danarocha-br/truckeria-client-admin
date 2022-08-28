import { keyframes, styled } from '../../../stitches.config';

const enterLeft = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-20px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

const enterRight = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(20px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

export const AdminContainer = styled('div', {
  bg: '$background-default',
  color: '$text-default',

  w: '$full',
  h: '$full',

  d: 'block',

  pb: '$10',

  '@bp-md': {
    d: 'flex',
    flexDirection: 'row',
    p: '$4',
    pr: '$0',
    pb: '$4',
  },
});

export const AdminMain = styled('main', {
  w: '$full',
  h: '$full',

  pb: '$0',
  py: '$5',

  '@bp-md': {
    borderTopLeftRadius: '$lg',
    borderBottomLeftRadius: '$lg',
    bg: '$background-subdued',
  },

  variants: {
    removePadding: {
      true: {
        py: '$0',
      },
    },
  },
});

export const AnimatedAuthContainer = styled('div', {
  py: '$8',
  px: '$8',
  flex: 1,
  position: 'relative',
  h: '$full',
  overflowY: 'auto',
  pt: '7rem',

  '@bp-md': {
    px: '10rem',
  },
  '@bp-xl': {
    px: '15rem',
  },

  variants: {
    position: {
      right: {
        animation: `${enterRight} ease-in-out 500ms`,
      },
      left: {
        animation: `${enterLeft} ease-in-out 500ms`,
      },
    },
  },

  defaultVariants: {
    position: 'left',
  },
});
