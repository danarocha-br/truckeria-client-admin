import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Breadcrumb, BreadcrumbItem, BreadcrumbProps } from '.';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    ariaLabel: 'Navegação',
  },
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem href="/products" label="Produtos" />
    <BreadcrumbItem href={`/products/ `} label="Nome do produto" isActive />
  </Breadcrumb>
);

export const Default = Template.bind({});
