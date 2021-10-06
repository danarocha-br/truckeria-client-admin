import { create } from '@storybook/theming';
import tokens from '../tailwind.config.js';

export default create({
  base: 'dark',

  colorPrimary: 'red',
  colorSecondary: tokens.theme.colors.brand,

  appBg: tokens.theme.colors.neutral[800],
  appContentBg: tokens.theme.colors.neutral[700],
  appBorderColor: tokens.theme.colors.neutral[400],
  appBorderRadius: 8,
  appTextColor: tokens.theme.colors.white,

  textColor: tokens.theme.colors.neutral[100],
  fontBase: 'DM Sans, sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: tokens.theme.colors.white,
  barSelectedColor: tokens.theme.colors.brand,
  barBg: tokens.theme.colors.neutral[700],

  // Form colors
  inputBg: 'white',
  inputBorder: tokens.theme.colors.neutral[400],
  inputTextColor: tokens.theme.colors.neutral[800],
  inputBorderRadius: 4,

  brandTitle: 'Truckeria Design System',
  brandUrl: 'https://www.truckeria.app',
  brandImage: 'https://res.cloudinary.com/danarocha/image/upload/v1633110303/truckeria/truckeria-logo_vuzfsb.png'
});
