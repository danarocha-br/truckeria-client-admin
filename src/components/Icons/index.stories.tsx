import { Box, SimpleGrid } from '@chakra-ui/core';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  TruckIcon,
  CalendarIcon,
  DiscountIcon,
  MenuIcon,
  ListIcon,
  PinIcon,
  EditIcon,
  TrashIcon,
  UserIcon,
} from '.';

export default {
  title: 'Foundations/Icons',
} as Meta;

const Template: Story = ({ args }) => (
  <SimpleGrid minChildWidth="40px" height="50%" spacing="20px">
    <Box>
      <TruckIcon {...args} boxSize={6} />
    </Box>
    <Box>
      <CalendarIcon {...args} boxSize={6} />
    </Box>
    <Box>
      <DiscountIcon {...args} boxSize={6} />
    </Box>
    <Box>
      <MenuIcon {...args} boxSize={7} />
    </Box>
    <Box>
      <ListIcon {...args} boxSize={6} />
    </Box>
    <Box>
      <PinIcon {...args} boxSize={6} />
    </Box>
    <Box>
      <EditIcon {...args} boxSize={6} />
    </Box>
    <Box>
      <TrashIcon {...args} boxSize={6} />
    </Box>
    <Box>
      <UserIcon {...args} boxSize={6} />
    </Box>
  </SimpleGrid>
);

export const List = Template.bind({});
