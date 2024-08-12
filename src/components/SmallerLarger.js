import React, { useState } from "react";

function SmallerLarger() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const findSmallerLarger = () => {
    const Num1 = parseFloat(num1);
    const Num2 = parseFloat(num2);

    if (Num1 > Num2) {
      setResult(`${Num1} is greater`);
    } else if (Num2 > Num1) {
      setResult(`${Num2} is greater`);
    } else if (Num1===Num2) {
      setResult(`both numbers are equal`);
    }
    else{
        setResult("Invalid");
      }
  };

  return (
    <div>
      <h3> Find smaller/larger of two numbers</h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={findSmallerLarger}>Find Smaller/Larger</button>
     <p>{result}</p>
    </div>
  );
}

export default SmallerLarger;
