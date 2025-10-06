import type { Meta, StoryObj } from '@storybook/react';
import { Tile } from '../../features/puzzle/components/Tile/Tile';

const meta: Meta<typeof Tile> = {
  title: 'Features/Puzzle/Components/Tile',
  component: Tile,
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
    value: 1,
    isEmpty: false,
    onClick: () => {},
  },
};

export const Empty: Story = {
  args: {
    value: 0,
    isEmpty: true,
    onClick: () => {},
  },
};

export const HighNumber: Story = {
  args: {
    value: 15,
    isEmpty: false,
    onClick: () => {},
  },
};