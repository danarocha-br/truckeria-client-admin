import { keyframes, styled } from '../../../stitches.config';
import { DialogBackdrop, Dialog } from 'reakit';
import { transparentize, darken } from 'polished';

import { colors } from 'styles/tokens';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 0.5 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const PanelOverlay = styled(DialogBackdrop, {
  backgroundColor: '$neutral900',
  position: 'fixed',
  inset: 0,

  '@media (prefers-reduced-motion: no-preference)': {
    ' &[data-enter]': {
      animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
});

export const Container = styled(Dialog, {
  all: 'unset',
  transform: 'none',
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,

  width: 440,
  height: '$full',

  color: '$text-default',

  [`.dark-theme &`]: {
    bg: darken(0.065, colors.neutral[800]),
  },
  [`.light-theme &`]: {
    bg: '$background-default',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    ' &[data-enter]': {
      animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },

  variants: {
    isActive: {
      true: {},
    },
  },
});

export const PanelTitle = styled('header', {
  p: '$4',

  [`.dark-theme &`]: {
    borderBottom: '2px solid',
    borderColor: transparentize(0.3, colors.neutral[700]),
    bg: transparentize(0.3, colors.neutral[700]),
  },

  [`.light-theme &`]: {
    color: '$text-onInteractive',
    bg: colors.neutral[500],
  },
});

export const PanelContent = styled('div', {
  px: '$4',
  py: '$6',
  pb: '$12',
});

export const PanelFooter = styled('footer', {
  w: 440,
  p: '$4',
  position: 'fixed',
  bottom: '$0',
  borderTop: `2px solid ${transparentize(0.5, colors.neutral[700])}`,

  [`.light-theme &`]: {
    borderColor: '$background-subdued',
  },

  d: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: '$4',
});
