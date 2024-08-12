import React, { useState } from "react";

function ProblemNo45() {
  const [ConversationType, setconversationType] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const Basic = [
    { ConversationType: 1, discription: "Gram" },
    { ConversationType: 2, discription: "Milligram" },
  ];

  const handleChange = (e) => {
    setconversationType(e.target.value);
  };

  const handleChange1 = (e) => {
    setWeight(e.target.value);
  };

  const Calculate = () => {
    if (ConversationType == "" || weight == "") {
      alert("please enter info ");
      return;
    } else {
      if (ConversationType == 1) {
        const formula = parseInt(weight) * 1000;
        setResult(formula + "G");
      }
      if (ConversationType == 2) {
        const formula = parseInt(weight) * 10000;
        setResult(formula + "MG");
      }
      if (ConversationType > 2) {
        setResult("invalid conversion type");
      }
    }
  };

  return (
    <div>
        <h3>Find weight in appropriate unit from given weight in kilograms and conversion type</h3>
      {Basic.map((item, index) => (
        <li key={index}>
          {item.ConversationType} - Weight in : {item.discription}
        </li>
      ))}
      <input
        type="number"
        value={ConversationType}
        onChange={handleChange}
        placeholder="Enter conversationType"
      />
      <input
        type="number"
        value={weight}
        onChange={handleChange1}
        placeholder="Enter Weight"
      />
      <button onClick={Calculate}>weight</button>
      <p>Ans.{result} </p>
    </div>
  );
}

export default ProblemNo45;
