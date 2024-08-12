import React,{useState} from 'react'

function MultiplyDiffirence() {
    const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const MultiplyDiffirence = () =>{
    const Num1 = parseFloat(num1);
    const Num2 = parseFloat(num2);
    if(num1-num2 > 0){
        setResult
        (num1*num2)
    }
    else  { setResult("invalid") }

  }

  return (
    <div>
       <h3> Find MultiplyDiffirence</h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      
      <button onClick={MultiplyDiffirence}>Find number</button>
     <p>{result} Ans</p>
    </div>
  )
}

export default MultiplyDiffirence
