import styled, { css } from 'styled-components';

import { LogoProps } from './';

type ContainerProps = Pick<LogoProps, 'size'>;

export const Container = styled.div<ContainerProps>`
  ${({ theme, size }) => css`
    color: ${theme.text.onBrand};
    transform: ${size === 'lg' ? `scale(1.4)` : 'scale(1)'}; ;
  `}
`;
