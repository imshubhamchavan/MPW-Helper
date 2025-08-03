import React, { useState } from 'react';
import './App.css';

function App() {
  const [totalHouses, setTotalHouses] = useState('');
  const [contaminatedHouses, setContaminatedHouses] = useState('');
  const [totalContainers, setTotalContainers] = useState('');
  const [contaminatedContainers, setContaminatedContainers] = useState('');
  const [results, setResults] = useState({ hi: '-', bi: '-', ci: '-' });

  const calculate = (e) => {
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
    <>
      <header>
        <nav className="navbar">
          <div className="logo">MPW Helper</div>
        </nav>
      </header>

      <main>
        <h1>HI, BI, CI</h1>
        <section>
          <form onSubmit={calculate}>
            <div className="input-group">
              <label htmlFor="totalHouses">Number of Houses</label>
              <input
                type="number"
                id="totalHouses"
                value={totalHouses}
                onChange={(e) => setTotalHouses(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="contaminatedHouses">Contaminated Houses</label>
              <input
                type="number"
                id="contaminatedHouses"
                value={contaminatedHouses}
                onChange={(e) => setContaminatedHouses(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="totalContainers">Number of Containers</label>
              <input
                type="number"
                id="totalContainers"
                value={totalContainers}
                onChange={(e) => setTotalContainers(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="contaminatedContainers">Contaminated Containers</label>
              <input
                type="number"
                id="contaminatedContainers"
                value={contaminatedContainers}
                onChange={(e) => setContaminatedContainers(e.target.value)}
                required
              />
            </div>

            <button type="submit">Calculate</button>
          </form>
        </section>

        <section className="output" aria-live="polite">
          <h2>Results</h2>
          <span>HI: {results.hi}</span>
          <span>BI: {results.bi}</span>
          <span>CI: {results.ci}</span>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Designed & Developed by <a href='https://www.linkedin.com/in/shubham--chavan/'>Shubham</a></p>
      </footer>
    </>
  );
}

export default App;
