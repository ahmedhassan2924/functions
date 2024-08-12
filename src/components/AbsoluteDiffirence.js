import React, { useState } from 'react';

function AbsoluteDifference() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const Num1 = parseFloat(num1);


  const calculateAbsoluteDifference = () => {
    return Math.abs(parseInt(num1) -parseInt(num2));
  };

  return (
    <div>
        <h3>16. Find absolute value of difference of two numbers</h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <p>The absolute difference is: {calculateAbsoluteDifference()}</p>
    </div>
  );
}

export default AbsoluteDifference;
