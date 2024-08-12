import React, { useState } from "react";

function ProblemNo54() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [sum, setSum] = useState("");

  const handleAChange = (event) => {
    setA(event.target.value);
  };

  const handleBChange = (event) => {
    setB(event.target.value);
  };

  const calculateSum = () => {
    let minimumvalue;
    let maximumvalue;
    if (parseInt(a) > parseInt(b)) {
      maximumvalue = parseInt(a);
      minimumvalue = parseInt(b);
    } else if (parseInt(a) < parseInt(b)) {
      minimumvalue = parseInt(a);
      maximumvalue = parseInt(b);
    }
    let sum = 0;
    for (let i = minimumvalue + 1; i < maximumvalue; i++) {
      sum += i;
    }
    setSum(sum);
  };

  return (
    <div>
      <h3>Find sum of numbers between two integers</h3>
      <div>
        Integer a:
        <input type="number" value={a} onChange={handleAChange} />
      </div>
      <div>
        Integer b:
        <input type="number" value={b} onChange={handleBChange} />
      </div>
      <button onClick={calculateSum}>Calculate Sum</button>
      {sum !== "" && (
        <p>
          Sum of numbers between {a} and {b}: {sum}
        </p>
      )}
    </div>
  );
}

export default ProblemNo54;
