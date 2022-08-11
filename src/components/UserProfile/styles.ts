import { styled } from '../../../stitches.config';

export const Container = styled('button', {
  all: 'unset',

  color: '$text-default',
  fontSize: '$sm',
  p: '$3',
  ml: '$-4',

  borderRadius: '$xs',
  transition: '$base',
  border: '2px dashed $transparent',

  d: 'flex',
  alignItems: 'center',
  gap: '$5',

  '& > svg': {
    d: 'none',
  },

  '&:hover': {
    borderColor: '$background-subdued',
    gap: '$4',

    '& > svg': {
      d: 'block',
      opacity: 0.4,
    },
  },
});
