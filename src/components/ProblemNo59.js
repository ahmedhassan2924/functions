import React, { useState } from "react";

function ProblemNo59() {
  const [numberInput, setNumberInput] = useState("");
  
  const [result,setResult] = useState([]);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);

    setNumberInput(value);
  };

  const generateIntegers = () => {
    let oddnumbers = [];
    for (let i = 1; i < parseInt(numberInput); i++) {
      const result = i % 2;
      if (result != 0) {
        oddnumbers.push(i);
      }
    }
    let filteredNumbers = [];
    oddnumbers.forEach((number) => {
      if (number % 3 === 0) {
        filteredNumbers.push(number);
      }
    });
    setResult(filteredNumbers);

  };

  return (
    <div>
      <h3>Find all odd numbers which are divisible by 3 from first n integer</h3>
      <input
        type="number"
        value={numberInput}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={generateIntegers}>Generate Integers</button>
      {numberInput > 0 && (
        <div>
          {result.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default ProblemNo59;
