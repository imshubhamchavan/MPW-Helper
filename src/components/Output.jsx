import React from 'react';
import '../styles/components/Output.css';

const Output = ({ results }) => (
  <section className="output" aria-live="polite">
    <h2>Results</h2>
    <span>HI: {results.hi}</span>
    <span>BI: {results.bi}</span>
    <span>CI: {results.ci}</span>
  </section>
);

export default Output;
