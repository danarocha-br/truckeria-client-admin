import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

import tokens from './tokens';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  :root {
    --color-brand: #F57573;

    --color-white: #FFFFFF;

    --color-blue900: #617DE0;
    --color-blue500: #a1b2ed;
    --color-blue400: #b6c3f1;
    --color-blue300: #ccd5f5;
    --color-blue200: #e1e6f9;
    --color-blue100: #f6f8fd;

    --color-green900: #2AC084;

    --color-gray900: #1D2324;
    --color-gray800: #252E30;
    --color-gray700: #3C4A4D;
    --color-gray600: #566A6E;
    --color-gray500: #7F9599;
    --color-gray400: #A0B3B3;
    --color-gray300: #BCCACA;
    --color-gray200: #D9E0E0;
    --color-gray100: #F0F2F2;

    --container-xxl: 153.6rem;
    --container-xl: 128rem;
    --container-lg: 102.4rem;
    --container-md: 76.8rem;
    --container-sm: 64rem;
    --container-gutter: 3.2rem;

    --radii-xs: 0.4rem;
    --radii-sm: 0.8rem;
    --radii-md: 1.2rem;
    --radii-lg: 1.6rem;
    --radii-rounded: 50%;

    --elevation-10: 0px 4px 10px rgba(0, 0, 0, 0.05);
    --elevation-30: 0px 4px 30px rgba(0, 0, 0, 0.08);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }

    button {
      cursor: pointer;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      ${!removeBg &&
      css`
        background-color: ${theme.colors.white};
      `}
    }

    [disabled] {
      cursor: not-allowed;
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    body,
    button,
    input,
    textarea {
      font-family: ${tokens.font.family};
      font-size: ${tokens.font.sizes.base};
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }

    button {
      outline: none;
      border: none;
      cursor: pointer;
    }
  `}
`;

export default GlobalStyles;
