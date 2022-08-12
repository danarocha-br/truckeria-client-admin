import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ToggleGroup, ToggleGroupItem } from '.';
import { Icon } from 'components/Icon';

export default {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
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

const Template: Story = (args) => {
  const [viewPreference, setViewPreference] = useState('card');

  return (
    <ToggleGroup
      {...args}
      type="single"
      defaultValue="card"
      value={viewPreference}
      onValueChange={(value) => {
        if (value) setViewPreference(value);
      }}
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="card" aria-label="Ver formato grid">
        <Icon name="cards" />
      </ToggleGroupItem>
      <ToggleGroupItem value="table" aria-label="Ver formato tabela">
        <Icon name="table" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export const Default = Template.bind({});
