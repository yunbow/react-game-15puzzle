import React, { useEffect } from 'react';
import { PuzzleGrid } from '../components/PuzzleGrid/PuzzleGrid';
import { GameControls } from '../components/GameControls/GameControls';
import { Status } from '../components/Status/Status';
import { usePuzzle } from '../usePuzzle';
import styles from './PuzzleGame.module.css';

export const PuzzleGame: React.FC = () => {
  const { puzzleState, moveTile, newGame } = usePuzzle();

  useEffect(() => {
    newGame();
  }, [newGame]);

  return (
    <div className={styles.gameContainer}>
      <PuzzleGrid
        tiles={puzzleState.tiles}
        emptyPosition={puzzleState.emptyPosition}
        onTileClick={moveTile}
      />
      <GameControls onNewGame={newGame} />
      <Status moves={puzzleState.moves} isWon={puzzleState.isWon} />
    </div>
  );
};