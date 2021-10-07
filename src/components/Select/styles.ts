import styled, { css, DefaultTheme } from 'styled-components';
import tw from 'twin.macro';
import Select from 'react-select';
import { transparentize } from 'polished';

type ContainerProps = {
  isFocused: boolean;
  hasError: boolean;
  hasValue: boolean;
  isDisabled: boolean;
  readOnly?: boolean;
  isLoading: boolean | number;
};

type SelectProps = {
  isFocused: boolean;
  hasError: boolean;
  hasValue?: boolean;
  isDisabled: boolean;
  readOnly?: boolean;
  isLoading?: boolean | number;
};

const inputBorder = `
  border: 8px solid;
  border-top-width: 2.2em;
`;

const containerModifiers = {
  isFocused: (theme: DefaultTheme) => css`
    border-color: ${theme.form.focus};
  `,
  hasError: (theme: DefaultTheme) => css`
    border-color: ${theme.form.error};
  `,
  isDisabled: (theme: DefaultTheme) => css`
    ${tw`
      border
      border-dashed

    `}
    border-color: ${theme.text.subdued}60;
    background-color: ${theme.form.disabled};

    &:hover {
      border-color: ${theme.text.subdued}60;
    }
  `,

  readOnly: (theme: DefaultTheme) => css`
    label {
      ${tw`pl-7 pt-4`}
      background-color: ${theme.form.subdued};
    }

    &:hover {
      border-color: ${theme.background.default};
    }
  `,
};

const inputModifiers = {
  isFocused: (theme: DefaultTheme) => css`
    + label:before {
      ${inputBorder};
      border-top-width: 1.8em !important;
      border-color: ${theme.form.subdued} !important;
    }

    + label > span {
      transform: translate3d(-1em, -1.5em, 0) scale3d(0.8, 0.8, 1);
    }
  `,

  hasError: (theme: DefaultTheme) => css`
    border-color: ${theme.form.error};
  `,

  hasIcon: (theme: DefaultTheme) => css`
    border-color: ${theme.form.error};
  `,

  isDisabled: () => css`
    ${tw`cursor-not-allowed`};
    + label {
      ${tw`
        opacity-50
      `};
    }
  `,
};

export const Container = styled.span<ContainerProps>`
  ${({ theme, isFocused, hasError, isDisabled, readOnly, hasValue }) => css`
    ${tw`
      relative
      flex
      items-center
      w-full
      border
      transition
      duration-300
      h-20
      rounded-xs
    `}
    border-color: ${theme.background.default};
    min-width: 15rem;
    min-height: 5rem;

    &:hover {
      border-color: ${theme.form.focus};
    }

    ${isFocused && containerModifiers.isFocused(theme)};
    ${hasValue && containerModifiers.isFocused(theme)};
    ${hasError && containerModifiers.hasError(theme)};
    ${isDisabled && containerModifiers.isDisabled(theme)};
    ${readOnly && containerModifiers.readOnly(theme)};
  `}
`;

export const CustomSelect = styled(Select)<SelectProps>`
  ${({ theme, isFocused, hasError, hasValue, isDisabled }) => css`
    ${tw`
        w-full
        h-auto
        border-none
        rounded-xs
    `};
    position: absolute !important;

    .c-select {
      &__control {
        ${tw`
          flex
          border-none
          text-base
          z-10
          appearance-none
          focus:outline-none
          disabled:cursor-not-allowed
          disabled:opacity-40
          w-full
          h-full
          rounded-xs
          shadow-none
        `};

        color: ${theme.text.default};
        padding: 1.24em 0.5em 0;
        background: transparent !important;
      }

      &--is-focused {
        ${tw`
          border-none
          outline-none
          shadow-none
        `};
      }

      &--menu-is-open {
        z-index: 1999 !important;
      }

      &__menu {
        ${tw`
          rounded-xs
          mt-1
        `};
        z-index: 1999 !important;
        background-color: ${theme.surface.base.subdued};
      }

      &__menu-list {
        ${tw`
            p-0
            m-0
          `};
      }

      &__option {
        &:hover {
          ${tw`
            bg-blue-300
          `};
        }

        &--is-focused {
          ${tw`
            bg-blue-300
          `};
        }

        &--is-selected {
          ${tw`
            bg-blue-500
          `};
        }

        &:first-child {
          ${tw`
            rounded-t-xs
          `};
        }
        &:last-child {
          ${tw`
            rounded-b-xs
          `};
        }
      }

      &__indicator-separator {
        ${tw`hidden`};
      }

      &__single-value {
        color: ${theme.text.default};
      }

      &__input-container {
        color: ${theme.text.default};
      }

      &__multi-value {
        ${tw`
          border
          border-brand
          transition-colors
          mr-2
        `};
        background: transparent;

        &:hover {
          background-color: ${transparentize(0.8, theme.colors.brand)};
        }

        &__label {
          ${tw`
          mx-1
        `};
          color: ${theme.text.default};
        }
      }
      &__dropdown-icon {
        ${tw`transition-colors`};
        color: ${theme.text.default};

        &:hover {
          color: ${theme.text.subdued};
        }
      }
      &__clear-icon {
        ${tw`transition-colors`};
        color: ${theme.text.default};
        border-radius: 2px;

        &:hover {
          ${tw`text-red-500 bg-red-100`};
        }
      }
    }
    ${isFocused && inputModifiers.isFocused(theme)};
    ${hasError && inputModifiers.hasError(theme)};
    ${hasValue && inputModifiers.isFocused(theme)};
    ${isDisabled && inputModifiers.isDisabled()};
  `}
`;
