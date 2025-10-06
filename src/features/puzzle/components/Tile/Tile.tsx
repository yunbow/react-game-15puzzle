import React from 'react';
import { TileProps } from '../../types';
import styles from './Tile.module.css';

export const Tile: React.FC<TileProps> = ({ value, isEmpty, onClick }) => {
  return (
    <div
      className={`${styles.tile} ${isEmpty ? styles.empty : ''}`}
      onClick={isEmpty ? undefined : onClick}
    >
      {!isEmpty && value}
    </div>
  );
};