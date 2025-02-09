import { tm } from '@/utils/tw-merge';
import Cell from './cell';
import { useState } from 'react';

const INITIAL_CELLS = Array(9).fill(null) ;
console.log(INITIAL_CELLS);

function Grid() {
  const [cells] = useState(INITIAL_CELLS);

  return (
    <div className={tm(
      'grid grid-cols-3 grid-rows-3 gap-1'
      )}>
      {cells.map((_cell, index) => {
        return <Cell key={index}>{index + 1}</Cell>;
      })}
    </div>
  );
}

export default Grid;
