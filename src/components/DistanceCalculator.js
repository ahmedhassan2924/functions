import React, { useState } from "react";

function DistanceCalculator() {
  const [x, setX] = useState("");
  const [v, setV] = useState("");
  const [t, setT] = useState("");
  const [a, setA] = useState("");
  const [distance, setDistance] = useState(null);

  const handleChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const calculateDistance = () => {
    if (x && v && t && a) {
      const D = parseFloat(x) + parseFloat(v) * parseFloat(t) + 0.5 * parseFloat(a) * parseFloat(t) ** 2;
      setDistance(D);
    } else {
      setDistance("Invalid ");
    }
  };

  return (
    <div>
      <h3>12.Find the value of distance ‘D’ for given values of ‘x’, ‘v’,‘t’, ‘a’
(where D = x + vt + 1/2at2)</h3>
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
        <label htmlFor="v">Enter value for v: </label>
        <input
          type="number"
          id="v"
          value={v}
          onChange={(e) => handleChange(e, setV)}
        />
      </div>
      <div>
        <label htmlFor="t">Enter value for t: </label>
        <input
          type="number"
          id="t"
          value={t}
          onChange={(e) => handleChange(e, setT)}
        />
      </div>
      <div>
        <label htmlFor="a">Enter value for a: </label>
        <input
          type="number"
          id="a"
          value={a}
          onChange={(e) => handleChange(e, setA)}
        />
      </div>
      <button onClick={calculateDistance}>Calculate Distance</button>
      {distance !== null && <p>Value of Distance (D): {distance}</p>}
    </div>
  );
}

export default DistanceCalculator;
