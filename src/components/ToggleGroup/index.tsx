import { styled } from '../../../stitches.config';
import { Root, Item } from '@radix-ui/react-toggle-group';

export const ToggleGroup = styled(Root, {
  display: 'inline-flex',
  borderRadius: 16,
  border: '3px solid $surface-base-subdued',
});

export const ToggleGroupItem = styled(Item, {
  all: 'unset',
  color: '$text-default',
  bg: '$surface-base-default',
  h: '$9',
  w: '$9',

  d: 'flex',
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',

  transition: '$base',

  '&:first-child': {
    ml: 0,
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
  },

  '&:last-child': {
    borderTopRightRadius: '12px',
    borderBottomRightRadius: '12px',
  },

  '&:hover': { bg: '$surface-base-hover' },

  '&[data-state=on]': {
    bg: '$surface-base-subdued',
    color: '$text-contrast',
  },

  '&:focus': {
    position: 'relative',
  },
});