import React,{useState} from 'react'

function AValue() {
    const[a,setA]= useState("");
    const[b,setB]= useState("");
    const[result,setResult]= useState(null);

    const handleChange = (event, setter) => {
        const value = event.target.value;
        setter(value);
      };
    // (a + b)2 – 2ab
    const calculateA=()=>{
        if(a && b){
            const A = 2 *(parseFloat(a)+parseFloat(b))-2*(parseFloat(a)*parseFloat(b));
            setResult(A);  
        }
        else{ setResult("Invalid")}
    }

  return (
    <div>
        <h3>15. Find the value of A such that A = (a + b)2 – 2ab</h3>
      
      <label htmlFor="a">Enter value for a: </label>
        <input
          type="number"
          id="a"
          value={a}
          onChange={(e) => handleChange(e, setA)}
        />
        <label htmlFor="b">Enter value for b: </label>
        <input
          type="number"
          id="b"
          value={b}
          onChange={(e) => handleChange(e, setB)}
        />
        <button  onClick={calculateA}>Calculate A</button>
        {result !== null && <p>Value of A: {result}</p>}
     
    </div>
  )
}

export default AValue
