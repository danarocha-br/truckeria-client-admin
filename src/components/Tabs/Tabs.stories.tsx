import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TabContent, TabList, Tabs, TabsProps, TabTitle } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: { defaultValue: 'Details' },
} as Meta;

const Template: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <TabList ariaLabel="Product navigation">
      <TabTitle title="Details" />
      <TabTitle title="Extra " />
    </TabList>

    <TabContent title="Details">
      <Text>Hello</Text>
    </TabContent>
    <TabContent title="Extra">
      <Text>Extra Hello</Text>
    </TabContent>
  </Tabs>
);

export const Default = Template.bind({});
