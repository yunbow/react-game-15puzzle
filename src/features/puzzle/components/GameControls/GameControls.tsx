import React from 'react';
import { Button } from '../../../../components/Button';
import styles from './GameControls.module.css';

interface GameControlsProps {
  onNewGame: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({ onNewGame }) => {
  return (
    <div className={styles.controls}>
      <Button onClick={onNewGame}>新しいゲーム</Button>
    </div>
  );
};