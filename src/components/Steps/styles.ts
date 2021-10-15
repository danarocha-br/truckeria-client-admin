import styled, { css } from 'styled-components';
import tw from 'twin.macro';

type ListProps = {
  isActive?: boolean;
  isComplete?: boolean;
};

export const Container = styled.nav`
  ${() => css`
    ${tw`w-full`}
  `}
`;

export const List = styled.ol`
  ${() => css`
    ${tw`
      flex
      items-center
      justify-between
    `}

    &:hover {
      li:not(:hover) span {
        ${tw`
          opacity-0
        `}
      }
    }
  `}
`;

export const Item = styled.li<ListProps>`
  ${({ theme, isActive, isComplete }) => css`
    ${tw`
      text-center
      relative
      whitespace-nowrap
      min-w-0
      border-b-2
      pb-3
      overflow-visible
    `}
    flex: 2;
    border-color: ${theme.surface.base.default};

    &:first-child,
    &:last-child {
      flex: 1;
    }

    &:first-child {
      ${tw`text-left`};

      &:before {
        ${tw`
          -left-1
        `}
      }
    }
    &:last-child {
      ${tw`text-right`};

      &:before {
        ${tw`
        -right-1
        left-auto
      `}
      }

      &:after {
        width: ${isActive || isComplete ? '200%' : 'inherit'};
        left: ${isActive || isComplete ? '-100%' : 'inherit'};
      }
    }

    &:before {
      ${tw`
        block
        w-4
        h-4
        rounded-rounded
        border-2
        absolute
        -bottom-2
        transition-all
      `};

      content: '';
      left: calc(50% - 6px);
      z-index: 3;

      ${isComplete && tw`bg-green-500`};
      background-color: ${isActive
        ? theme.background.default
        : theme.surface.base.subdued};
      border-color: ${isActive
        ? theme.surface.success.default
        : theme.background.default};
    }

    span {
      ${tw`
        transition-opacity
        duration-300
        ease-in-out
      `};
      ${isActive ? tw`opacity-100` : tw`opacity-0`};
    }

    &:not(:first-child):after {
      ${isComplete &&
      tw`
          block
          w-full
          absolute
          -bottom-1
          -left-1/2
          border-b-2
          border-solid
          border-green-500
        `};
      ${isActive &&
      tw`
          block
          w-full
          absolute
          -left-1/2
          border-b-2
          border-solid
          border-green-500
        `};
      bottom: -2px;
      content: '';
    }

    &:hover {
      &:before {
        background-color: ${(p) => isActive && p.theme.background.default};
        border-color: ${(p) => isActive && p.theme.surface.success.default};
        transform: scale(1.33);
      }
      span {
        ${tw`opacity-100`}
      }
    }
  `}
`;
