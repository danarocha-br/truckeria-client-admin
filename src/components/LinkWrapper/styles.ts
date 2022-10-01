import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  d: 'flex',
  alignItems: 'center',
  gap: '$3',
  bg: '$transparent',
  transition: '$base',

  variants: {
    isHovered: {
      true: {
        color: '$text-warning',
      },
    },
  },

  defaultVariants: {
    isHovered: false,
  },
});
