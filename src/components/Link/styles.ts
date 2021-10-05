import styled, { css, keyframes } from 'styled-components';
import tw from 'twin.macro';

const lineUp = keyframes`
  0% {
        transform-origin: 50% 100%;
        transform: scale3d(1, 0.045, 1);
    }

    50% {
        transform-origin: 50% 100%;
        transform: scale3d(1, 1, 1);
    }

    51% {
        transform-origin: 50% 0%;
        transform: scale3d(1, 1, 1);
    }

    100% {
        transform-origin: 50% 0%;
        transform: scale3d(1, 0.045, 1);
    }
`;

export const Anchor = styled.a`
  ${({ theme }) => css`
    ${tw`
      font-medium
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

export const AnchorInline = styled.a`
  ${({ theme }) => css`
    ${tw`
      font-medium
      inline-block
      transition-colors
      relative
      whitespace-nowrap
    `}

    color: ${theme.interactive.default};

    &:hover {
      color: ${theme.interactive.hover};
    }

    &::before,
    &::after {
      ${tw`
      absolute
      w-full
      left-0
      pointer-events-none
    `}
      height: 1px;
      background: currentColor;
      top: 100%;
    }

    &::before {
      ${tw`
        opacity-0
      `}
      content: '';
      height: 3px;
    }

    &:hover::before {
      ${tw`
        opacity-100
      `}
      animation: ${lineUp} 0.3s ease forwards;
    }

    &::after {
      ${tw`
        opacity-0
        transition-opacity
        duration-200
      `}
      content: '';
    }

    &:hover::after {
      ${tw`
        opacity-100
        delay-300
      `}
    }
  `}
`;
