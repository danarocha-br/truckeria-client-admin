import React from 'react';
import {
  Portal,
  Root,
  Trigger,
  MenuSubContentProps,
  MenuContentProps,
} from '@radix-ui/react-dropdown-menu';

import * as S from './styles';
export * from './styles';

// export type DropdownItemProps = {
//   type: 'label' | 'radio' | 'checkbox' | 'separator' | 'title',
//   label?: string;
//   icon?: keyof typeof iconPath
// }

export type DropdownProps = {
  children: React.ReactNode;
  items: React.ReactNode;
} & MenuSubContentProps;

function DropdownMenuContent({ children, ...props }: MenuContentProps) {
  return (
    <Portal>
      <S.Content {...props}>
        {children}
        <S.Arrow />
      </S.Content>
    </Portal>
  );
}

export function DropdownMenuSubContent(props: MenuSubContentProps) {
  return (
    <Portal>
      <S.Content {...props} />
    </Portal>
  );
}

export const Dropdown = ({ children, items, ...props }: DropdownProps) => (
  <Root>
    <Trigger asChild>
      <div>{children}</div>
    </Trigger>

    <DropdownMenuContent alignOffset={4} sideOffset={4} {...props}>
      {items}
    </DropdownMenuContent>
  </Root>
);
