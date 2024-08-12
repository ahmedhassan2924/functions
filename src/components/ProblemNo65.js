import React, { useState } from "react";

function ProblemNo65() {
  const [number, setNumber] = useState("");
  const [isPrime, setIsPrime] = useState(null);

  const checkPrime = () => {
    const num = parseInt(number);

    let primeNo = 1;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        primeNo = false;
        
      }
    }

    setIsPrime(primeNo);
  };

  return (
    <div>
      <h3>Check whether a number is prime or composite</h3>
      <div>
        Number:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <button onClick={checkPrime}>Check Prime</button>
      {isPrime !== null && (
        <p>
          The number {number} is {isPrime ? "prime" : "composite"}.
        </p>
      )}
    </div>
  );
}

export default ProblemNo65;
