import React, { useState } from "react";

function NegativePositive() {
  const [number,setNumber]= useState(0);
  
  const [result, setResult] = useState("");

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  

  const NegativePositive = () => {
    const num = parseFloat(number);
    

    if (num > 0) {
      setResult(`${num} is positive`);
    } else if (num < 0) {
      setResult(`${num} is negative`);
    } 
    
    else{
        setResult("Invalid");
      }
  };

  return (
    <div>
      <h3> Find positive negative of two numbers</h3>
      <input type="number" value={number} onChange={handleNumberChange} />
      
      <button onClick={NegativePositive}>Find negative/positive</button>
     <p>{result}</p>
    </div>
  );
}

export default NegativePositive;
