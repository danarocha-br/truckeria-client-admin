import { styled, keyframes } from '../../../stitches.config';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(4px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-4px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-4px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(4px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const contentStyles = {
  minWidth: 180,
  bg: '$surface-base-subdued',
  borderRadius: '$xs',
  p: '$2',
  position: 'relative',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
};

export const Content = styled(DropdownMenuPrimitive.Content, {
  ...contentStyles,
});

export const SubContent = styled(DropdownMenuPrimitive.SubContent, {
  ...contentStyles,
});

export const Arrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: '$surface-base-subdued',
});

const itemStyles = {
  all: 'unset',
  color: '$text-default',
  fontSize: '$sm',
  lineHeight: 1,
  borderRadius: '$xs',

  d: 'flex',
  alignItems: 'center',
  gap: '$4',

  p: '0 8px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$text-lighter',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    bg: '$surface-base-default',
    color: '$text-onBrand',
  },
};

export const DropdownItem = styled(DropdownMenuPrimitive.Item, {
  ...itemStyles,
  h: 38,
});
export const DropdownCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, {
  ...itemStyles,
});
export const DropdownRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...itemStyles,
});

export const DropdownSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  '&[data-state="open"]': {
    bg: '$action-primary-transparent',
    color: '$text-default',
  },
  ...itemStyles,
});

export const DropdownLabel = styled(DropdownMenuPrimitive.Label, {
  color: '$text-subdued',
  fontSize: '$xs',
  lineHeight: '25px',
  px: '$2',
});

export const DropdownSeparator = styled(DropdownMenuPrimitive.Separator, {
  bg: '$surface-base-default',
  h: 1,
  my: '$2',
  position: 'relative',
  left: -12,
  w: 'calc(100% + 20px)',
});

export const DropdownItemIndicator = styled(
  DropdownMenuPrimitive.ItemIndicator,
  {
    // position: 'absolute',
    // right: 0,
    w: 25,

    d: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
);

export const DropdownRightSlot = styled('div', {
  color: '$text-subdued',
  ml: 'auto',
  pl: 20,
  opacity: 0.8,

  '[data-highlighted] > &': { color: '$text-onBrand' },
  '[data-disabled] &': { color: '$text-subdued', opacity: 0.5 },
});

export const DropdownMenuRadioGroup = styled(
  DropdownMenuPrimitive.DropdownMenuRadioGroup,
  {}
);

export const DropdownMenuSub = styled(DropdownMenuPrimitive.Sub, {});
