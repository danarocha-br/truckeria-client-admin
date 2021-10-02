import * as React from 'react';
import Image from 'next/image';

import * as S from './styles';

import Logo from 'components/Logo';
import Link from 'components/Link';

export type AuthLayoutProps = {
  title: string;
  /** href for the link at the top */
  to?: string;
  /** if link needed, need to pass a label */
  linkLabel?: string;
  /** to invert left and right panels */
  position?: 'left' | 'right';
  children: React.ReactNode;
};

const AuthLayout = ({
  title,
  children,
  to,
  linkLabel,
  position = 'left',
}: AuthLayoutProps) => (
  <S.Wrapper position={position}>
    <S.ContainerLeft>
      {!!to && (
        <div className="absolute right-0 mr-12 pt-6">
          <Link to={to} label={linkLabel} />
        </div>
      )}
      <S.AnimatedContainer position={position}>
        <Logo size="lg" className="mt-24" />
        <S.Title>{title}</S.Title>
        {children}
      </S.AnimatedContainer>
    </S.ContainerLeft>
    <S.ContainerRight>
      <Image
        src="https://res.cloudinary.com/danarocha/image/upload/v1633193126/truckeria/signinbackground_dcrtxs.png"
        alt="Truckeria"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </S.ContainerRight>
  </S.Wrapper>
);

export default AuthLayout;
