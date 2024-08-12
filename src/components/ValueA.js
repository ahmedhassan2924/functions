import React, { useState } from "react";

function ValueA() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const calculateA = () => {
    if (x && y && z) {
      const A = (4 * parseFloat(x) - 3 * parseFloat(y)) / (2 * parseFloat(z));
      setResult(A);
    } else {
      setResult("Invalid");
    }
  };

  return (
    <div>
      <h3>11. Find the value of A such that A = (4x – 3y) / 2z</h3>
      <div>
        <label htmlFor="x">Enter value for x: </label>
        <input
          type="number"
          id="x"
          value={x}
          onChange={(e) => handleChange(e, setX)}
        />
      </div>
      <div>
        <label htmlFor="y">Enter value for y: </label>
        <input
          type="number"
          id="y"
          value={y}
          onChange={(e) => handleChange(e, setY)}
        />
      </div>
      <div>
        <label htmlFor="z">Enter value for z: </label>
        <input
          type="number"
          id="z"
          value={z}
          onChange={(e) => handleChange(e, setZ)}
        />
      </div>
      <button onClick={calculateA}>Calculate A</button>
      {result !== null && <p>Value of A: {result}</p>}
    </div>
  );
}

export default ValueA;
