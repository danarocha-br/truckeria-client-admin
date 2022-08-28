import { styled } from '../../../stitches.config';

const inputBorder = {
  border: '8px solid',
  borderTopWidth: '2.2em',
};

const animateIcon = {
  transform: 'translateZ(1px)',
};

export const Container = styled('div', {
  border: '1px solid',
  borderRadius: '$xs',
  borderColor: '$form-default',

  position: 'relative',
  overflow: 'hidden',

  d: 'flex',
  alignItems: 'center',
  verticalAlign: 'top',

  w: '$full',
  minWidth: '15rem',
  h: '$14',
  minHeight: '$14',

  transition: 'all cubic-bezier(0.4, 0, 0.2, 1) 150ms',

  '&:hover': {
    borderColor: '$form-focus',
  },

  variants: {
    hasError: {
      true: {
        borderColor: '$form-error',
      },
    },
    hasFocus: {
      true: {
        borderColor: '$form-focus',

        '&  label > svg.c-input__icon': {
          color: '$form-focus',
        },
      },
    },
    isDisabled: {
      true: {
        borderStyle: 'dashed',
        borderColor: '$form-default',
        bg: '$form-disabled',
        //TODO fix issue with adding the disabled prop correctly on the input
        pointerEvents: 'none',

        '&:hover': {
          borderColor: '$form-default',
        },
      },
    },
    isLoading: {
      true: {
        borderStyle: 'dashed',
        borderColor: '$form-default',
        bg: '$form-disabled',
        cursor: 'not-allowed',
        pointerEvents: 'none',

        '&:hover': {
          borderColor: '$form-default',
        },
      },
    },
    readOnly: {
      true: {
        userSelect: 'none',
        borderColor: '$transparent',
        transition: 'none',

        '&:hover': {
          borderColor: '$transparent',
        },

        '&:focus': {
          outline: 'none',
          borderColor: '$form-default',
        },

        '& label': {
          bg: '$form-subdued !important',
        },

        '& label > svg.c-input__icon': {
          ...animateIcon,
          transform:
            'translate3d(-5px, -20px, 0) scale3d(0.85, 0.85, 1) !important',
        },

        '& label > .c-input__label': {
          transform: 'translate3d(0px, -18px, 0) scale(0.88) !important',
          transformOrigin: '0% 50%',
          fontWeight: '$regular',
        },
      },
    },
  },

  compoundVariants: [
    {
      hasFocus: true,
      readOnly: true,
      css: {
        opacity: 1,

        '& label': {
          bg: 'none',

          '&:before': {
            transition: 'none',
          },
        },

        '&  label > svg.c-input__icon': {
          color: '$text-subdued',
        },
      },
    },
  ],

  defaultVariants: {
    hasError: false,
    hasFocus: false,
    readOnly: false,
    isDisabled: false,
    isLoading: false,
  },
});

export const Textarea = styled('textarea', {
  color: '$text-default !important',
  bg: '$transparent',
  border: 'none',
  appearance: 'none',
  // mt: '5rem',
  p: '0.7rem 1.4rem 0',
  h: 'calc(100% - 42px)',
  w: 'calc(100% - 9px)',

  resize: 'none',

  position: 'absolute',
  top: '$7',
  fontSize: '$base',

  d: 'flex',
  zIndex: 1,

  '&:focus': {
    outline: 'none',
  },

  variants: {
    hasIcon: {
      true: {
        '& + label > .c-input__label': {
          transform: 'translate3d(-6px, -25px, 0) scale(0.88)',
          transformOrigin: '0% 50%',
          fontWeight: '$regular',
        },
      },
    },

    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.4,

        '& + label': {
          opacity: 0.6,
        },

        '& + label > svg.c-input__icon': {
          color: '$text-default',
        },
      },
    },
  },

  defaultVariants: {
    hasIcon: false,
    disabled: false,
  },
});

export const Label = styled('label', {
  color: '$text-default',
  bg: '$form-default',
  fontWeight: '$medium',
  textAlign: 'left',
  pt: '$2',
  px: '$3',
  borderRadius: '$xs',

  d: 'flex',
  alignItems: 'center',
  w: '$full',
  h: '$full',

  '-webkitTouchCallout': 'none',
  userSelect: 'none',

  '&:before': {
    content: '',
    ...inputBorder,
    borderColor: '$form-subdued',
    borderStyle: 'solid',
    borderRadius: '$xs',
    position: 'absolute',
    top: '$0',
    left: '$0',
    right: '$0',
    w: '$full',
    h: '$full',
    transition: 'border-width 0.3s, border-color 0.5s',
    zIndex: 0,
    userSelect: 'none',
    borderTopWidth: ' 1.85em !important',
  },

  '& .c-input__label': {
    d: 'flex',
    w: '$full',
    position: 'absolute',
    left: '$5',
    top: '1.84rem',
    transition: 'transform',
    transitionDuration: '300ms',
    textRendering: 'geometricPrecision',
    transform: 'translate3d(-5px, -25px, 0) scale(0.88) !important',
    transformOrigin: '0% 50%',
    fontWeight: '$regular',
  },

  '& svg.c-input__icon': {
    position: 'absolute',
    top: '1.8rem',
    ml: '$1',
    transition: 'transform',
    transitionDuration: '300ms',
    ...animateIcon,
    transform:
      'translate3d(-0.4em, -25px, 0) scale3d(0.85, 0.85, 1) !important',
  },

  '& svg.c-input__error-icon': {
    position: 'absolute',
    top: '1.75rem',
    ml: '$1',
    transition: 'transform',
    transitionDuration: '300ms',
    ...animateIcon,
    transform: 'translate3d(6px, -25px, 0) scale3d(0.85, 0.85, 1) !important',
    color: '$form-error',
  },

  '& input:disabled + label:before': {
    borderColor: '$form-error',
  },

  '& > i ': {
    transform: 'scale(0.9)',
  },

  variants: {
    hasIcon: {
      true: {
        '& .c-input__label': {
          left: '$9',
        },
      },
    },

    isDisabled: {
      true: {
        userSelect: 'none',
      },
    },

    hasPlaceholder: {
      true: {
        '& > i': {
          mt: '$3',
        },
      },
    },
  },

  defaultVariants: {
    isDisabled: false,
    hasIcon: false,
    hasPlaceholder: false,
  },
});
