import { styled, keyframes } from '../../../stitches.config';
import { convertRemToPixels } from '../../utils/convertRemToPixels';

const spinner = keyframes({
  '0%': { transform: 'rotate(0)' },
  '100%': { transform: 'rotate(360deg)' },
});

const spinnerOuter = {
  content: '',
  position: 'absolute',
  d: 'block',
  borderRadius: '$round',
  border: '2px solid $transparent',
  top: 4,
  left: 2.5,
  w: convertRemToPixels(38.75),
  h: convertRemToPixels(38.75),
};

export const Container = styled('span', {
  d: 'block',
  float: 'left',
  border: '2.125px solid',
  borderRadius: '$round',
  animation: `${spinner} 1.2s linear infinite`,
  position: 'relative',

  '&:before': {
    ...spinnerOuter,
  },

  '&:after': {
    ...spinnerOuter,
    d: 'none',
  },

  variants: {
    color: {
      primary: {
        borderColor: '$action-primary-default',

        '&:before': {
          borderTopColor: '$action-primary-subdued',
        },
        '&:after': {
          borderTopColor: '$transparent',
          borderBottomColor: '$action-primary-default',
        },
      },

      onInteractive: {
        borderColor: '$text-onInteractive',

        '&:before': {
          borderTopColor: '$action-primary-subdued',
        },
      },
    },

    size: {
      xs: {
        borderWidth: '1.234px',
        w: convertRemToPixels(22),
        h: convertRemToPixels(22),

        '&:before, &:after': {
          borderWidth: '2px',
          w: convertRemToPixels(12.75),
          h: convertRemToPixels(12.75),
        },
      },
      sm: {
        borderWidth: '1.234px',
        w: convertRemToPixels(32),
        h: convertRemToPixels(32),

        '&:before, &:after': {
          borderWidth: '2px',
          w: convertRemToPixels(24.75),
          h: convertRemToPixels(24.75),
        },
      },

      md: {
        w: convertRemToPixels(50),
        h: convertRemToPixels(50),

        '&:before, &:after': {
          w: convertRemToPixels(38.75),
          h: convertRemToPixels(38.75),
        },
      },

      lg: {
        w: convertRemToPixels(70),
        h: convertRemToPixels(70),

        '&:before, &:after': {
          w: convertRemToPixels(58.75),
          h: convertRemToPixels(58.75),
        },
      },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'xs',
  },
});

export const ContainerPage = styled('div', {
  position: 'relative',
  width: convertRemToPixels(148),
  height: convertRemToPixels(148),
  borderRadius: '$round',
  animation: `${spinner} 1.2s linear infinite`,

  '& span': {
    opacity: 0.5,
    position: 'absolute',
    width: '$full',
    height: '$full',
    borderRadius: '$round',
    background:
      'linear-gradient(hsla(10, 100%, 80%, .5), hsla(179, 63%, 83%, .3), hsla(38, 90%, 88%, .5))',

    '@dark': {
      background:
        'linear-gradient(hsla(10, 100%, 60%, .1), hsla(179, 63%, 43%, .05), hsla(38, 90%, 60%, .1))',
    },

    '&:nth-child(1)': {
      filter: 'blur(20px)',
    },
    '&:nth-child(2)': {
      filter: 'blur(30px)',
    },
    '&:nth-child(3)': {
      filter: 'blur(40px)',
    },
    '&:nth-child(4)': {
      filter: 'blur(50px)',
    },
  },

  '&:after': {
    content: '',
    border: '6px solid $background-default',
    bg: '$surface-base-default',
    position: 'absolute',
    top: convertRemToPixels(10),
    left: convertRemToPixels(10),
    right: convertRemToPixels(10),
    bottom: convertRemToPixels(10),
    borderRadius: '$round',
  },
});
