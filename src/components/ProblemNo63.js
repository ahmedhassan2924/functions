import React, { useState } from "react";

function ProblemNo63() {
  const [number, setNumber] = useState("");
  const [multiplicationTable, setMultiplicationTable] = useState([]);

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const generateMultiplicationTable = () => {
    if (parseInt(number) > 0) {
      const table = [];
      for (let i = 1; i <= 10; i++) {
        table.push(`${number} × ${i} = ${number * i}`);
      }
      setMultiplicationTable(table);
    } else {
      setMultiplicationTable([]); 
    }
  };

  return (
    <div>
      <h3>Display multiplication table of a number</h3>
      <div>
        Enter a number:
        <input type="number" value={number} onChange={handleNumberChange} />
      </div>
      <button onClick={generateMultiplicationTable}>Generate Multiplication Table</button>
      {multiplicationTable.length > 0 && (
        <div>
          <h4>Multiplication Table of {number}:</h4>
          <ul>
            {multiplicationTable.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProblemNo63;
