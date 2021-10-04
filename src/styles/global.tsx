import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';
import tw, { GlobalStyles as TailwindGlobal } from 'twin.macro';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const CustomStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    ${tw`
      antialiased
    `};

    button {
      ${tw`
        cursor-pointer
      `};
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      scroll-behavior: smooth;
    }

    body {
      color: ${theme.text.default};
      ${!removeBg &&
      css`
        background-color: ${theme.background.default};
        -webkit-tap-highlight-color: ${theme.colors.brand};
      `}
    }

    [disabled] {
      ${tw`
        cursor-not-allowed
      `};
    }

    html,
    body,
    #__next {
      ${tw`
        h-full
      `}
    }

    body,
    button,
    input,
    textarea {
      ${tw`
        font-sans
      `}
      font-display: swap;
    }

    button {
      ${tw`
        outline-none
        border-none
        cursor-pointer
      `}
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      ${tw`
        px-3
      `}
      box-shadow: 0 0 0px 4px ${theme.surface.warning
        .disabled} inset !important;
      transition: background-color 5000s ease-in-out 0s;
      filter: none;
    }
  `}

`;

const GlobalStyles = () => {
  return (
    <>
      <TailwindGlobal />
      <CustomStyles />
    </>
  );
};

export default GlobalStyles;
