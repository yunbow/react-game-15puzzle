import type { Meta, StoryObj } from '@storybook/react';
import { PuzzleGrid } from '../../features/puzzle/components/PuzzleGrid/PuzzleGrid';

const meta: Meta<typeof PuzzleGrid> = {
  title: 'Features/Puzzle/Components/PuzzleGrid',
  component: PuzzleGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onTileClick: { action: 'tile clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
    emptyPosition: 15,
    onTileClick: () => {},
  },
};

export const Shuffled: Story = {
  args: {
    tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 13, 14, 15, 12],
    emptyPosition: 11,
    onTileClick: () => {},
  },
};