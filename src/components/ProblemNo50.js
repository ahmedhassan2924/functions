import React, { useState } from 'react';

function ProblemNo50() {
  const [ninput, setNinput] = useState('');
  const [sum, setSum] = useState('');

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    
      setNinput(value);
    
  };

  const calculateSum = () => {
    let sum = 0
    for(let i=1;i<=parseInt(ninput);i++){
      const result = i%2
      if (result==0){
        sum=sum+i
      }
      
    }
    setSum(sum);
  };

  return (
    <div>
      <h3>Find sum of first n even numbers</h3>
      <input
        type="number"
        value={ninput}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={calculateSum}>Calculate Sum</button>
       
        <p>Sum of first {ninput} even numbers: {sum}</p>
      
    </div>
  );
}

export default ProblemNo50;
