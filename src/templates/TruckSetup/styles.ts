import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.main`
  ${() => css`
    ${tw`
      w-full
      h-full
      flex
      overflow-hidden
      sm:py-3
      sm:pr-3
    `}
  `}
`;

export const Content = styled.section`
  ${() => css`
    ${tw`
      w-full
      h-full
      overflow-y-scroll
      px-10
      sm:px-20
      lg:w-2/3
      pt-10
      pb-14
      flex
      flex-col
      items-center
      relative
    `}
  `}
`;

export const Preview = styled.section`
  ${({ theme }) => css`
    ${tw`
      hidden
      sm:flex
      sm:flex-col
      sm:w-1/2
      md:w-1/3
      py-10
      rounded-lg
    `}
    background-color: ${theme.background.subdued};
  `}
`;

export const ProfileImage = styled.div`
  ${() => css`
    ${tw`
      w-full
      h-60
      bg-red-500
      rounded-sm
    `}
  `}
`;

export const About = styled.section`
  ${({ theme }) => css`
    ${tw`
      mt-4
      border-b
      border-dashed
      pb-4
    `}

    border-color: ${theme.surface.loading.subdued};
  `}
`;
