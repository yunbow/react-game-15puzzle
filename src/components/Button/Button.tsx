import React from 'react';
import { ButtonProps } from './types';
import styles from './Button.module.css';

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};