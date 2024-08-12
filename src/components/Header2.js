import React, { useState } from 'react';

function Header2() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  
  const [result, setResult] = useState('');

  const handleSum = () => {
    setResult(parseFloat(number1) + parseFloat(number2));
  };

  const handleDifference = () => {
    setResult(parseFloat(number1) - parseFloat(number2));
  };

  const handleProduct = () => {
    setResult(parseFloat(number1) * parseFloat(number2));
  };

  const handleDivision = () => {
    if (parseFloat(number2) === 0) {
      setResult("Division by zero is not allowed.");
    } else {
      setResult(parseFloat(number1) / parseFloat(number2));
    }
  };

  
  return (
    <div>
        <h3>(2)Find sum/difference/product/division of two/three numbers</h3>
    
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
      
      <button onClick={handleSum}>Sum</button>
      <button onClick={handleDifference}>Difference</button>
      <button onClick={handleProduct}>Product</button>
      <button onClick={handleDivision}>Division</button>
      
      <input
          type="number"
          value={result} 
        />
    </div>
  );
}

export default Header2;
