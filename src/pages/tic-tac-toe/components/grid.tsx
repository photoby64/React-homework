import { useState } from 'react';
import { tm } from '@/utils/tw-merge';
import { INITIAL_CELLS, Player, type Cells } from '../constants';
import Cell from './cell';

function Grid() {

  const [cells, setCells] = useState<Cells>(INITIAL_CELLS);
  const [order, setOrder] = useState<number>(0);

  const nextPlayer = order % 2 === 0 ? Player.ONE : Player.TWO;

  const handlePlay = (index: number) => {
    const nextOrder = order + 1;
    setOrder(nextOrder);

    const nextCells = cells.map((cell, i) => (index !== i ? cell : nextPlayer));
    setCells(nextCells);
  };

  return (
    <div className={tm('grid grid-rows-3 grid-cols-3 gap-1')}>
      {cells.map((cell, index) => {
        return (
          <Cell key={index} onPlay={() => handlePlay(index)}>
            {cell}
          </Cell>
        );
      })}
    </div>
  );
}

export default Grid;