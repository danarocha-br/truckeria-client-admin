import { styled, lightTheme } from '../../../stitches.config';

export const MainColor = styled('path', {
  fill: 'hsla(37, 42%, 65%, 1)',

  [`.${lightTheme} &`]: {
    fill: 'hsla(217, 13%, 19%, 1)',
  },
});
export const BrandColor = styled('path', {
  fill: 'hsla(10, 100%, 66%, 0.94)',
});

export const Svg = styled('svg', {
  variants: {
    size: {
      sm: {},
      md: {
        transform: 'scale(1.3)',
      },
    },
  },
  variantsDefault: {
    size: 'sm',
  },
});
