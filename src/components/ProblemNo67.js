import React, { useState } from "react";

function ProblemNo67() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [prime, setPrime] = useState([]);

  const handleAChange = (event) => {
    setA(event.target.value);
  };

  const handleBChange = (event) => {
    setB(event.target.value);
  };

  const showPrime = () => {
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
   
        const primes = [];
        for (let  i= minimumvalue; i < maximumvalue; i++) {
            let isPrime = true;
            for (let j = 2; j <= i/2; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(i);
            }
        }
        setPrime(primes);
  };
  
  return (
    <div>
      <h3> Find prime numbers between any two integers</h3>
      <div>
        Integer a:
        <input type="number" value={a} onChange={handleAChange} />
      </div>
      <div>
        Integer b:
        <input type="number" value={b} onChange={handleBChange} />
      </div>
      <button onClick={showPrime}>Prime number</button>
      {prime.map((item) => {
            return <p>{item}</p>;
          })}
    </div>
  );
}

export default ProblemNo67;