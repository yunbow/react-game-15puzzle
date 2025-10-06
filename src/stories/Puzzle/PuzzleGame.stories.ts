import type { Meta, StoryObj } from '@storybook/react';
import { PuzzleGame } from '../../features/puzzle/PuzzleGame/PuzzleGame';

const meta: Meta<typeof PuzzleGame> = {
  title: 'Features/Puzzle/Components/PuzzleGame',
  component: PuzzleGame,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};