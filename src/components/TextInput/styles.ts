import styled, { css, DefaultTheme } from 'styled-components';
import tw from 'twin.macro';

type ContainerProps = {
  isFocused: boolean;
  hasError: boolean;
  isDisabled: boolean;
  readOnly?: boolean;
  isLoading: boolean | number;
};

type TextInputProps = {
  isFocused: boolean;
  hasError: boolean;
  hasIcon: boolean;
  isDisabled: boolean;
  isLoading: boolean | number;
  hasValue: boolean;
  hasPlaceholder: boolean;
};

const inputBorder = `
  border: 8px solid;
  border-top-width: 2.2em;
`;

const animateIcon = `
  translateZ(1px);
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

    + label > svg.c-input__icon {
      ${animateIcon}
      transform: translate3d(-0.6em, -1.5em, 0) scale3d(0.85, 0.85, 1);
      color: ${theme.form.focus};
    }
  `,

  hasError: (theme: DefaultTheme) => css`
    border-color: ${theme.form.error};
  `,

  hasIcon: (theme: DefaultTheme) => css`
    border-color: ${theme.form.error};
  `,

  disabled: (theme: DefaultTheme) => css`
    + label {
      ${tw`
        opacity-50
      `};
    }

    + label > svg.c-input__icon {
      color: ${theme.text.default} !important;
    }
  `,
};

export const Container = styled.span<ContainerProps>`
  ${({ theme, isFocused, hasError, isDisabled, readOnly }) => css`
    ${tw`
      relative
      flex
      items-center
      w-full
      align-top
      overflow-hidden
      border
      rounded-xs
      transition
      duration-300
      h-20
    `}
    border-color: ${theme.background.default};
    min-width: 15rem;
    z-index: 1;

    &:hover {
      border-color: ${theme.form.focus};
    }

    ${isFocused && containerModifiers.isFocused(theme)};
    ${hasError && containerModifiers.hasError(theme)};
    ${isDisabled && containerModifiers.isDisabled(theme)};
    ${readOnly && containerModifiers.readOnly(theme)};
  `}
`;

export const Input = styled.input<TextInputProps>`
  ${({ theme, isFocused, hasError, hasValue, hasPlaceholder, disabled }) => css`
    background: transparent;

    ${tw`
      absolute
      text-base
      w-full
      flex
      border-none
      appearance-none
      z-10
      focus:outline-none
      disabled:cursor-not-allowed
      disabled:opacity-40
    `};

    color: ${theme.text.default};
    padding: 1.24em 1.4em 0;

    &::placeholder {
      ${tw`
        text-sm
        text-opacity-20
      `};
    }

    ${isFocused && inputModifiers.isFocused(theme)};
    ${hasError && inputModifiers.hasError(theme)};
    ${hasValue && inputModifiers.isFocused(theme)};
    ${hasPlaceholder && inputModifiers.isFocused(theme)};

    + label > svg.c-input__icon {
      color: ${hasPlaceholder && theme.text.default} !important;
    }

    ${disabled && inputModifiers.disabled(theme)};
  `}
`;

export const Label = styled.label<Pick<ContainerProps, 'hasError'>>`
  ${({ theme }) => css`
    ${tw`
      font-medium
      text-left
      flex
      items-center
      w-full
      h-full
      pt-2
      px-3
      rounded-xs
    `};

    color: ${theme.text.default};
    background-color: ${theme.form.default};
    -webkit-touch-callout: none;
    user-select: none;

    &:before {
      ${tw`
        border-solid
        absolute
        top-0
        left-0
        right-0
        w-full
        h-full
      `};
      content: '';
      border-color: ${theme.form.default};
      transition: border-width 0.3s, border-color 0.5s;
    }

    span {
      ${tw`
        flex
        w-full
        relative
        -top-1
        ml-3
        transform
        duration-300
      `};
      transform-origin: 0% 50%;
      text-rendering: geometricPrecision;
    }

    svg.c-input__icon {
      ${tw`
        ml-1
        transform
        duration-300
      `};
      margin-top: -8px;
    }

    svg.c-input__error-icon {
      ${tw`
        absolute
        right-2
        top-1
      `};
    }

    input:disabled + label:before {
      border-color: ${(props) => props.theme.form.error};
    }
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    ${tw`
        text-white
        text-sm
        px-3
        py-1
        relative
        -top-1
        rounded-b-sm
    `};
    background-color: ${theme.surface.danger.disabled};
  `}
`;
