import styled, { css, DefaultTheme } from 'styled-components';
import tw from 'twin.macro';

type TextareaProps = {
  hasError: boolean;
};

type ContainerProps = {
  isFocused: boolean;
  hasError: boolean;
  isDisabled: boolean;
  readOnly: boolean;
  isLoading: boolean | number;
  hasValue: boolean;
};

const inputBorder = `
  border: 8px solid;
  border-top-width: 2.2em;
`;

const containerModifiers = {
  isFocused: (theme: DefaultTheme) => css`
    border-color: ${theme.form.focus};
    label:before {
      ${inputBorder};
      border-top-width: 1.8em !important;
      border-color: ${theme.form.subdued} !important;
    }

    label > span {
      transform: translate3d(-0.8em, -2.7em, 0) scale3d(0.8, 0.8, 1);
    }
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

    label {
      ${tw`
        opacity-50
      `};

      &:before {
        border-color: ${(props) => props.theme.form.error};
      }
    }
  `,
};

const inputModifiers = {
  hasError: (theme: DefaultTheme) => css`
    border-color: ${theme.form.error};
  `,

  hasIcon: (theme: DefaultTheme) => css`
    border-color: ${theme.form.error};
  `,
};

export const Container = styled.span<ContainerProps>`
  ${({ theme, isFocused, hasError, isDisabled, hasValue }) => css`
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
      h-32
    `}
    border-color: ${theme.background.default};
    min-width: 15rem;
    z-index: 1;

    &:hover {
      border-color: ${theme.form.focus};
    }

    ${isFocused && containerModifiers.isFocused(theme)};
    ${hasValue && containerModifiers.isFocused(theme)};
    ${hasError && containerModifiers.hasError(theme)};
    ${isDisabled && containerModifiers.isDisabled(theme)};
  `}
`;

export const Textarea = styled.textarea<TextareaProps>`
  ${({ theme, hasError }) => css`
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
    padding: 4em 1.4em 0;

    &::placeholder {
      ${tw`
        text-sm
        text-opacity-20
        relative
        top-10
      `};
    }

    ${hasError && inputModifiers.hasError(theme)};
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
      px-3
    `};

    color: ${theme.text.default};
    background-color: ${theme.form.default};
    -webkit-touch-callout: none;
    user-select: none;

    &:before {
      ${tw`
        border-solid
        absolute
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
      transform-origin: 0% 0%;
      text-rendering: geometricPrecision;
    }

    svg.c-input__error-icon {
      ${tw`
        absolute
        right-2
        top-1
      `};
    }
  `}
`;
