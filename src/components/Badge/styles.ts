import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  fontSize: 9,
  fontWeight: '$semibold',
  textTransform: 'uppercase',

  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

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

      default: {
        color: '$text-onInteractive',
        fontSize: '$sm',
        fontWeight: '$medium',

        borderRadius: '$xs',
        px: '$3',
        py: '$1',
        whiteSpace: 'nowrap',
        w: 'auto',
      },

      icon: {
        borderRadius: '$xs',
        px: '$1',
        py: 3,
      },
    },

    onDark: {
      true: {
        borderColor: '$surface-base-subdued',
      },
    },
  },

  defaultVariants: {
    variant: 'food',
    onDark: false,
  },
});
