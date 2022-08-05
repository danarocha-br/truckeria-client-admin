import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Stepper, StepperProps } from '.';
import { Box } from '../Box';

const steps = [
  {
    label: 'Your info',
    // isCompleted: true,
  },
  {
    label: 'Food truck info',
    // isActive: true,
  },
  {
    label: 'Contact info',
  },
];

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    steps: steps,
    activeIndex: 0,
  },
} as Meta;

const Template: Story<StepperProps> = (args) => (
  <Box css={{ w: 500 }}>
    <Stepper {...args} />
  </Box>
);

export const Primary = Template.bind({});
