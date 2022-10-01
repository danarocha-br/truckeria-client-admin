import { keyframes, styled } from '../../../stitches.config';
import { DialogBackdrop, Dialog } from 'reakit';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 0.95 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const PanelOverlay = styled(DialogBackdrop, {
  backgroundColor: '$neutral900',
  position: 'fixed',
  inset: 0,
  opacity: 0.95,

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const Container = styled(Dialog, {
  all: 'unset',
  position: 'fixed',

  top: 20,
  bottom: 0,
  left: 0,
  right: 0,

  color: '$text-default',
  bg: '$background-subdued',
  boxShadow:
    'hsl(206 22% 7% / 100%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  '@bp-md': {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    w: '90vw',
    maxWidth: '$full',

    h: 'auto',
    maxHeight: '90vh',
    borderRadius: '$md',
    overflow: 'hidden',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '@bp-md': {
      animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },

  variants: {
    size: {
      sm: {
        w: '$full',

        '@bp-md': {
          w: '40vw',
        },
      },
      md: {
        w: '$full',
        '@bp-md': {
          w: '60vw',
        },
      },
      lg: {
        w: '100vw',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const PanelTitle = styled('header', {
  p: '$4',
  borderBottom: '2px solid',
  borderColor: '$surface-base-default',
  d: 'inline-flex',
});

export const PanelContent = styled('div', {
  px: '$4',
  py: '$6',
  pb: '$12',
});

export const PanelFooter = styled('footer', {
  bg: '$background-subdued',
  p: '$4',
  position: 'fixed',
  bottom: '$0',
  borderTop: `2px solid`,
  borderColor: '$surface-base-default',
  borderBottomLeftRadius: '$md',
  borderBottomRightRadius: '$md',

  d: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: '$4',

  zIndex: 1,

  variants: {
    size: {
      sm: {
        w: '100vw',
        '@bp-md': {
          w: '40vw',
        },
      },
      md: {
        w: '100vw',
        '@bp-md': {
          w: '60vw',
        },
      },
      lg: {
        w: '100vw',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
