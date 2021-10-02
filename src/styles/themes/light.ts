import { darken, transparentize } from 'polished';

import tokens from '../../../tailwind.config.js';

export default {
  id: 'light',
  colors: {
    brand: tokens.theme.colors.brand,
    white: tokens.theme.colors.white,
  },

  background: {
    default: tokens.theme.colors.white,
    subdued: tokens.theme.colors.neutral[100],
  },

  surface: {
    base: {
      default: tokens.theme.colors.neutral[100],
      subdued: tokens.theme.colors.neutral[200],
      hover: darken(0.1, tokens.theme.colors.neutral[200]),
      pressed: darken(0.2, tokens.theme.colors.neutral[200]),
      disabled: transparentize(0.5, tokens.theme.colors.neutral[200]),
    },
    selected: {
      default: tokens.theme.colors.brand,
      subdued: tokens.theme.colors.yellow[500],
      hover: darken(0.1, tokens.theme.colors.brand),
      pressed: darken(0.2, tokens.theme.colors.brand),
      disabled: transparentize(0.5, tokens.theme.colors.brand),
    },
    success: {
      default: tokens.theme.colors.green[500],
      subdued: tokens.theme.colors.green[100],
      hover: darken(0.1, tokens.theme.colors.green[500]),
      pressed: darken(0.2, tokens.theme.colors.green[500]),
      disabled: transparentize(0.5, tokens.theme.colors.green[500]),
    },
    danger: {
      default: tokens.theme.colors.red[500],
      subdued: tokens.theme.colors.red[100],
      hover: darken(0.1, tokens.theme.colors.red[500]),
      pressed: darken(0.2, tokens.theme.colors.red[500]),
      disabled: transparentize(0.5, tokens.theme.colors.red[500]),
    },
    warning: {
      default: tokens.theme.colors.yellow[500],
      subdued: tokens.theme.colors.yellow[100],
      hover: darken(0.1, tokens.theme.colors.yellow[500]),
      pressed: darken(0.2, tokens.theme.colors.yellow[500]),
      disabled: transparentize(0.5, tokens.theme.colors.yellow[500]),
    },
  },

  form: {
    default: tokens.theme.colors.neutral[100],
    subdued: tokens.theme.colors.neutral[200],
    hover: tokens.theme.colors.brand,
    focus: tokens.theme.colors.brand,
    disabled: transparentize(0.7, tokens.theme.colors.neutral[100]),
  },

  action: {
    primary: {
      default: tokens.theme.colors.brand,
      subdued: tokens.theme.colors.yellow[500],
      hover: darken(0.1, tokens.theme.colors.brand),
      pressed: darken(0.2, tokens.theme.colors.brand),
      disabled: transparentize(0.4, tokens.theme.colors.brand),
    },
    success: {
      default: tokens.theme.colors.green[500],
      subdued: tokens.theme.colors.green[100],
      hover: darken(0.1, tokens.theme.colors.green[500]),
      pressed: darken(0.2, tokens.theme.colors.green[500]),
      disabled: transparentize(0.4, tokens.theme.colors.green[500]),
    },
  },

  interactive: {
    default: darken(0.2, tokens.theme.colors.yellow[300]),
    subdued: tokens.theme.colors.yellow[500],
    hover: tokens.theme.colors.brand,
    pressed: darken(0.1, tokens.theme.colors.yellow[500]),
    disabled: transparentize(0.5, tokens.theme.colors.yellow[300]),
  },

  text: {
    default: tokens.theme.colors.neutral[900],
    subdued: tokens.theme.colors.neutral[500],
    danger: tokens.theme.colors.red[500],
    warning: tokens.theme.colors.yellow[500],
    success: tokens.theme.colors.green[500],
    onBrand: tokens.theme.colors.neutral[800],
    onInteractive: tokens.theme.colors.white,
  },
} as const;
