import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const Heading = styled.h1`
  ${({ theme }) => css`
    ${tw`
      font-medium
      text-xl
    `}
    color: ${theme.text.default};
  `}
`;
