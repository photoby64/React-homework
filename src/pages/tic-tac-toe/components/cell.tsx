import { tm } from '@/utils/tw-merge';

type CellProps = React.ComponentProps<'button'>;

function Cell({ children, className = '', ...restProps }: CellProps) {
  return (
    <button
      type="button"
      className={tm(
        'cursor-pointer',
        'size-12 border rounded-md',
        'border-black/50',
        'hover:border-black hover:bg-amber-200/50',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Cell;
