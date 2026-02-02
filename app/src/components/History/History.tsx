import { useAppSelector } from '@/hooks/useAppSelector';
import { Trash2 } from 'lucide-react';
import './history.css';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { clearAllEntries } from '@/store/wheelHistorySlice';

const History = () => {
  const selectedHistory = useAppSelector((state) => state.wheelHistory.entries);
  const dispatch = useAppDispatch();
  const handlerClear = () => {
    dispatch(clearAllEntries());
  };

  return (
    <div className="results-table">
      <div className="table-header">
        <strong>Results:</strong>
        <button onClick={handlerClear} aria-label="Clear history" className="iconTrash">
          <Trash2 size={20} />
        </button>
      </div>
      {selectedHistory.map((item, index) => (
        <label className="result" key={index}>
          <label>{item.time}</label>
          <label>{item.results.join(', ')}</label>
        </label>
      ))}
    </div>
  );
};

export default History;
