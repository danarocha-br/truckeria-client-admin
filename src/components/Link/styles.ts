import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const Anchor = styled.a`
  ${({ theme }) => css`
    ${tw`
      font-semibold
      no-underline
      inline-block
      relative
      pl-4
      pr-5
      transition
      ease-out
      duration-700
      transform
      scale-100
    `};

    color: ${theme.interactive.default};

    &:after,
    &:before {
      ${tw`
        absolute
        inline-block
        w-5
        top-3
        `};
      content: '';
      height: 1px;
      background-color: ${theme.colors.brand};
    }

    &:after {
      ${tw`
        ml-3
      `};
    }
    &:before {
      ${tw`
        -ml-8
      `};
    }

    &:hover {
      color: ${theme.interactive.hover};

      &:after,
      &:before {
        ${tw`
          transform
          scale-x-125
          transition
          ease-out
          duration-700
        `};
      }
    }
  `}
`;
