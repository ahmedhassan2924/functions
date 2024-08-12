import React,{useState} from 'react'

function SumCheck() {
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
    if(Num1+Num2>50){
        setResult
        ("The answer is greater then 50")
    }
    else  { setResult("invalid") }

  }

  return (
    <div>
       <h3>Find whether the sum of two numbers is greater than 50</h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      
      <button onClick={SumCheck}>Find number</button>
     <p>{result} </p>
    </div>
  )
}

export default SumCheck
