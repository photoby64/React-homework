import { tm } from '@/utils/tw-merge';

function HistoryItem() {
  return (
    <li>
      <button
        type="button"
        className={tm(
          'flex place-items-center px-3 py-1',
          'bg-gray-600 text-white',
          'rounded-md',
          'text-xs',
          'hover:bg-gray-900'
        )}
      >
        게임 시작~!~!
      </button>
    </li>
  );
}

export default HistoryItem;
