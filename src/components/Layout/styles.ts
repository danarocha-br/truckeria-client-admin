import { styled } from '../../../stitches.config';
import { Grid } from 'components/Grid';

export const Container = styled(Grid, {
  variants: {
    appearance: {
      list: {
        gap: '$2',

        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',

        '@bp-md': {
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        },

        '@bp-lg': {
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        },

        '@bp-xl': {
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        },

        '@bp-2xl': {
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        },

        '& > div:first-child': {
          borderTopLeftRadius: '$sm',
          borderTopRightRadius: '$sm',
        },
        '& > div:last-child': {
          borderBottomLeftRadius: '$sm',
          borderBottomRightRadius: '$sm',
        },
      },

      grid: {
        gap: '$8',

        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',

        '@bp-md': {
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        },

        '@bp-lg': {
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        },

        '@bp-xl': {
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        },

        '@bp-2xl': {
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        },

        '& > div:first-child': {
          borderTopLeftRadius: '$sm',
          borderTopRightRadius: '$sm',
        },
        '& > div:last-child': {
          borderBottomLeftRadius: '$sm',
          borderBottomRightRadius: '$sm',
        },
      },
    },
  },

  defaultVariants: {
    appearance: 'list',
  },
});
