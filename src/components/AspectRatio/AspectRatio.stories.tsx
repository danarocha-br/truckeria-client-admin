import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { AspectRatio, AspectRatioProps } from '.';

export default {
  title: 'Components/AspectRatio',
  component: AspectRatio,
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

const Template: Story<AspectRatioProps> = (args) => <AspectRatio {...args} />;

export const Default = Template.bind({});
