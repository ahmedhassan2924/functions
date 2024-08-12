import React, { useState } from "react";

function ProblemNo61() {
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
    console.log('start');
    let minimumvalue;
    let maximumvalue;
    if (parseInt(a) > parseInt(b)) {
      maximumvalue = parseInt(a);
      minimumvalue = parseInt(b);
    } else if (parseInt(a) < parseInt(b)) {
      minimumvalue = parseInt(a);
      maximumvalue = parseInt(b);
    }
    let oddnumbers = [];
    for (let i = minimumvalue+1; i < maximumvalue; i++) {
      const result = i % 2;
      if (result != 0) {
        oddnumbers.push(i);
      }
    }
    let oddsum = 0;
    oddnumbers.forEach((number) => {
      oddsum += number;
    });
    console.log('end');
    setSum(oddsum);
  };

  return (
    <div>
      <h3>Find sum of odd numbers between any two integer</h3>
      <div>
        Integer a:
        <input type="number" value={a} onChange={handleAChange} />
      </div>
      <div>
        Integer b:
        <input type="number" value={b} onChange={handleBChange} />
      </div>
      <button onClick={calculateSum}>Calculate Sum</button>
      {
        <p>
          Sum of numbers between {a} and {b}: {sum}
        </p>
      }
    </div>
  );
}

export default ProblemNo61;