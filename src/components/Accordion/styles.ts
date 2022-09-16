import { keyframes, styled } from '../../../stitches.config';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const AccordionRoot = styled(AccordionPrimitive.Root, {
  borderRadius: '$xs',
  w: '$full',
  boxShadow: `0 0 0 2px $colors$action-transparent-transparent`,
});

export const AccordionItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  mt: '$1',

  '&:first-child': {
    mt: '$0',
    borderTopLeftRadius: '$xs',
    borderTopRightRadius: '$xs',
  },

  '&:last-child': {
    borderBottomLeftRadius: '$xs',
    borderBottomRightRadius: '$xs',
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px $colors$action-transparent-transparent`,
  },
});

export const AccordionHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  d: 'flex',
});

export const AccordionTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  fontSize: '$lg',
  fontWeight: '$medium',
  py: '$1',
  px: '$4',
  minHeight: 44,
  w: '$full',
  flex: 1,
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  lineHeight: 1,
  color: '$text-default',
  transition: '$slow',
  whiteSpace: 'nowrap',

  '&[data-state="closed"]': { bg: '$action-transparent-transparent' },
  '&[data-state="open"]': { bg: '$action-transparent-transparent' },
  '&:hover': { bg: '$surface-base-subdued' },

  '& .accordion__trigger': {
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    '[data-state=open] &': { transform: 'rotate(180deg)' },
  },
});

export const AccordionContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: 15,
  color: '$text-default',
  bg: '$action-transparent-pressed',
  p: '$4',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});
