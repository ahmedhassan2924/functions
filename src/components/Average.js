import React, { useState } from "react";

function Average() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [average, setAverage] = useState("");

  const calculateAverage = () => {
    if (!number1 || !number2) {
      window.alert("fields empty");
    } else {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);
      const avg = num1 + num2 / 2;
      setAverage(avg);
    }
  };
  return (
    <div>
      <h3>(3)Find average of two numbers</h3>

      <label>
        Number 1:
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </label>
      <label>
        Number 2:
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </label>
      <button onClick={calculateAverage}>Calculate Average</button>
      <input
        // type="number"
        value={average ? average : "no value"}
        disabled={true}
      />
    </div>
  );
}

export default Average;
