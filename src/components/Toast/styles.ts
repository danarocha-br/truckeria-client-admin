import { styled, keyframes, lightTheme } from '../../../stitches.config';
import {
  Viewport,
  Root,
  Description,
  Action,
  Provider,
  Close,
  Title,
} from '@radix-ui/react-toast';

const VIEWPORT_PADDING = 24;

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

export const ToastViewport = styled(Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: '$6',
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 9999,
  outline: 'none',
});

export const Toast = styled(Root, {
  borderRadius: '$xs',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$4',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '$4',
  alignItems: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in forwards`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out forwards`,
    },
  },

  variants: {
    variant: {
      neutral: {
        bg: '$surface-base-subdued',
      },

      info: {
        bg: '$surface-info-default',
      },

      warning: {
        bg: '$surface-warning-disabled',
        [`.${lightTheme} &`]: {
          bg: '$surface-warning-default',
        },
      },

      success: {
        bg: '$surface-success-pressed',
        [`.${lightTheme} &`]: {
          bg: '$surface-success-hover',
        },
      },

      danger: {
        bg: '$surface-danger-disabled',
      },
    },
  },

  defaultVariants: {
    variant: 'neutral',
  },
});

export const ToastTitle = styled(Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: '$semibold',
  color: '$text-default',
  d: 'flex',
  gap: '$2',
  alignItems: 'center',

  variants: {
    variant: {
      neutral: {
        color: '$text-onInteractive',
        [`.${lightTheme} &`]: {
          color: '$text-contrast',
        },
      },

      info: {
        color: '$text-onInteractive',
      },

      warning: {
        color: '$text-contrast',
      },

      success: {
        color: '$text-onInteractive',
      },

      danger: {
        color: '$text-onInteractive',
      },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});

export const ToastDescription = styled(Description, {
  gridArea: 'description',
  margin: 0,
  color: '$text-lighter',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: 1.3,

  variants: {
    variant: {
      neutral: {
        color: '$text-onInteractive',
        [`.${lightTheme} &`]: {
          color: '$text-contrast',
        },
      },

      info: {
        color: '$text-onInteractive',
      },

      warning: {
        color: '$text-contrast',
      },

      success: {
        color: '$text-onInteractive',
      },

      danger: {
        color: '$text-onInteractive',
      },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});

export const ToastAction = styled(Action, {
  gridArea: 'action',
});

export const ToastProvider = Provider;
export const ToastClose = Close;
