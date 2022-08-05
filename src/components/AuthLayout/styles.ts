import { styled, keyframes } from '../../../stitches.config';

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

export const AnimatedContainer = styled('div', {
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
