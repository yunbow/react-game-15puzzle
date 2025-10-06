export interface PuzzleState {
  tiles: number[];
  emptyPosition: number;
  moves: number;
  isWon: boolean;
}

export interface TileProps {
  value: number;
  isEmpty: boolean;
  onClick: () => void;
}

export interface StatusProps {
  moves: number;
  isWon: boolean;
}
