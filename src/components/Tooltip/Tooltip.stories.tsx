import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tooltip, CustomTooltipProps } from '.';
import { IconButton } from 'components/IconButton';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    content: 'Adicione nova categoria',
  },
} as Meta;

const Template: Story<CustomTooltipProps> = (args) => (
  <Tooltip {...args}>
    <IconButton
      icon="plus"
      ariaLabel="Adicione nova categoria"
      onClick={() => ''}
    />
  </Tooltip>
);

export const Default = Template.bind({});
