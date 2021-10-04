import { Story, Meta } from '@storybook/react/types-6-0';

import Form from '.';
import Button from 'components/Button';

export default {
  title: 'Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = (args) => (
  <Form onSubmit={() => console.log('submit')} {...args}>
    <input type="text" />
    <Button label="Send" color="success" type="submit"></Button>
  </Form>
);

export const Default = Template.bind({});
