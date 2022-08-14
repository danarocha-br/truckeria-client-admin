import { styled } from '../../../stitches.config';
import { Button } from 'reakit/Button';

export const Container = styled(Button, {
  color: '$text-onInteractive',
  fontWeight: '$semibold',
  whiteSpace: 'nowrap',
  borderRadius: '$md',
  border: '2px solid $transparent',
  w: 'auto',

  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  cursor: 'pointer',

  transition: 'all 0.3s ease',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },

  '&:active': {
    transform: 'scale(0.99)',
  },

  '&:focus': {
    outline: 'none',
  },

  variants: {
    fullWidth: {
      true: {
        width: '$full',
      },
    },

    variant: {
      primary: {
        bg: '$action-primary-default',
        color: '$text-onInteractive',

        '&:hover': {
          bg: '$action-primary-hover',
        },
        '&:focus': {
          bg: '$action-primary-hover',
          boxShadow: `0 0 0 1px $colors$surface-base-default,
        0 0 0 calc(2px + 2px) $colors$action-primary-transparent`,
          borderColor: '$surface-base-default',
        },
        '&:active': {
          bg: '$action-primary-pressed',
        },
        '&:disabled': {
          bg: '$action-primary-disabled',
        },
      },

      success: {
        bg: '$action-success-default',
        color: '$text-onInteractive',

        '&:hover': {
          bg: '$action-success-hover',
        },
        '&:focus': {
          bg: '$action-success-hover',
          boxShadow: `0 0 0 1px $colors$surface-base-default,
        0 0 0 calc(2px + 2px) $colors$action-success-transparent`,
          borderColor: '$surface-base-default',
        },
        '&:active': {
          bg: '$action-success-pressed',
        },
        '&:disabled': {
          bg: '$action-success-disabled',
        },
      },

      flat: {
        bg: '$action-transparent-default',
        color: '$text-subdued',

        '&:hover': {
          bg: '$action-transparent-hover',
        },
        '&:focus': {
          boxShadow: `0 0 0 1px $colors$surface-base-default,
        0 0 0 calc(2px + 2px) $colors$action-transparent-transparent`,
        },
        '&:active': {
          bg: '$action-transparent-pressed',
        },
        '&:disabled': {
          bg: '$action-transparent-disabled',
        },
      },

      icon: {
        bg: '$action-transparent-default',
        color: '$text-subdued',

        '&:hover': {
          bg: '$action-transparent-hover',
        },
        '&:focus': {
          boxShadow: `0 0 0 1px $colors$surface-base-default,
        0 0 0 calc(2px + 2px) $colors$action-transparent-transparent`,
        },
        '&:active': {
          bg: '$action-transparent-pressed',
        },
        '&:disabled': {
          bg: '$action-transparent-disabled',
        },
      },
    },

    size: {
      sm: {
        fontSize: '$sm',
        borderRadius: '$xs',
        h: '$9',
        py: '$2',
        px: '$8',
      },

      md: {
        fontSize: '1.14rem',
        borderRadius: '$xs',
        h: '$11',
        py: '$5',
        px: '$10',
      },

      lg: {
        fontSize: '$lg',
        lineHeight: '$6',
        borderRadius: '$xs',
        h: '$12',
        py: '$5',
        px: '$11',
      },
    },

    hasIcon: {
      true: {
        '& svg': {
          mr: '$7',
          ml: '-$4',
          w: '$6',
          h: '$6',
        },
      },
    },

    loading: {
      true: {
        opacity: 0.7,
      },
    },
  },

  compoundVariants: [
    {
      size: 'sm',
      variant: 'icon',
      css: {
        w: 'unset',
        h: 'unset',
        px: '$2',
      },
    },

    {
      size: 'md',
      variant: 'icon',
      css: {
        w: 'unset',
        h: 'unset',
        px: '$4',
      },
    },

    {
      size: 'lg',
      variant: 'icon',
      css: {
        w: 'unset',
        h: 'unset',
        px: '$5',
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    hasIcon: false,
    loading: false,
  },
});

export const LoadingWrapper = styled('i', {
  ml: '$6',
  position: 'absolute',
  right: '$4',
});
