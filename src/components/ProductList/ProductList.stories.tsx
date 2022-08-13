import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ProductList, ProductListProps } from '.';

export default {
  title: 'Components/ProductList',
  component: ProductList,
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

const Template: Story<ProductListProps> = (args) => <ProductList {...args} />;

export const Default = Template.bind({});
