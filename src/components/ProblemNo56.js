import React, { useState } from "react";

function ProblemNo56() {
  const [n, setN] = useState('');
  const [series, setSeries] = useState([]);

  const handleNChange = (event) => {
    setN(event.target.value);
  };

  const generateSeries = () => {
    const num = parseInt(n);

    const newSeries = [];

    
    let currentNumber = 1;
    let diffirence = 1;

    for (let i = 1; i < num; i++) {
      newSeries.push(currentNumber);
      currentNumber += diffirence;
      diffirence++;
    }

    
    setSeries(newSeries);
  };

  return (
    <div>
      <h3>Generate Series</h3>
      <div>
        Enter value of n:
        <input type="number" value={n} onChange={handleNChange} />
      </div>
      <button onClick={generateSeries}>Generate Series</button>
      <div>
        <h4>Series:</h4>
        <ul>
          {series.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProblemNo56;
