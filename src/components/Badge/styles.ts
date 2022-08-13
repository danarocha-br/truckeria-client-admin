import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  fontSize: 9,
  fontWeight: '$semibold',
  textTransform: 'uppercase',

  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    variant: {
      food: {
        borderRadius: '$round',
        w: '1.9rem',
        h: '1.9rem',
        p: '$1',

        border: '2px solid $white',
      },

      circle: {
        borderRadius: '$round',
        border: '2px solid $white',
        w: '1.9rem',
        h: '1.9rem',
        p: '$1',
      },

      default: {},
    },

    color: {
      neutral: {
        bg: '$neutral400',
      },

      brand: {
        bg: '$brand',
      },
    },
  },

  defaultVariants: {
    variant: 'food',
    color: 'brand',
  },
});
