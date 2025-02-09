import { tm } from '@/utils/tw-merge';
import { useState } from 'react';

interface CounterButtonProps {
  max: number;
  changeCount: (count: number) => void;
  price: number;
}

function CounterButton({ max, changeCount, price }: CounterButtonProps) {
  const [count, setCount] = useState(1);

  const plus = () => {
    if (count < max) {
      setCount(count + 1);
      changeCount(price);
    }
  };

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
      changeCount(-price);
    }
  };

  return (
    <div className={tm('')}>
      <button onClick={minus} className={tm('font-bold')}>
        -
      </button>

      <span>{count}</span>
      <button
        onClick={plus}
        disabled={count === max ? true : false}
        className={tm('font-bold')}
      >
        +
      </button>
    </div>
  );
}

export default CounterButton;
