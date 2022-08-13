import { darkTheme, styled } from '../../../stitches.config';
import { Button } from 'reakit/Button';

export const Container = styled(Button, {
  color: '$text-default',
  fontSize: '$sm',
  p: '$3',
  w: '$full',
  mr: '$3',
  bg: '$transparent',
  position: 'relative',

  [`.${darkTheme} &`]: {
    backgroundColor: '$blue',
    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
  },

  borderRadius: '$xs',
  transition: '$base',
  border: '2px dashed $transparent',

  d: 'flex',
  alignItems: 'center',
  gap: '$5',

  '& > svg': {
    d: 'none',
    position: 'absolute',
    right: '$4',
  },

  '&:hover': {
    borderColor: '$background-subdued',
    gap: '$4',

    '& > svg': {
      d: 'block',
      opacity: 0.4,
    },
  },

  '&:focus': {
    borderColor: '$action-transparent-transparent',

    '& > svg': {
      d: 'block',
      opacity: 0.4,
    },
  },
});
