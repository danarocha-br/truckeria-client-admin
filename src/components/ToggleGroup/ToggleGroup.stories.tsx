import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ToggleGroup, ToggleGroupProps } from '.';

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

const Template: Story<ToggleGroupProps> = (args) => <ToggleGroup {...args} />;

export const Default = Template.bind({});
