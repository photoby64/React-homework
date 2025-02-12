import { tm } from '@/utils/tw-merge';
import { useEffect, useId, useState } from 'react';
import throttle from '@/utils/throttle';
import debounce from '@/utils/debounce';

function SideEffectDemo() {
  const throttleTimeId = useId();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [throttleTime, setThrottleTime] = useState(500);

  const handleChangeThrottleTime = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextThrottleTime = Number(e.target.value);
      setThrottleTime(nextThrottleTime);
    },
    300
  );

  useEffect(() => {
    const handleMove = throttle((e: PointerEvent) => {
      const x = Number(e.clientX.toFixed(0));
      const y = Number(e.clientY.toFixed(0));
      setMouse({ x, y });
    }, throttleTime);

    globalThis.addEventListener('pointermove', handleMove);

    return () => {
      globalThis.removeEventListener('pointermove', handleMove);
    };
  }, [throttleTime]);

  return (
    <section className='flex flex-col items-start'>
      <h2 className='text-2xl font-medium'>마우스 포인터 움직임 조절</h2>

      <div className='mt-5 mb-1'>
        <label htmlFor={throttleTimeId}>이벤트 발생 빈도 조절</label>
        <div className='mt-3'>
          <input
            type="range"
            className='accent-blue-700'
            id={throttleTimeId}
            min={100}
            max={1000}
            defaultValue={throttleTime}
            onChange={handleChangeThrottleTime}
           />
           <output>{throttleTime / 1000}s</output>
        </div>
      </div>
      
      <output
        className={tm(
          'inline-flex justify-center gap-3',
          'my-5 py-3 px-7 rounded-full',
          'bg-blue-800 text-white text-2xl font-mono'
        )}
      >
        <span>x</span>
        <span>=</span>
        <span className="text-amber-300/90">{mouse.x}</span>
        <span>/</span>y<span>=</span>
        <span className="text-amber-300/90">{mouse.y}</span>
      </output>
    </section>
  );
}

export default SideEffectDemo;
