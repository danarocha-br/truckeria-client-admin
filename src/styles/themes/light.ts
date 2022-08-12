import { darken, desaturate, transparentize } from 'polished';

import * as colors from '../tokens/colors';

export default {
  'background-default': colors.white,
  'background-subdued': colors.neutral[100],

  'surface-base-default': colors.neutral[100],
  'surface-base-subdued': colors.neutral[200],
  'surface-base-hover': darken(0.1, colors.neutral[200]),
  'surface-base-pressed': darken(0.2, colors.neutral[200]),
  'surface-base-disabled': desaturate(0.8, colors.neutral[200]),
  'surface-base-lighter': darken(0.03, colors.neutral[100]),

  'surface-selected-default': colors.brand,
  'surface-selected-subdued': colors.yellow[500],
  'surface-selected-hover': darken(0.1, colors.brand),
  'surface-selected-pressed': darken(0.2, colors.brand),
  'surface-selected-disabled': desaturate(0.8, colors.brand),

  'surface-success-default': colors.green[500],
  'surface-success-subdued': colors.green[100],
  'surface-success-hover': darken(0.1, colors.green[500]),
  'surface-success-pressed': darken(0.2, colors.green[500]),
  'surface-success-disabled': desaturate(0.5, colors.green[500]),

  'surface-danger-default': colors.red[500],
  'surface-danger-subdued': colors.red[100],
  'surface-danger-hover': darken(0.1, colors.red[500]),
  'surface-danger-pressed': darken(0.2, colors.red[500]),
  'surface-danger-disabled': transparentize(
    0.17,
    desaturate(0.35, colors.red[500])
  ),
  'surface-danger-transparent': transparentize(0.5, colors.red[300]),

  'surface-warning-default': colors.yellow[500],
  'surface-warning-subdued': colors.yellow[100],
  'surface-warning-hover': darken(0.1, colors.yellow[500]),
  'surface-warning-pressed': darken(0.2, colors.yellow[500]),
  'surface-warning-disabled': desaturate(0.5, colors.yellow[500]),

  'loading-default': colors.neutral[200],
  'loading-subdued': colors.neutral[100],

  'form-default': colors.neutral[100],
  'form-subdued': darken(0.04, colors.neutral[100]),
  'form-hover': colors.brand,
  'form-focus': colors.brand,
  'form-disabled': desaturate(0.7, colors.neutral[100]),
  'form-error': colors.red[500],

  'action-primary-default': colors.brand,
  'action-primary-subdued': colors.yellow[500],
  'action-primary-hover': darken(0.05, colors.brand),
  'action-primary-pressed': darken(0.1, colors.brand),
  'action-primary-disabled': transparentize(0.3, desaturate(0.6, colors.brand)),
  'action-primary-transparent': transparentize(0.5, colors.brand),

  'action-success-default': colors.green[500],
  'action-success-subdued': colors.green[100],
  'action-success-hover': darken(0.05, colors.green[500]),
  'action-success-pressed': darken(0.1, colors.green[500]),
  'action-success-disabled': transparentize(
    0.4,
    desaturate(0.4, colors.green[500])
  ),
  'action-success-transparent': transparentize(0.7, colors.green[500]),

  'action-transparent-default': 'transparent',
  'action-transparent-subdued': transparentize(0.1, colors.neutral[200]),
  'action-transparent-hover': transparentize(0.89, colors.neutral[200]),
  'action-transparent-pressed': transparentize(0.8, colors.neutral[200]),
  'action-transparent-disabled': transparentize(0.9, colors.neutral[200]),
  'action-transparent-transparent': transparentize(0.9, colors.neutral[200]),

  'surface-info-default': colors.blue[500],
  'surface-info-subdued': colors.blue[100],
  'surface-info-hover': darken(0.1, colors.blue[500]),
  'surface-info-pressed': darken(0.2, colors.blue[500]),
  'surface-info-disabled': desaturate(0.5, colors.blue[500]),

  'interactive-default': darken(0.2, colors.yellow[300]),
  'interactive-subdued': colors.yellow[500],
  'interactive-hover': colors.brand,
  'interactive-pressed': darken(0.1, colors.yellow[500]),
  'interactive-disabled': desaturate(0.5, colors.yellow[300]),

  'text-default': colors.neutral[900],
  'text-subdued': colors.neutral[500],
  'text-lighter': colors.neutral[400],
  'text-danger': colors.red[500],
  'text-warning': colors.yellow[500],
  'text-success': colors.green[500],
  'text-onBrand': darken(0.28, colors.yellow[300]),
  'text-onInteractive': colors.white,
  'text-contrast': colors.neutral[900],
};
