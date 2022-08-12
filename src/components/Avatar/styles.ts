import { darkTheme, styled } from '../../../stitches.config';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const AvatarRoot = styled(AvatarPrimitive.Root, {
  bg: '$background-subdued',

  d: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',

  overflow: 'hidden',
  userSelect: 'none',

  borderRadius: '$round',

  variants: {
    size: {
      sm: {
        w: 24,
        h: 24,
      },
      md: {
        w: 36,
        h: 36,

        border: '3px solid $transparent',
        boxShadow: '0 0 0 1px $colors$yellow500',

        [`.${darkTheme} &`]: {
          boxShadow: '0 0 0 1px $colors$yellow300',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const AvatarImage = styled(AvatarPrimitive.Image, {
  w: '$full',
  h: '$full',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  color: '$text-contrast',
  fontWeight: '$medium',
  bg: '$yellow500',
  w: '$full',
  h: '$full',

  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  lineHeight: 1,

  [`.${darkTheme} &`]: {
    bg: '$yellow300',
  },

  variants: {
    size: {
      sm: {
        fontSize: '$xs',
      },
      md: {
        fontSize: '$base',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
