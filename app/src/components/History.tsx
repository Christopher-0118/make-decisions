import { useAppSelector } from '@/hooks/useAppSelector';
import './history.css';

const History = () => {
  const selectedHistory = useAppSelector((state) => state.wheelHistory.entries);

  return (
    <div className="results-table">
      <div className="table-header">
        <strong>Time</strong>
        <strong>Results</strong>
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
