        import React, { useState } from 'react';
import '../styles/components/InputForm.css';

const InputForm = ({ setResults }) => {
  const [totalHouses, setTotalHouses] = useState('');
  const [contaminatedHouses, setContaminatedHouses] = useState('');
  const [totalContainers, setTotalContainers] = useState('');
  const [contaminatedContainers, setContaminatedContainers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const a = parseFloat(totalHouses);
    const b = parseFloat(contaminatedHouses);
    const c = parseFloat(totalContainers);
    const d = parseFloat(contaminatedContainers);

    const hi = a && b ? (b * 100 / a).toFixed(2) : 'NaN';
    const bi = a && d ? (d * 100 / a).toFixed(2) : 'NaN';
    const ci = c && d ? (d * 100 / c).toFixed(2) : 'NaN';

    setResults({ hi, bi, ci });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="totalHouses">Number of Houses</label>
          <input type="number" id="totalHouses" value={totalHouses} onChange={(e) => setTotalHouses(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="contaminatedHouses">Contaminated Houses</label>
          <input type="number" id="contaminatedHouses" value={contaminatedHouses} onChange={(e) => setContaminatedHouses(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="totalContainers">Number of Containers</label>
          <input type="number" id="totalContainers" value={totalContainers} onChange={(e) => setTotalContainers(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="contaminatedContainers">Contaminated Containers</label>
          <input type="number" id="contaminatedContainers" value={contaminatedContainers} onChange={(e) => setContaminatedContainers(e.target.value)} required />
        </div>
        <button type="submit">Calculate</button>
      </form>
    </section>
  );
};

export default InputForm;
