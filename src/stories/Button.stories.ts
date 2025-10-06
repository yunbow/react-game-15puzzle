import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '新しいゲーム',
    onClick: () => {},
  },
};

export const Disabled: Story = {
  args: {
    children: '新しいゲーム',
    disabled: true,
    onClick: () => {},
  },
};