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
      h-screen
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
      h-screen
      items-center
      relative
      overflow-y-scroll
      pb-10
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
      mt-10
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

type TitleProps = {
  hasSubtitle: boolean;
};

export const Title = styled.h1<TitleProps>`
  ${({ hasSubtitle }) => css`
    ${tw`
      font-normal
      text-center
      text-xl
      tracking-wide
      mt-14
    `};

    ${hasSubtitle ? 'mb-6' : 'mb-12'}
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    ${tw`
      text-center
      text-base
      tracking-wide
      mb-12
      mt-4
      opacity-70
    `};
    color: ${theme.text.subdued};
  `}
`;
