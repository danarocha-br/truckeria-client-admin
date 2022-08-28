import { styled } from '../../../stitches.config';
import ReactSelect from 'react-select';

const inputBorder = {
  border: '8px solid',
  borderTopWidth: '2.2em',
};

const animateIcon = {
  transform: 'translateZ(1px)',
};

const hasValueState = {
  '&  label:before': {
    ...inputBorder,
    borderTopWidth: ' 1.8em !important',
    borderColor: '$form-subdued',
  },

  '& label > .c-input__label': {
    transform: 'translate3d(0px, -25px, 0) scale(0.88)',
    transformOrigin: '0% 50%',
    fontWeight: '$regular',
  },

  '& label > svg.c-input__icon': {
    ...animateIcon,
    transform: 'translate3d(-0.4em, -25px, 0) scale3d(0.85, 0.85, 1)',
  },
  '& label > svg.c-input__error-icon': {
    ...animateIcon,
    transform: 'translate3d(6px, -25px, 0) scale3d(0.85, 0.85, 1)',
    color: '$form-error',
  },
  '& .c-input__dropdown-indicator': {
    transform: 'translate3d(0px, 0px, 0) scale3d(1.2, 1.2, 1.2)',
  },
};

export const Container = styled('div', {
  border: '1px solid',
  borderRadius: '$xs !important',
  borderColor: '$form-default',

  position: 'relative',

  d: 'flex',
  alignItems: 'center',

  w: '$full',
  minWidth: '15rem',
  minHeight: '$11',
  height: 'auto',

  transition: 'all cubic-bezier(0.4, 0, 0.2, 1) 150ms',

  '&:hover': {
    borderColor: '$form-focus',
  },

  '& .c-input__dropdown-indicator': {
    transition: 'all cubic-bezier(0.4, 0, 0.2, 1) 150ms',
    transform: 'translate3d(0px, -6px, 0) scale3d(1.2, 1.2, 1.2)',
  },

  variants: {
    hasIcon: {
      true: {
        '& label > .c-input__label': {
          transform: 'translate3d(-6px, -25px, 0) scale(0.88)',
          transformOrigin: '0% 50%',
          fontWeight: '$regular',
        },
      },
    },
    isFocused: {
      true: {
        ...hasValueState,
        // borderColor: '$form-focus',

        '& label > svg.c-input__icon': {
          color: '$form-focus',
        },
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
    hasValue: {
      true: { ...hasValueState },
    },
  },

  compoundVariants: [
    {
      readOnly: true,
      css: {
        borderColor: '$form-default',
      },
    },
  ],

  defaultVariants: {
    hasError: false,
    readOnly: false,
    isDisabled: false,
    isLoading: false,
    isFocused: false,
  },
});

export const selectInputStyles = {
  w: '$full',
  h: 'auto',
  border: 'none',
  borderRadius: '$xs',
  position: 'absolute !important',
  zIndex: 1,
  pointerEvents: 'auto',

  '& .c-select': {
    '&__control': {
      color: '$text-default',
      fontSize: '$base',
      bg: '$transparent !important',
      p: '1.24em 0.7em 0',
      d: 'flex',
      border: 'none',
      appearance: 'none',
      w: '$full',
      h: '$full',
      boxShadow: 'none',

      '&--is-disabled': {
        cursor: 'not-allowed !important',
        opacity: 0.4,
      },
    },

    '&:focus': {
      outline: 'none',
    },

    '&--is-focused': {
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
    },

    '&__menu': {
      fontWeight: '$medium',
      bg: '$surface-base-subdued',
      borderRadius: '$xs',
      mt: '$5',
      zIndex: '1999 !important',

      '&-list': {
        p: 0,
        m: 0,
      },
    },

    '&--menu-is-open': {
      zIndex: 1999,
    },

    '&__option': {
      '&:hover': {
        bg: '$blue300',
      },

      '&--is-focused, &--is-selected ': {
        bg: '$blue300',
      },

      '&:first-child': {
        borderTopLeftRadius: '$xs',
        borderTopRightRadius: '$xs',
      },

      '&:last-child': {
        borderBottomLeftRadius: '$xs',
        borderBottomRightRadius: '$xs',
      },
    },

    '&__indicator-separator': {
      d: 'none',
    },

    '&__single-value': {
      color: '$text-default',
      whiteSpace: 'pre-line',
      overflow: 'hidden',
      d: 'webkit-box',
      '-webkitBoxOrient': 'vertical',
      '-webkit-line-clamp': 2,
    },

    '&__input-container': {
      color: '$text-default',
    },

    '&__multi-value': {
      all: 'unset',

      '&__label': {
        color: '$text-subdued',
      },
    },

    '&__value-container--is-multi': {
      flexWrap: 'nowrap',
      gap: '4px',
    },

    variants: {
      hasFocus: {
        true: {
          ...hasValueState,
          borderColor: '$form-focus',
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

          '& label > svg.c-input__icon': {
            ...animateIcon,
            color: '$text-default',
            transform: 'translate3d(-0.6em, -1.5em, 0) scale3d(0.85, 0.85, 1)',
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
  },
};

export const SelectInput = styled(ReactSelect, { ...selectInputStyles });

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
  minHeight: '$11',
  height: 'auto',

  '-webkitTouchCallout': 'none',
  userSelect: 'none',

  '&:before': {
    content: '',
    borderColor: '$form-default',
    borderStyle: 'solid',
    borderRadius: '$xs',
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
    position: 'absolute',
    top: '1.8rem',
    left: '$5',
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
        pointerEvents: 'none',
        opacity: 0.4,
      },
    },

    hasFocus: {
      true: {
        ...hasValueState,

        '& > i': {
          position: 'absolute',
          right: 8,
          top: 6,
          transform: 'scale(0.75)',
        },
      },
    },
    hasValue: {
      true: {
        ...hasValueState,
        '& > i': {
          position: 'absolute',
          right: 8,
          top: 6,
          transform: 'scale(0.75)',
        },
      },
    },

    hasPlaceholder: {
      ...hasValueState,
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
    hasIcon: false,
    hasPlaceholder: false,
    hasFocus: false,
  },
});
