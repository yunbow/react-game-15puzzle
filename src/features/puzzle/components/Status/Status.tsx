import React from 'react';
import { StatusProps } from '../../types';
import styles from './Status.module.css';

export const Status: React.FC<StatusProps> = ({ moves, isWon }) => {
  return (
    <div className={styles.status}>
      {isWon ? (
        <div className={styles.winMessage}>
          🎉 おめでとうございます！ {moves}手でクリアしました！
        </div>
      ) : (
        `移動回数: ${moves}`
      )}
    </div>
  );
};