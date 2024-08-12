import React, { useState } from "react";

function ProblemNo64() {
  const [base, setBase] = useState("");
  const [target, setTarget] = useState("");
  const [firstPower, setFirstPower] = useState(null);
  const findPower = () => {
    const baseNumber = parseInt(base);
    const targetNumber = parseInt(target);
  
    if ((baseNumber) && (targetNumber)) {
      let power=[]
      let result = 1;
      for (power = 1; result < targetNumber; power++) {
        result *= baseNumber;
      }
      setFirstPower(power);
    } else {
      setFirstPower(null);
    }
  };

 

  return (
    <div>
      <h3>Find the first power of a number that is greater than or equal to another number</h3>
      <div>
        Base number:
        <input type="number" value={base} onChange={(e) => setBase(e.target.value)} />
      </div>
      <div>
        Target number:
        <input type="number" value={target} onChange={(e) => setTarget(e.target.value)} />
      </div>
      <button onClick={findPower}>Find Power</button>
      {firstPower !== null && (
        <p>The first power of {base} that is greater than or equal to {target} is {firstPower}</p>
      )}
    </div>
  );
}

export default ProblemNo64;
