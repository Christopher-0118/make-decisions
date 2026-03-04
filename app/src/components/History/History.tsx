import type { HistoryProps } from '../type';
import { Trash2 } from 'lucide-react';
import './history.css';

const History = ({ entries, onClear }: HistoryProps) => {
  return (
    <div className="results-table">
      <div className="table-header">
        <strong>Results:</strong>
        <button onClick={onClear} aria-label="Clear history" className="iconTrash">
          <Trash2 size={20} />
        </button>
      </div>
      {entries.map((item, index) => (
        <label className="result" key={index}>
          <label>{item.time}</label>
          <label>{Array.isArray(item.results) ? item.results.join(', ') : item.results}</label>
          {item.resultsSum ? <label>{item.resultsSum}</label> : ''}
        </label>
      ))}
    </div>
  );
};

export default History;
