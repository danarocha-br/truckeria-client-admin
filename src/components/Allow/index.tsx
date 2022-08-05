import { useAllow } from 'hooks/useAllow';
import { UserPermissions, UserRoles } from 'hooks/useAuth';
import * as React from 'react';

type AllowProps = {
  children: React.ReactNode;
  roles: UserRoles[];
  permissions?: UserPermissions[];
};

export function Allow({ children, permissions, roles }: AllowProps) {
  const userIsAllowedToSeeComponent = useAllow({ permissions, roles });

  if (!userIsAllowedToSeeComponent) {
    return null;
  }

  return <>{children}</>;
}
