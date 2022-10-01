import { styled, keyframes } from '../../../stitches.config';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

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

export const TooltipContent = styled(TooltipPrimitive.Content, {
  color: '$neutral900',
  fontSize: '$xs',
  lineHeight: '1.2rem',
  bg: '$neutral200',
  borderRadius: '$xs',
  py: '$2',
  px: '$3',
  maxWidth: 300,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',

  d: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$3',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',

    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$transparent',
});

export const TooltipProvider = TooltipPrimitive.Provider;
export const TooltipRoot = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const RightSlot = styled('div', {
  color: '$neutral800',
  fontSize: '$xs',
  bg: '$neutral200',
  borderRadius: '$xs',
  p: '$1',
  opacity: 0.8,
});
