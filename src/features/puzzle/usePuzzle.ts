import { useState, useCallback } from 'react';
import { PuzzleState } from './types';
import { shuffleArray, checkWin, isAdjacent } from './puzzleUtils';

export const usePuzzle = () => {
  const [puzzleState, setPuzzleState] = useState<PuzzleState>({
    tiles: Array.from({ length: 16 }, (_, i) => i),
    emptyPosition: 15,
    moves: 0,
    isWon: false,
  });

  const moveTile = useCallback((position: number) => {
    if (puzzleState.isWon) return;

    if (isAdjacent(position, puzzleState.emptyPosition)) {
      setPuzzleState((prev) => {
        const newTiles = [...prev.tiles];
        newTiles[prev.emptyPosition] = newTiles[position];
        newTiles[position] = 0;

        const newMoves = prev.moves + 1;
        const isWon = checkWin(newTiles);

        return {
          tiles: newTiles,
          emptyPosition: position,
          moves: newMoves,
          isWon,
        };
      });
    }
  }, [puzzleState.isWon, puzzleState.emptyPosition]);

  const newGame = useCallback(() => {
    const solvedState = Array.from({ length: 16 }, (_, i) => i === 15 ? 0 : i + 1);
    const { tiles, emptyPosition } = shuffleArray(solvedState);

    setPuzzleState({
      tiles,
      emptyPosition,
      moves: 0,
      isWon: false,
    });
  }, []);

  return {
    puzzleState,
    moveTile,
    newGame,
  };
};