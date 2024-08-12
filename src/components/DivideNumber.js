import React, { useState } from "react";

function DivideNumber() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const DivideNumber = () => {
    console.log(num1,num2);
    return
    const Num1 = parseFloat(num1);
    const Num2 = parseFloat(num2);

    if (Num2 !== 0) {
      setResult(Num1/Num2);
    
    }
    else{
        setResult("Invalid");
      }
  };

  return (
    <div>
      <h3> 23. Divide a number by another if and only if the second number is not equal to 0</h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={DivideNumber}>Answer</button>
     <p>{result}Ans.</p>
    </div>
  );
}

export default DivideNumber;
