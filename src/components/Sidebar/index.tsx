import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Logo, Flex, iconPath, Icon, UserProfile } from 'components';
import * as S from './styles';

import { SIDEBAR_NAVIGATION } from 'constants/index';

export type SidebarNavItemProps = {
  /** to render a wrapper to the a tag */
  as?: React.FunctionComponent | typeof Link;
  href: string;
  label: string;
  icon: keyof typeof iconPath;
  isActive?: boolean;
};

export const SidebarNavItem = ({
  as,
  href,
  label,
  icon,
  isActive = false,
}: SidebarNavItemProps) => {
  const Component = as || React.Fragment;
  return (
    <Component href={href} passHref>
      <S.Anchor href={href} isActive={isActive} aria-label={label}>
        <Icon name={icon} color={isActive ? 'brand' : 'current'} />
        {label}
      </S.Anchor>
    </Component>
  );
};

export const SidebarNavItemMobile = ({
  as,
  href,
  label,
  icon,
  isActive = false,
}: SidebarNavItemProps) => {
  const Component = as || React.Fragment;
  return (
    <Component href={href} passHref>
      <S.AnchorMobile href={href} isActive={isActive} aria-label={label}>
        <Icon name={icon} color={isActive ? 'brand' : 'current'} />
      </S.AnchorMobile>
    </Component>
  );
};

export const Sidebar = () => {
  const { asPath } = useRouter();

  const currentPath = asPath.includes('?') ? asPath.split('?')[0] : asPath;
  // const currentPath = (route: string) => {
  //   router.pathname.startsWith(route)
  // }

  return (
    <>
      <S.Container>
        <Flex as="nav" direction="column" gap="6">
          <Logo css={{ mb: '$8' }} />

          {Object.entries(SIDEBAR_NAVIGATION).map(([key, value]) => (
            <SidebarNavItem
              key={key}
              as={Link}
              href={value.href}
              label={value.label}
              //@ts-ignore
              icon={value.icon}
              isActive={currentPath === value.href}
            />
          ))}
        </Flex>

        <UserProfile />
      </S.Container>

      {/** Mobile */}
      <S.ContainerMob>
        {Object.entries(SIDEBAR_NAVIGATION).map(([key, value]) => (
          <SidebarNavItemMobile
            key={key}
            as={Link}
            href={value.href}
            label={value.label}
            //@ts-ignore
            icon={value.icon}
            isActive={currentPath === value.href}
          />
        ))}

        <UserProfile hideUsername />
      </S.ContainerMob>
    </>
  );
};
