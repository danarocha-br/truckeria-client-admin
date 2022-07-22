import { useContext } from 'react';

import { AuthContext, UserPermissions, UserRoles } from 'hooks/useAuth';

type UseAllow = {
  roles: UserRoles[];
  permissions?: UserPermissions[];
};

export function useAllow({ roles, permissions }: UseAllow) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return false;
  }

  if (permissions?.length > 0) {
    const hasAllPermissions = permissions?.every((permission) => {
      return user.permissions.includes(permission);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles.length > 0) {
    const hasAllRoles = roles?.some((role) => {
      return user.roles.includes(role);
    });
  }

  return true;
}
