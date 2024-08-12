import React,{useState} from 'react'

function ProblemNo33() {
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
   
    if(((Num1 === 0 || Num2 === 0))){
        setResult(sum)
        
    }
    else  { setResult("Either of the numbers must be 0 for addition.") }

  }

  return (
    <div>
       <h3>33. Add two numbers if either of them is 0</h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      
      <button onClick={SumCheck}>Find number</button>
     <p>Ans.{result} </p>
    </div>
  )
}

export default ProblemNo33