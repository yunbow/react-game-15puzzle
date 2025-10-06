export const isSolvable = (tiles: number[], emptyPosition: number): boolean => {
  let inversions = 0;
  for (let i = 0; i < 15; i++) {
    for (let j = i + 1; j < 16; j++) {
      if (tiles[i] !== 0 && tiles[j] !== 0 && tiles[i] > tiles[j]) {
        inversions++;
      }
    }
  }

  const emptyRow = 4 - Math.floor(emptyPosition / 4);

  if (emptyRow % 2 === 1) {
    return inversions % 2 === 0;
  } else {
    return inversions % 2 === 1;
  }
};

export const isAlreadySolved = (tiles: number[]): boolean => {
  for (let i = 0; i < 15; i++) {
    if (tiles[i] !== i + 1) {
      return false;
    }
  }
  return tiles[15] === 0;
};

export const shuffleArray = (array: number[]): { tiles: number[]; emptyPosition: number } => {
  let newArray: number[];
  let emptyPosition: number;

  do {
    newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    emptyPosition = newArray.indexOf(0);
  } while (!isSolvable(newArray, emptyPosition) || isAlreadySolved(newArray));

  return { tiles: newArray, emptyPosition };
};

export const checkWin = (tiles: number[]): boolean => {
  for (let i = 0; i < 15; i++) {
    if (tiles[i] !== i + 1) {
      return false;
    }
  }
  return tiles[15] === 0;
};

export const isAdjacent = (position: number, emptyPosition: number): boolean => {
  const row = Math.floor(position / 4);
  const col = position % 4;
  const emptyRow = Math.floor(emptyPosition / 4);
  const emptyCol = emptyPosition % 4;

  return (
    (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
    (Math.abs(col - emptyCol) === 1 && row === emptyRow)
  );
};