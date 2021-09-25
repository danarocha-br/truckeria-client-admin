import { Box, SimpleGrid } from '@chakra-ui/core';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TruckIcon } from '.';

export default {
  title: 'Icons',
  // component: Icon,
} as Meta;

const Template: Story = ({ args }) => (
  <SimpleGrid minChildWidth="120px" spacing="40px">
    <Box height="80px">
      <TruckIcon {...args} color="red.900" boxSize={24} />
    </Box>
  </SimpleGrid>
);

export const List = Template.bind({});
