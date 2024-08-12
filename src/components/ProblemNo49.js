import React, { useState } from "react";

function ProblemNo49() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const calculatePower = () => {
    let result = 1
    for(let i = 0;i< parseInt(y);i++){
        result *=x;
    }
    setResult(result);
  };

  return (
    <div>
        <h3>Find xy</h3>
      <input
        type="number"
        value={x}
        onChange={(event) => handleInputChange(event, setX)}
        placeholder="Enter x"
      />
      <input
        type="number"
        value={y}
        onChange={(event) => handleInputChange(event, setY)}
        placeholder="Enter y"
      />
      <button onClick={calculatePower}>Calculate</button>
      
        <p>
          {x} raised to the power of {y} is {result}
        </p>
      
    </div>
  );
}

export default ProblemNo49;
