import { convertRemToPixels } from '../../utils/convertRemToPixels';

export default {
  family: {
    sans: "canada-type-gibson, -apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },

  size: {
    tiny: convertRemToPixels(12),
    xs: convertRemToPixels(13.17),
    sm: convertRemToPixels(15),
    base: convertRemToPixels(17),
    lg: convertRemToPixels(20.4),
    xl: convertRemToPixels(24.48),
    '2xl': convertRemToPixels(29.38),
    '3xl': convertRemToPixels(42.3),
  },

  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
  },
};
