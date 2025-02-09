import { tm } from '@/utils/tw-merge';
import HistoryItem from './history-item';

function History() {
  return (
    <section className={tm(
      'flex flex-col space-y-1',
      )}>
      <h3>게임 히스토리</h3>
      <ol>
        <HistoryItem />
      
      </ol>
    </section>
  );
}

export default History;
