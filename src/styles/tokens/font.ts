import { convertRemToPixels } from '../../utils/convertRemToPixels';

export default {
  family: {
    sans: "canada-type-gibson, -apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },

  size: {
    tiny: convertRemToPixels(12),
    xs: convertRemToPixels(14),
    sm: convertRemToPixels(15),
    base: convertRemToPixels(17),
    lg: convertRemToPixels(23),
    xl: convertRemToPixels(26),
    '2xl': convertRemToPixels(32),
    '3xl': convertRemToPixels(45),
  },

  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
  },
};
