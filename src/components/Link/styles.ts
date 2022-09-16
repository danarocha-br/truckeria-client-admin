import { styled, keyframes } from '../../../stitches.config';
import { Clickable } from 'reakit/Clickable';

const lineUp = keyframes({
  '0%': {
    transformOrigin: '50% 100%',
    transform: 'scale3d(1, 0.045, 1)',
  },

  ' 50%': {
    transformOrigin: '50% 100%',
    transform: 'scale3d(1, 1, 1)',
  },

  '51%': {
    transformOrigin: '50% 0%',
    transform: 'scale3d(1, 1, 1)',
  },

  '100%': {
    transformOrigin: '50% 0%',
    transform: 'scale3d(1, 0.045, 1)',
  },
});

export const Anchor = styled(Clickable, {
  color: '$interactive-default',
  fontWeigth: '$medium',
  underline: 'none',
  d: 'inline-block',
  position: 'relative',
  pl: '$4',
  pr: '$5',
  transition: 'all cubic-bezier(0, 0, 0.2, 1) 700ms',
  transform: 'scale(1)',
  animationDirection: 'alternate-reverse',

  '&:after, &:before': {
    content: '',
    bg: '$action-primary-default',
    d: 'inline-block',
    w: '$5',
    h: '1.3px',
    position: 'absolute',
    top: '$3',
    transition: 'all cubic-bezier(0, 0, 0.2, 1) 700ms',
    transform: 'scale(0.85)',
  },

  '&:after': {
    ml: '$3',
  },

  '&:before': {
    ml: '-$7',
  },

  '&:hover': {
    color: '$interactive-hover',

    '&:before, &:after': {
      h: '1px',
      bg: '$action-primary-subdued',
      transform: 'scale(1.25)',
      transition: 'all cubic-bezier(0, 0, 0.2, 1) 700ms',
      animationDirection: 'alternate-reverse',
    },
  },
});

export const AnchorInline = styled(Clickable, {
  fontWeigth: '$medium',
  d: 'inline-block',
  position: 'relative',
  transition: 'all cubic-bezier(0, 0, 0.2, 1) 700ms',
  whiteSpace: 'nowrap',

  '&:hover': {
    color: '$interactive-hover',
  },

  variants: {
    appearance: {
      inline: {
        color: '$interactive-default',

        '&:before, &:after': {
          content: '',
          w: '$full',
          h: '1px',
          position: 'absolute',
          left: 0,
          pointerEvents: 'none',
          bg: 'currentColor',
          top: '100%',
        },

        '&:before': {
          opacity: 0,
          h: '3px',
        },

        '&:after': {
          opacity: 0,
          transitionProperty: 'opacity',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms',
        },

        '&:hover': {
          '&:before': {
            opacity: 1,
            animation: `${lineUp} 0.3s ease forwards`,
          },

          '&:after': {
            opacity: 1,
            transitionDelay: '300ms',
          },
        },
      },

      'page-header': {
        color: '$text-default',
        fontSize: '$md',
        fontWeight: '$medium',
        textDecoration: 'none',
        opacity: 0.4,
        borderRadius: 2,

        outline: 'none',
        p: '$0',
        m: '$0',
        transitionProperty: 'opacity',
        transitionDuration: 300,

        '&:hover': {
          opacity: 1,
        },

        '&:focus': {
          outlineStyle: 'dashed',
          outlineOffset: 6,
          outlineWidth: 2,
          outlineColor: '$action-transparent-transparent',
          opacity: 1,
        },

        '@bp-md': {
          fontSize: '$lg',
        },
      },
    },

    isActive: {
      true: {},
    },
  },

  compoundVariants: [
    {
      isActive: true,
      appearance: 'page-header',
      css: {
        opacity: 1,
      },
    },
  ],

  defaultVariants: {
    appearance: 'inline',
  },
});
