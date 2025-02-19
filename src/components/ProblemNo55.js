import React, { useState } from 'react';

function ProblemNo55() {
  const [ninput, setNinput] = useState('');
  const [sum, setSum] = useState(0);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    
      setNinput(value);
    
  };

  const calculateSum = () => {
    let totalSum = 0;
    for (let i = 26; i <= parseInt(ninput); i++) {
      totalSum += i;
    }setSum(totalSum);
  };

  return (
    <div>
        <h3>Find sum of first n integers starting from 26</h3>
      <input
        type="number"
        value={ninput}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={calculateSum}>Calculate Sum</button>
      {sum > 0 && (
        <p>Sum of first {ninput} integers: {sum}</p>
      )}
    </div>
  );
}

export default ProblemNo55;
