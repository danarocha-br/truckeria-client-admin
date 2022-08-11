import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RadiobuttonIcon } from '@radix-ui/react-icons';

import { Dropdown } from '.';
import {
  Avatar,
  Text,
  DropdownLabel,
  DropdownSeparator,
  DropdownItem,
  DropdownMenuRadioGroup,
  DropdownRadioItem,
  DropdownItemIndicator,
  DropdownRightSlot,
  Flex,
  Icon,
  Button,
} from 'components';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
} as Meta;

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

function DropdownItems() {
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
      <DropdownItem onSelect={() => ''}>
        <Icon name="settings" /> Sair
      </DropdownItem>
    </>
  );
}

const Template: Story = (args) => {
  return (
    <Dropdown items={<DropdownItems />} {...args}>
      <Button label="Open menu" />
    </Dropdown>
  );
};

export const Default = Template.bind({});
