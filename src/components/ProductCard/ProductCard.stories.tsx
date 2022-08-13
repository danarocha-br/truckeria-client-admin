import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ProductCard, ProductCardProps } from '.';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    title: 'Cheeseburger de pinhão',
    internal_name: 'BG_SUP',
    image_url: '',
    description:
      'Hamburguer, pão brioche, cheddar, tomate, pickles, salada, maionese de ervas, tomate, pickles, salada, maionese de ervas',
    price: 9.5,
    isActive: true,
    internal_barcode: 13345,
    badges: ['eggs', 'nuts', 'vegan', 'vegetarian'],
    display_featured: true,
    display_new_item: true,
  },
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
