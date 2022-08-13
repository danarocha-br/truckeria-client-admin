import React, { useState } from 'react';
import { RadiobuttonIcon } from '@radix-ui/react-icons';

import {
  Avatar,
  Text,
  Dropdown,
  DropdownLabel,
  DropdownSeparator,
  DropdownItem,
  DropdownMenuRadioGroup,
  DropdownRadioItem,
  DropdownItemIndicator,
  DropdownRightSlot,
  Flex,
  Icon,
} from 'components';
import * as S from './styles';

import { useAuth } from 'hooks/useAuth';

type UserProfileProps = {
  hideUsername?: boolean;
};

const accounts = [
  {
    id: '1',
    name: 'Brazilian snack food',
  },
  {
    id: '2',
    name: 'Mexican dream BBQ',
  },
];

export const UserProfile = ({ hideUsername = false }: UserProfileProps) => {
  const { signOut } = useAuth();

  const DropdownItems = () => {
    const [account, setAccount] = useState('1');

    return (
      <>
        <DropdownLabel css={{ mb: '$3' }}>dana@danarocha.com.br</DropdownLabel>

        <DropdownMenuRadioGroup value={account} onValueChange={setAccount}>
          {accounts &&
            accounts.map((account) => (
              <DropdownRadioItem value={account.id} key={account.id}>
                <Flex gap="4" align="center" css={{ py: '$2', w: '$full' }}>
                  <Avatar user="My foodtruck name" size="sm" />
                  <Text size="sm">{account.name}</Text>

                  <DropdownItemIndicator>
                    <RadiobuttonIcon />
                  </DropdownItemIndicator>
                </Flex>
              </DropdownRadioItem>
            ))}
        </DropdownMenuRadioGroup>

        <DropdownSeparator />

        <DropdownItem>
          <Icon name="settings" />
          Configurações <DropdownRightSlot>⌘+C</DropdownRightSlot>
        </DropdownItem>
        <DropdownItem onSelect={signOut}>
          <Icon name="settings" /> Sair
        </DropdownItem>
      </>
    );
  };

  return (
    <Dropdown items={<DropdownItems />}>
      <S.Container>
        <Avatar user="Dana Rocha" />
        {!hideUsername && <Text size="sm">Dana Rocha</Text>}
        <Icon name="caretDown" size="xs" />
      </S.Container>
    </Dropdown>
  );
};
