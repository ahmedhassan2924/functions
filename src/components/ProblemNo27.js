import React,{useState} from 'react'

function ProblemNo27() {
    const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const DivideMultiply = () =>{
    const Num1 = parseFloat(num1);
    const Num2 = parseFloat(num2);
    if(Num1+Num2 > 100){
        setResult
        (num1*num2)
    }
    
    else  { setResult(Num1/Num2) }

  }

  return (
    <div>
       <h3> 27. Multiply two numbers if their sum is greater than 100, otherwise divide them</h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      
      <button onClick={DivideMultiply}>Find number</button>
     <p>{result} Ans</p>
    </div>
  )
}

export default ProblemNo27
