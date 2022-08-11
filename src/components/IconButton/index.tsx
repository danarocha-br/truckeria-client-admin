import React from 'react';
import { CSS } from '@stitches/react';

import { iconPath, Icon } from 'components/Icon';
import * as S from './styles';

export type IconButtonProps = {
  ariaLabel: string;
  variant?: 'primary' | 'success';
  icon: keyof typeof iconPath;
  css?: CSS;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({
  variant = 'primary',
  icon = 'plus',
  css,
  ariaLabel,
  ...props
}: IconButtonProps) => (
  <S.Wrapper css={{ css }} aria-label={ariaLabel} {...props}>
    <S.Container
      width="50"
      height="50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variant={variant}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.355.922C5.863 1.648 1.648 5.862.922 11.355.424 15.13 0 19.853 0 25s.424 9.87.922 13.645c.726 5.492 4.94 9.707 10.433 10.432 3.775.5 8.498.923 13.645.923s9.87-.424 13.645-.922c5.492-.726 9.707-4.94 10.432-10.433.5-3.775.923-8.498.923-13.645s-.424-9.87-.922-13.645c-.726-5.492-4.94-9.707-10.433-10.433C34.87.424 30.147 0 25 0s-9.87.424-13.645.922Z"
        fill="currentColor"
      />
    </S.Container>
    <Icon
      name={icon}
      size="lg"
      color="onInteractive"
      css={{
        position: 'absolute',
        top: '$2',
        left: '9px',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    />
  </S.Wrapper>
);
