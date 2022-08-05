import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Toast, ToastProps, ToastHandlesProps } from '.';
import { Button } from '../Button';

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    title: 'I am a title',
    description: 'And I am a description.',
    variant: 'neutral',
    actionLabel: 'Undo',
    actionOnClick: () => console.log('clicked'),
  },
} as Meta;

const Template: Story<ToastProps> = (args) => <RenderTemplate {...args} />;

const RenderTemplate = (args: ToastProps) => {
  const toastRef = React.useRef<ToastHandlesProps>(null);

  const showToast = () => {
    toastRef.current?.showToast();
  };

  return (
    <Toast ref={toastRef} {...args}>
      <Button label="Show toast" size="sm" onClick={showToast} />
    </Toast>
  );
};

export const Neutral = Template.bind({});
export const Info = Template.bind({});
Info.args = {
  variant: 'info',
};
export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};
