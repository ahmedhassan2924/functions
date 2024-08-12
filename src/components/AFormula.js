import React, { useState } from "react";

function AFormula() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const calculateA = () => {
    if (a && b && c) {
      const A = ((parseFloat(a) - parseFloat(b)) ** 2) / (2 * parseFloat(c));
      setResult(A);
    } else {
      setResult("Invalid");
    }
  };

  return (
    <div>
      <h2>13.Find the value of A such that A = (a - b)2 / 2c</h2>
      <div>
        <label htmlFor="a">Enter value for a: </label>
        <input
          type="number"
          id="a"
          value={a}
          onChange={(e) => handleChange(e, setA)}
        />
      </div>
      <div>
        <label htmlFor="b">Enter value for b: </label>
        <input
          type="number"
          id="b"
          value={b}
          onChange={(e) => handleChange(e, setB)}
        />
      </div>
      <div>
        <label htmlFor="c">Enter value for c: </label>
        <input
          type="number"
          id="c"
          value={c}
          onChange={(e) => handleChange(e, setC)}
        />
      </div>
      <button onClick={calculateA}>Calculate A</button>
      {result !== null && <p>Value of A: {result}</p>}
    </div>
  );
}

export default AFormula;
