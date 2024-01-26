import type { Meta, StoryObj } from '@storybook/react';

import { Google } from '@components/icons';

import { Button } from './Button';

const meta = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    label: {
      description: 'text button'
    },
    icon: {
      description: 'custom component to render if condition is true'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonWithOutIcon: Story = {
  args: {
    label: 'Hey there!'
  }
};

export const ButtonWithIcon: Story = {
  args: {
    label: 'Hey look my icon!',
    icon: Google
  }
};
