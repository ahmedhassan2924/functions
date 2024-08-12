import React,{useState} from 'react'

function ThirdNumber() {
    const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleNum3Change = (e) => {
    setNum3(e.target.value);
  };
  const SumCheck = () =>{
    const Num1 = parseFloat(num1);
    const Num2 = parseFloat(num2);
    const Num3 = parseFloat(num3);
    if(Num1+Num2>Num3){
        setResult
        ("The sum is greater then third number")
    }
    else  { setResult("The sum is not greater then third number") }

  }

  return (
    <div>
       <h3> Find whether the sum of two numbers is greater than the third number</h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <input type="number" value={num3} onChange={handleNum3Change} />
      
      <button onClick={SumCheck}>Find number</button>
     <p>{result} </p>
    </div>
  )
}

export default ThirdNumber
