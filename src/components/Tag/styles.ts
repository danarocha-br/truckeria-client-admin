import { styled } from '../../../stitches.config';

export const Container = styled('span', {
  color: '$text-default',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '1.5rem',
  d: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  border: '1px solid $brand',
  borderRadius: '$xs',
  px: '$5',
  pb: '$1',

  variants: {
    isEmpty: {
      true: {
        py: '$3',
        px: '$2',
      },
    },
  },

  defaultVariants: {
    isEmpty: false,
  },
});

export const Rect = styled('div', {
  h: 5,
  w: 50,
  bg: '$loading-default',
  borderRadius: '$pill',
});
