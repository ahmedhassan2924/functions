import React,{useState} from 'react'

function ProblemNo30() {
    const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  
  const [average, setAverage] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };
  const handleNum3Change = (e) => {
    setNum3(e.target.value);
  };


  const calculateAverage = () =>{
    const Num1 = parseFloat(num1);
    const Num2 = parseFloat(num2);
    const Num3 = parseFloat(num3);
    const result = num1 + num2 + num3 / 2;
    if(result > 0){
        setAverage
        ("The average of number is positive")
    }
    
    else if (result < 0 ) {
        setAverage("The average of number is negative")
    }

  }

  return (
    <div>
       <h3> Determine whether the “average” of three numbers is negative or not.</h3>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <input type="number" value={num3} onChange={handleNum3Change} />
      
      <button onClick={calculateAverage}>Find number</button>
     <p>{average} Ans</p>
    </div>
  )
}

export default ProblemNo30