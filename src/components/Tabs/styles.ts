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
  bg: transparentize(0.24, colors.neutral[800]),
  py: '$2',
  px: '$7',
  height: 32,

  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  userSelect: 'none',
  transition: '$base',

  '&:hover': { color: '$text-warning' },
  '&[data-state="active"]': {
    opacity: 1,
  },
  '&:focus': {
    color: '$text-warning',
    position: 'relative',
    boxShadow: `0 -3px 0 3px $colors$surface-base-default`,
  },
});

export const TabContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  outline: 'none',
});
