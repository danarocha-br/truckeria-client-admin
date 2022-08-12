import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { MenuCategoryList, MenuCategoryListProps } from '.';

export default {
  title: 'Components/MenuCategoryList',
  component: MenuCategoryList,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    title: 'Burgers',
    description: 'Awesome burgers',
    count: 4,
    imageURL:
      'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80',
  },
} as Meta;

const Template: Story<MenuCategoryListProps> = (args) => (
  <MenuCategoryList {...args} />
);

export const Default = Template.bind({});
export const NoImage = Template.bind({});
NoImage.args = {
  imageURL: '',
};
