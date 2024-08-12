import React, { useState } from 'react';

function ProblemNo48() {
  const [num, setNum] = useState('');
  const [factorial, setFactorial] = useState(null);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    
      setNum(value);
    
  };

  const calculateFactorial = () => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    setFactorial(fact);
  };

  return (
    <div>
        <h3>Find factorial of a number</h3>
      <input
        type="number"
        value={num}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={calculateFactorial}>Calculate Factorial</button>
      {factorial !== null && (
        <p>Factorial of {num} is: {factorial}</p>
      )}
    </div>
  );
}

export default ProblemNo48;
