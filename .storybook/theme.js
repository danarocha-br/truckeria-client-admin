import { create } from '@storybook/theming';
import { colors } from '../src/styles/tokens';

export default create({
  base: 'dark',

  colorPrimary: 'red',
  colorSecondary: colors.brand,

  appBg: colors.neutral[900],
  appContentBg: colors.neutral[700],
  appBorderColor: colors.neutral[400],
  appBorderRadius: 8,
  appTextColor: colors.white,

  textColor: colors.neutral[100],
  fontBase: 'DM Sans, sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: colors.white,
  barSelectedColor: colors.brand,
  barBg: colors.neutral[700],

  // Form colors
  inputBg: 'white',
  inputBorder: colors.neutral[400],
  inputTextColor: colors.neutral[800],
  inputBorderRadius: 4,

  brandTitle: 'Truckeria Design System',
  brandUrl: 'https://www.truckeria.app',
  brandImage:
    'https://res.cloudinary.com/danarocha/image/upload/v1633110303/truckeria/truckeria-logo_vuzfsb.png',
});
