import React, { useState } from "react";

function ProblemNo62() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [Eintegers, setEintegers] = useState([]);
  const [Ointegers,setOintegers] = useState([]);
  

  const handleAChange = (event) => {
    setA(event.target.value);
  };

  const handleBChange = (event) => {
    setB(event.target.value);
  };

  const generateIntegers = () => {
    console.log('start');
    let minimumvalue;
    let maximumvalue;
    if (parseInt(a) > parseInt(b)) {
      maximumvalue = parseInt(a);
      minimumvalue = parseInt(b);
    } else if (parseInt(a) < parseInt(b)) {
      minimumvalue = parseInt(a);
      maximumvalue = parseInt(b);
    }
    let oddnumbers = [];
    let evennumbers= [];
    for (let i = minimumvalue+1; i < maximumvalue; i++) {
      const result = i % 2;
      if (result != 0) {
        oddnumbers.push(i);
      }
      else if (result == 0) {
        evennumbers.push(i);
      }
    }
    setEintegers(evennumbers);
    setOintegers(oddnumbers);
    
  };

  return (
    <div>
      <h3> Find how many even and odd numbers are there between any two integers</h3>
      <div>
        Integer a:
        <input type="number" value={a} onChange={handleAChange} />
      </div>
      <div>
        Integer b:
        <input type="number" value={b} onChange={handleBChange} />
      </div>
      <button onClick={generateIntegers}>generateIntegers</button>
      {Eintegers.length > 0 && (
        <div>
            <h5>Even Numbers ({Eintegers.length})</h5>
          {Eintegers.map((item) => {
            return <p>{item}</p>;
          })}
        </div>

      )}
      
      { Ointegers.length > 0 && (
        <div>
            <h5>Odd numbers ({Ointegers.length})</h5>
          {Ointegers.map((item) => {
            return <p>{item}</p>;
          })}
        </div>

      )}
    </div>
  );
}

export default ProblemNo62;