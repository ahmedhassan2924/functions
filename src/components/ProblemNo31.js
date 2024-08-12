import React,{useState} from 'react'

function ProblemNo31() {
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
    const sum = (Num1 + Num2);
    
    if(Num2===0){
        setResult(sum+5)
        
    }
    else  { setResult(sum) }

  }

  return (
    <div>
       <h3>31. Find sum of two numbers (If second number is equal to 0 add 5 to it)</h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      
      <button onClick={SumCheck}>Find number</button>
     <p>Ans.{result} </p>
    </div>
  )
}

export default ProblemNo31