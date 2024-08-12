import React, { useState } from "react";

function ProblemNo58() {
  const [ninput, setNinput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [result, setResult] = useState([]);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);

    setNinput(value);
  };
  const handleInputChange1 = (event) => {
    const value = parseInt(event.target.value);

    setNumberInput(value);
  };

  const generateIntegers = () => {
    const newIntegers = [];
    for (let i = 0; i < parseInt(ninput); i++) {
      const result = i % parseInt(numberInput);
      if (result == 0) {
        newIntegers.push(i);
      }
    }
    setResult(newIntegers);
  };

  return (

    <div style={{}}>
      <h3>Find all numbers which are divisible by a number from first n integers</h3>
      <input
        type="number"
        value={ninput}
        onChange={handleInputChange}
        placeholder="Enter value of n"
      />
      <input
        type="number"
        value={numberInput}
        onChange={handleInputChange1}
        placeholder="Enter a number"
      />
      <button onClick={generateIntegers}>Generate Integers</button>

        <div>
          {result.map((item) => {
            return <p>{item}</p>;
          })}
        </div>

    </div>
  );
}

export default ProblemNo58;
