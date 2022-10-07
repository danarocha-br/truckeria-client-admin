import { styled } from '../../../stitches.config';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { transparentize } from 'polished';
import { colors } from 'styles/tokens';

export const TabRoot = styled(TabsPrimitive.Root, {
  d: 'flex',
  flexDirection: 'column',
  w: '$full',
});

export const TabList = styled(TabsPrimitive.List, {
  d: 'flex',
  flexShrink: 0,
});

export const TabTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  color: '$text-default',
  opacity: 0.6,
  fontFamily: 'inherit',
  py: '$2',
  px: '$7',
  height: 32,
  w: 120,
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  userSelect: 'none',
  transition: '$base',

  [`.dark-theme &`]: {
    bg: transparentize(0.24, colors.neutral[800]),
    borderLeft: `2px solid ${transparentize(0.24, colors.neutral[800])}`,

    '&:hover': { color: '$text-warning' },

    '&:focus': {
      color: '$text-warning',
      position: 'relative',
      boxShadow: `0 -3px 0 3px $colors$surface-base-default`,
    },
  },

  [`.light-theme &`]: {
    bg: transparentize(0.5, colors.neutral[300]),

    '&:hover': {
      bg: transparentize(0.2, colors.neutral[300]),
    },
    '&:focus': {
      position: 'relative',
      boxShadow: `0 -3px 0 3px ${transparentize(0.2, colors.neutral[400])},`,
    },
  },

  '&[data-state="active"]': {
    opacity: 1,
    borderLeftWidth: 0,
  },
});

export const TabContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  outline: 'none',
});
