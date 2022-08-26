import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
import { Toggle, ToggleProps } from '.';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    ariaLabel: 'Fechar/abrir painel',
    defaultPressed: true,
  },
} as Meta;

const Template: Story<ToggleProps> = (args) => {
  const [isPanelActive, setPanelActive] = useState(true);

  return (
    <Toggle
      {...args}
      pressed={isPanelActive}
      onPressedChange={() => setPanelActive(!isPanelActive)}
      css={{
        position: 'absolute',
        top: '$2',
        right: '$4',
        zIndex: 3,
        bg: '$neutral800',
        w: '$7',
        h: '$7',
        p: 6,
        borderRadius: '$round',
      }}
    >
      <Tooltip
        content={isPanelActive ? 'Fechar painel' : 'Abrir painel'}
        side="left"
      >
        <Icon
          name={isPanelActive ? 'close' : 'panel'}
          aria-label={isPanelActive ? 'fechar' : 'abrir'}
          size="sm"
        />
      </Tooltip>
    </Toggle>
  );
};

export const Default = Template.bind({});
