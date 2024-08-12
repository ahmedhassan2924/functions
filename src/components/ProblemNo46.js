import React, { useState } from "react";

function ProblemNo46() {
  const [numberInput, setNumberInput] = useState("");
  const [integers, setIntegers] = useState([]);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);

    setNumberInput(value);
  };

  const generateIntegers = () => {
    const newIntegers = [];
    for (let i = 0; i < parseInt(numberInput); i++) {
      newIntegers.push(i);

    }
    setIntegers(newIntegers);
  };

  return (
    <div>
      <h3>Find/Display first n integers</h3>
      <input
        type="number"
        value={numberInput}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={generateIntegers}>Generate Integers</button>
      {numberInput > 0 && (
        <div>
          {integers.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default ProblemNo46;
