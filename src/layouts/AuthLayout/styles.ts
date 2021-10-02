import styled, { css, keyframes } from 'styled-components';
import tw from 'twin.macro';
import { AuthLayoutProps } from '.';

type ModifierProps = Pick<AuthLayoutProps, 'position'>;

const enterLeft = keyframes`
from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const enterRight = keyframes`
from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Wrapper = styled.main<ModifierProps>`
  ${({ theme, position }) => css`
    ${tw`
      w-full
      h-full
      flex
      justify-between
    `};
    ${position === 'right' ? tw`flex-row-reverse` : tw`flex-row`}

    color: ${theme.text.default};
    background-color: ${theme.background.default};
  `}
`;

export const ContainerLeft = styled.div`
  ${() => css`
    ${tw`
      flex
      flex-col
      w-full
      h-full
      items-center
      relative
    `};
  `}
`;

export const AnimatedContainer = styled.div<ModifierProps>`
  ${tw`
      w-full
      lg:w-1/2
      px-8
      sm:px-20
      lg:px-3
      flex
      flex-col
      items-center
    `};
  animation: ${(p) => (p.position === 'right' ? enterRight : enterLeft)} 1s;
`;

export const ContainerRight = styled.div`
  ${() => css`
    ${tw`
      w-full
      h-full
      relative
      hidden
      sm:flex
    `};
  `}
`;

export const Title = styled.h1`
  ${() => css`
    ${tw`
      font-semibold
      text-center
      text-xl
      tracking-wide
      mb-12
      mt-14
    `};
  `}
`;
