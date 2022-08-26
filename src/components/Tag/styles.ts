import { styled } from '../../../stitches.config';

export const Container = styled('span', {
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '1.5rem',
  textTransform: 'capitalize',

  d: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  border: '1.3px solid $brand',
  borderRadius: '$xs',
  px: '$4',
  py: 2,

  variants: {
    isEmpty: {
      true: {
        py: '$3',
        px: '$2',
      },
    },

    color: {
      default: { color: '$text-default' },
      contrast: { color: '$text-contrast' },
    },
  },

  defaultVariants: {
    isEmpty: false,
    color: 'default',
  },
});

export const Rect = styled('div', {
  h: 5,
  w: 50,
  bg: '$loading-default',
  borderRadius: '$pill',
});
