import { styled } from '../../../stitches.config';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export const SwitchRoot = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 50,
  height: 30,
  bg: '$transparent',
  borderRadius: '$pill',
  position: 'relative',
  boxShadow: '0px 0px 0px 3px $colors$form-subdued',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  '&:before': {
    content: '',
    w: 26,
    h: 30,
    bg: '$form-subdued',
    position: 'absolute',
    top: '$0',
    borderTopLeftRadius: 'inherit',
    borderBottomLeftRadius: 'inherit',

    transitionProperty: 'background-color',
    transitionDuration: '200ms',
    transitionDelay: '200ms',
    willChange: 'background-color',
  },

  '&[data-state="checked"]': {
    '&:before': {
      content: '',
      w: 29,
      h: 34,
      bg: '$form-focus',
      position: 'absolute',
      top: -2,
      right: -3,
      borderTopRightRadius: 'inherit',
      borderBottomRightRadius: 'inherit',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },

  '&[data-disabled]': {
    bg: '$transparent',
    opacity: 0.7,
    outlineColor: '$form-subdued',
    outlineOffset: 3,
    outlineStyle: 'dashed',
    outlineWidth: 2.5,
    boxShadow: 'none',
  },

  variants: {
    hasError: {
      true: {
        boxShadow: '0px 0px 0px 2px $colors$form-error',

        '&:before, &[data-state="checked"]:before': {
          bg: '$surface-danger-disabled',
        },
      },
    },
  },

  defaultVariants: {
    hasError: false,
  },
});

export const SwitchThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  bg: '$white',
  opacity: 0.8,
  borderRadius: '$pill',
  boxShadow: `0px 4px 20px rgba(10, 19, 39, 0.1), 0px 4px 12px rgba(10, 19, 39, 0.1), 0px 1px 1px rgba(10, 19, 39, 0.15)`,
  transition: 'transform, opacity, 100ms',
  transform: 'translateX(3px)',
  willChange: 'transform',
  position: 'relative',

  '&[data-state="checked"]': {
    opacity: 1,
    transform: 'translateX(28px) translateY(-1px)',
  },
});

export const Label = styled('label', {
  d: 'flex',
  alignItems: 'center',
  gap: '$5',
});
