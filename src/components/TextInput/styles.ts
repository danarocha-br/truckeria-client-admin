import { styled } from '../../../stitches.config';

const inputBorder = {
  border: '8px solid',
  borderTopWidth: '2.2em',
};

const animateIcon = {
  transform: 'translateZ(1px)',
};

const hasValueState = {
  '& + label:before': {
    ...inputBorder,
    borderTopWidth: ' 1.8em !important',
    borderColor: '$form-subdued',
  },

  '& + label > .c-input__label': {
    transform: 'translate3d(-38px, -1.5em, 0) scale3d(0.8, 0.8, 1)',
  },

  '& + label > svg.c-input__icon': {
    ...animateIcon,
    transform: 'translate3d(-0.6em, -1.5em, 0) scale3d(0.85, 0.85, 1)',
    color: '$form-focus',
  },
  '& + label > svg.c-input__error-icon': {
    ...animateIcon,
    transform: 'translate3d(0, -1.5em, 0) scale3d(0.85, 0.85, 1)',
    color: '$form-focus',
  },
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
  h: '$11',
  zIndex: 1,

  transition: 'all cubic-bezier(0.4, 0, 0.2, 1) 150ms',

  '&:hover': {
    borderColor: '$form-focus',
  },

  variants: {
    hasFocus: {
      true: {
        borderColor: '$form-focus',
      },
    },
    hasError: {
      true: {
        borderColor: '$form-error',
      },
    },
    isDisabled: {
      true: {
        borderStyle: 'dashed',
        borderColor: '$form-default',
        bg: '$form-disabled',
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
        bg: '$transparent',

        '&:hover': {
          borderColor: '$transparent',
        },

        '&:focus': {
          outline: 'none',
        },

        '& label': {
          pl: '$6',
          pt: '$4',
          bg: '$form-subdued',
        },
      },
    },
  },

  compoundVariants: [
    {
      hasFocus: true,
      readOnly: true,
      css: {
        borderColor: '$form-default',
      },
    },
  ],

  defaultVariants: {
    hasFocus: false,
    hasError: false,
    readOnly: false,
    isDisabled: false,
    isLoading: false,
  },
});

export const Input = styled('input', {
  color: '$text-default',
  bg: '$transparent',
  border: 'none',
  appearance: 'none',
  p: '1.24em 1.4em 0',

  position: 'absolute',
  fontSize: '$base',
  w: '$full',
  zIndex: 2,

  d: 'flex',

  '&:focus': {
    outline: 'none',
  },

  variants: {
    hasFocus: {
      true: {
        ...hasValueState,
      },
    },

    hasError: {
      true: {
        borderColor: '$form-error',
      },
    },

    hasPlaceholder: {
      true: {
        ...hasValueState,

        '& + label > svg.c-input__icon': {
          ...animateIcon,
          color: '$text-default',
          transform: 'translate3d(-0.6em, -1.5em, 0) scale3d(0.85, 0.85, 1)',
        },
      },
    },

    hasIcon: {
      true: {
        borderColor: '$form-error',
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
    hasFocus: false,
    hasError: false,
    hasIcon: false,
    hasPlaceholder: false,
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
    borderColor: '$form-default',
    borderStyle: 'solid',
    position: 'absolute',
    top: '$0',
    left: '$0',
    right: '$0',
    w: '$full',
    h: '$full',
    transition: 'border-width 0.3s, border-color 0.5s',
  },

  '& .c-input__label': {
    d: 'flex',
    w: '$full',
    position: 'relative',
    top: '$-1',
    ml: '$3',
    transition: 'transform',
    transitionDuration: '300ms',
    textRendering: 'geometricPrecision',
  },

  '& svg.c-input__icon': {
    ml: '$1',
    mt: -8,
    transition: 'transform',
    transitionDuration: '300ms',
  },

  '& svg.c-input__error-icon': {
    ml: '$1',
    mt: -8,
    transition: 'transform',
    transitionDuration: '300ms',
  },

  '& input:disabled + label:before': {
    borderColor: '$form-error',
  },

  '& > i ': {
    transform: 'scale(0.9)',
  },

  variants: {
    isDisabled: {
      true: {
        userSelect: 'none',
        pointerEvents: 'none',
      },
    },

    hasValue: {
      true: {
        '& > i': {
          position: 'absolute',
          right: 8,
          top: 6,
          transform: 'scale(0.75)',
        },
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
    hasValue: false,
  },
});
