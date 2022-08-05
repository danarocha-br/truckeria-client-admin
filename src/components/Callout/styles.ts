import { lightTheme, styled } from '../../../stitches.config';

export const Header = styled('header', {
  fontSize: '$base',
  fontWeight: '$semibold',
  borderTopRightRadius: '$xs',

  d: 'flex',
  alignItems: 'center',
  gap: '$2',
  w: '$full',

  py: '$2',
  px: '$3',

  '& h5': {
    all: 'unset',
  },

  variants: {
    variant: {
      info: {
        color: '$text-contrast',
        bg: '$interactive-default',

        [`.${lightTheme} &`]: {
          bg: '$yellow100',
        },
      },
      success: {
        color: '$text-onInteractive',
        bg: '$action-success-transparent',

        [`.${lightTheme} &`]: {
          color: '$action-success-pressed',
        },
      },
      danger: {
        color: '$text-onInteractive',
        [`.${lightTheme} &`]: {
          color: '$surface-danger-pressed',
        },
        bg: '$surface-danger-transparent',
      },
      warning: {
        color: '$surface-warning-pressed',
        bg: '$surface-warning-transparent',
      },
    },
  },
  defaultVariants: {
    variant: 'info',
  },
});

export const Container = styled('div', {
  w: '$full',
  d: 'flex',

  borderRadius: '$xs',
  border: '1px solid',

  fontSize: '$sm !important',

  '& .callout__content': {
    pl: '$5',
    pr: '$4',
    pb: '$3',
  },

  variants: {
    variant: {
      info: {
        borderColor: '$yellow300',
        [`.${lightTheme} &`]: {
          borderColor: '$yellow100',
        },
      },
      success: {
        borderColor: '$action-success-transparent',
      },
      danger: {
        borderColor: '$surface-danger-transparent',
      },
      warning: {
        borderColor: '$surface-warning-default',
      },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});

export const Marker = styled('div', {
  w: '$1',
  h: 'auto',
  borderTopLeftRadius: '$md',
  borderBottomLeftRadius: '$md',

  variants: {
    variant: {
      info: {
        bg: '$yellow300',
        [`.${lightTheme} &`]: {
          bg: '$yellow300',
        },
      },
      success: {
        bg: '$action-success-default',
      },
      danger: {
        bg: '$surface-danger-default',
      },
      warning: {
        bg: '$surface-warning-default',
      },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});
