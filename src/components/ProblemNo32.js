import React,{useState} from 'react'

function ProblemNo32() {
    const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const SumCheck = () =>{
    const Num1 = parseFloat(num1);
    const Num2 = parseFloat(num2);
    const sum = (Num1 / Num2);
   
    if((Num2 >= 0 && Num2 <= 10)){
        setResult(sum)
        
    }
    else  { setResult("Second number must be between 0 and 10 for division.") }

  }

  return (
    <div>
       <h3>32. Divide a number by another if second number is between 0 and 10</h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      
      <button onClick={SumCheck}>Find number</button>
     <p>Ans.{result} </p>
    </div>
  )
}

export default ProblemNo32