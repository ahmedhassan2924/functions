import React,{useState} from 'react'

function DivideMultiply() {
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
    if(Num1-Num2 > 10){
        setResult
        (num1/num2)
    }
    
    else  { setResult(Num1*Num2) }

  }

  return (
    <div>
       <h3> Divide two numbers if their difference is greater than 10, otherwise multiply them</h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      
      <button onClick={DivideMultiply}>Find number</button>
     <p>{result} Ans</p>
    </div>
  )
}

export default DivideMultiply
