import React from 'react';
import { Tile } from '../Tile/Tile';
import styles from './PuzzleGrid.module.css';

interface PuzzleGridProps {
  tiles: number[];
  emptyPosition: number;
  onTileClick: (position: number) => void;
}

export const PuzzleGrid: React.FC<PuzzleGridProps> = ({ tiles, onTileClick }) => {
  return (
    <div className={styles.puzzleGrid}>
      {tiles.map((value, index) => (
        <Tile
          key={index}
          value={value}
          isEmpty={value === 0}
          onClick={() => onTileClick(index)}
        />
      ))}
    </div>
  );
};