import React, { useState } from "react";

function ProblemNo57() {
  const [numberInput, setNumberInput] = useState("");
  const [Eintegers, setEintegers] = useState([]);
  const [Ointegers,setOintegers] = useState([]);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);

    setNumberInput(value);
  };

  const generateIntegers = () => {
    const evenIntegers = [];
    const oddIntegers = [];
    for (let i = 0; i < parseInt(numberInput); i++) {
      const result = i % 2;
      if (result == 0) {
        evenIntegers.push(i);
      } else if (result != 0) {
        oddIntegers.push(i);
      }
    }
    
    setEintegers(evenIntegers);
    setOintegers(oddIntegers);
  };

  return (
    <div>
      <h3>Find even and odd numbers from first n integer</h3>
      <input
        type="number"
        value={numberInput}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={generateIntegers}>Generate Integers</button>
      {numberInput > 0 && (
        <div>
            <h5>Even Numbers</h5>
          {Eintegers.map((item) => {
            return <p>{item}</p>;
          })}
        </div>

      )}
      
      {numberInput > 0 && (
        <div>
            <h5>Odd numbers</h5>
          {Ointegers.map((item) => {
            return <p>{item}</p>;
          })}
        </div>

      )}

    </div>
  );
}

export default ProblemNo57;
