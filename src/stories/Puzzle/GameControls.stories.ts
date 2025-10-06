import type { Meta, StoryObj } from '@storybook/react';
import { GameControls } from '../../features/puzzle/components/GameControls/GameControls';

const meta: Meta<typeof GameControls> = {
  title: 'Features/Puzzle/Components/GameControls',
  component: GameControls,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onNewGame: { action: 'new game clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onNewGame: () => {},
  },
};