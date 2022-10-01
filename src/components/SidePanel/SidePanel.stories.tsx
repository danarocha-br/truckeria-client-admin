import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SidePanel, SidePanelProps } from '.';

export default {
  title: 'Components/SidePanel',
  component: SidePanel,
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

const Template: Story<SidePanelProps> = (args) => <SidePanel {...args} />;

export const Default = Template.bind({});
