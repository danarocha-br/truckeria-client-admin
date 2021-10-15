import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.span`
  ${({ theme }) => css`
    ${tw`
      text-sm
      font-semibold
      capitalize
      flex
      justify-center
      border
      border-solid
      rounded-xs
      px-5
      py-1
    `};
    border-color: ${theme.colors.brand};
  `}
`;
