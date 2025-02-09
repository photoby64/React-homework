import { tm } from '@/utils/tw-merge';

type CellProps = Omit<React.ComponentProps<'button'>, 'onClick'> & {
  onPlay: () => void;
};

function Cell({ children, className = '', onPlay, ...restProps }: CellProps) {

  const hasChildren = !!children;

  const handlePlay = () => {
    // 화면에 표시한 플레이어(콘텐츠)가 있다면? (함수 종료)
    if (hasChildren) return;
    // 화면에 표시한 플레이어(콘텐츠)가 없다면? (onPlay 함수 실행)
    onPlay?.();
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      aria-disabled={hasChildren}
      className={tm(
        'cursor-pointer',
        'size-16 border rounded-md',
        'text-2xl font-semibold',
        'border-black/50',
        { 'hover:border-black hover:bg-slate-100/60': !hasChildren },
        { 'cursor-not-allowed bg-black/10': hasChildren },
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Cell;
