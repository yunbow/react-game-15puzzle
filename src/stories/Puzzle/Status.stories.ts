import type { Meta, StoryObj } from '@storybook/react';
import { Status } from '../../features/puzzle/components/Status/Status';

const meta: Meta<typeof Status> = {
  title: 'Features/Puzzle/Components/Status',
  component: Status,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playing: Story = {
  args: {
    moves: 25,
    isWon: false,
  },
};

export const Won: Story = {
  args: {
    moves: 42,
    isWon: true,
  },
};

export const StartGame: Story = {
  args: {
    moves: 0,
    isWon: false,
  },
};