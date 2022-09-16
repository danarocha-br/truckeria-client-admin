import { keyframes, styled } from '../../../stitches.config';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

const scaleDown = keyframes({
  from: { w: '$full', h: '$full' },
  to: { w: '$3', h: '$3' },
});

export const Radio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  bg: '$form-default',
  w: '$6',
  h: '$6',
  borderRadius: '$round',
  transition: '$slow',

  '&:hover:not([disabled])': {
    boxShadow: '0 0 0 2px $colors$surface-base-pressed',
  },
  '&:focus': { boxShadow: '0 0 0 2px $colors$action-primary-default' },

  '&[data-disabled]': {
    opacity: 0.5,
  },
});

export const Indicator = styled(RadioGroupPrimitive.Indicator, {
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  w: '$full',
  h: '$full',
  position: 'relative',
  transition: '$slow',

  '&::after': {
    content: '""',
    d: 'block',
    borderRadius: '$round',
    bg: '$action-primary-default',
    transition: '$slow',
  },

  '&[data-state="checked"]': {
    '&::after': {
      animation: `${scaleDown} 400ms ease`,
      w: '$3',
      h: '$3',
    },
  },
});

export const RadioGroupRoot = styled(RadioGroupPrimitive.Root, {
  d: 'flex',
  flexDirection: 'column',
  gap: '$4',
  w: '$full',
});

export const Label = styled('label', {
  color: '$text-default',
  lineHeight: 1,
  userSelect: 'none',

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const Fieldset = styled('fieldset', {
  all: 'unset',
  w: '$full',
});
export const Legend = styled('legend', {});
