import * as React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

import * as S from './styles';

import Logo from 'components/Logo';
import Link from 'components/Link';

export type AuthLayoutProps = {
  title: string;
  subtitle?: string;
  /** href for the link at the top */
  to?: string;
  /** if link needed, need to pass a label */
  linkLabel?: string;
  /** if custom image is passed */
  image?: string;
  /** to invert left and right panels */
  position?: 'left' | 'right';
  children: React.ReactNode;
};

const AuthLayout = ({
  title,
  subtitle,
  children,
  to,
  linkLabel,
  image,
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
        <NextLink href="http://truckeria.app" passHref>
          <a href="/">
            <Logo size="lg" className="mt-16 lg:mt-18" />
          </a>
        </NextLink>
        <S.Title hasSubtitle={!!subtitle}>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        {children}
      </S.AnimatedContainer>
    </S.ContainerLeft>
    <S.ContainerRight>
      <Image
        src={`${
          image
            ? image
            : `https://res.cloudinary.com/danarocha/image/upload/v1633193126/truckeria/signinbackground_dcrtxs.png`
        }`}
        alt="Truckeria"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </S.ContainerRight>
  </S.Wrapper>
);

export default AuthLayout;
