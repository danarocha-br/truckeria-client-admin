import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LinkWrapper, LinkWrapperProps } from '.';

export default {
  title: 'Components/LinkWrapper',
  component: LinkWrapper,
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

const Template: Story<LinkWrapperProps> = (args) => <LinkWrapper {...args} />;

export const Default = Template.bind({});
