import styled, { css, DefaultTheme } from 'styled-components';
import tw from 'twin.macro';

import { ButtonProps } from './';

type ButtonStyledProps = {
  hasIcon: boolean;
} & Omit<ButtonProps, 'label'>;

const sizeModifier = {
  sm: (variant: ButtonProps) => css`
    ${tw`
        text-sm
        font-bold
        leading-4
        h-10
        rounded-xs
    `};

    ${variant === 'icon' ? tw`w-10` : tw`px-10`};

    svg {
      ${tw`
        h-6
        w-6
    `};
    }
  `,

  md: (variant: ButtonProps) => css`
    ${tw`
        text-base
        leading-5
        h-12
        rounded-xs
    `}
    ${variant === 'icon' ? tw`w-14` : tw`py-10 px-16`};

    svg {
      ${tw`
        h-7
        w-7
    `};
    }
  `,

  lg: (variant: ButtonProps) => css`
    ${tw`
        text-lg
        leading-6
        h-16
        rounded-sm
    `}
    ${variant === 'icon' ? tw`w-16` : tw`py-12 px-20`};

    svg {
      ${tw`
        h-8
        w-8
    `};
    }
  `,
};

const iconModifier = {
  hasIcon: () => css`
    svg {
      ${tw`
        mr-4
        rounded-md
        w-6
        h-6
        -ml-4
      `}
    }
  `,
};

const colorModifier = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.action.primary.default};
    ${tw`focus:ring-brand`}

    &:hover {
      background-color: ${theme.action.primary.hover};
    }
    &:focus {
      background-color: ${theme.action.primary.hover};
      box-shadow: 0 0 0 1px ${theme.background.default},
        0 0 0 calc(2px + 2px) ${theme.action.primary.disabled};
    }
    &:active {
      background-color: ${theme.action.primary.pressed};
    }

    &:disabled {
      background-color: ${theme.action.primary.disabled};
    }
  `,

  success: (theme: DefaultTheme) => css`
    background-color: ${theme.action.success.default};

    &:hover {
      background-color: ${theme.action.success.hover};
    }
    &:focus {
      background-color: ${theme.action.success.hover};
      box-shadow: 0 0 0 1px ${theme.background.default},
        0 0 0 calc(2px + 2px) ${theme.action.success.disabled};
    }
    &:active {
      background-color: ${theme.action.success.pressed};
    }

    &:disabled {
      background-color: ${theme.action.success.disabled};
    }
  `,
};

export const Button = styled.button<ButtonStyledProps>`
  ${({ theme, size, fullWidth, hasIcon, color, variant }) => css`
    ${tw`
        text-white
        font-semibold
        text-center
        flex
        items-center
        justify-center
        whitespace-nowrap
        w-auto
        relative
        transition-all
        duration-300

        focus:outline-none
        focus:ring-4
    `}
    ${fullWidth && tw`w-full`}

    ${hasIcon && iconModifier.hasIcon()}
    ${!!size && sizeModifier[size](variant)}
    ${!!color && colorModifier[color](theme)}

    svg {
      ${variant === 'icon' && tw`ml-0 mr-0`};
    }
  `}
`;
